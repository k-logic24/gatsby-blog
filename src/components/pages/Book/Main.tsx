import React, { useEffect, useState, useRef } from 'react'
import Image from 'gatsby-image'

import Seo from '@/components/shared/seo'
import Pagination from '@/components/organisms/pagination'
import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import { BookPageProps } from '@/types'

type BookProps = BookPageProps['data']['allMarkdownRemark']['nodes']

const Main: React.FC<BookPageProps> = ({ data, pageContext }) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  const [books, setBooks] = useState<BookProps>([])
  const { isFirst, isLast, currentPage, bookPages } = pageContext

  useEffect(() => {
    setBooks(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title="BOOK" isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-md">
        <Seo title="BOOK" description="本一覧ページになります。" />
        <section className="section book">
          <ul className="book-list">
            {books.length &&
              books.map(book => (
                <li key={book.fields?.slug}>
                  <h2 className="book__ttl">{book.frontmatter?.title}</h2>
                  <div className="sm:flex">
                    <figure className="book__imgwrap">
                      <Image
                        fluid={book.frontmatter!.thumb!.childImageSharp!.fluid!}
                        alt={book.frontmatter?.title}
                      />
                    </figure>
                    <div className="sm:ml-4">
                      <table className="book-table">
                        <thead>
                          <tr>
                            <th>著者</th>
                            <td>{book.frontmatter?.author}</td>
                          </tr>
                          <tr>
                            <th>出版日</th>
                            <td>{book.frontmatter?.published_date}</td>
                          </tr>
                        </thead>
                      </table>
                      <div
                        className="mt-4 book__contents"
                        dangerouslySetInnerHTML={{
                          __html: book.html as string,
                        }}
                        itemProp="articleBody"
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className="max-w-screen-sm mx-auto py-12">
            <Pagination
              isFirst={isFirst!}
              isLast={isLast!}
              currentPage={currentPage!}
              type={`book`}
              pages={bookPages!}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
