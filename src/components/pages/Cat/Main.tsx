import React from 'react'

import Seo from '@/components/shared/seo'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import Footer from '@/components/organisms/footer'

import { CatTemplateProps } from '@/types'

const Cat: React.FC<CatTemplateProps> = ({ title, data, pageContext }) => {
  const catPosts = data.allMarkdownRemark.edges
  const { catId, currentPage, catPages } = pageContext

  return (
    <div className="wrapper">
      <Header />
      <Fv title={title} isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        <Seo
          title={title}
          description={`カテゴリー${catId}の一覧ページです。`}
        />
        <section className="section blog">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">{`${catId}`}</h1>
          </div>
          <ul className="card-list">
            {catPosts.map(({ node }) => (
              <Item
                key={node.fields?.slug}
                title={node.frontmatter?.title}
                src={node.frontmatter?.hero?.childImageSharp?.fluid}
                slug={node.fields?.slug}
                date={node.frontmatter?.date}
                tags={node.frontmatter?.tags}
                variant={'sm'}
              />
            ))}
          </ul>
          <div className="max-w-screen-sm mx-auto py-12">
            <Pagination
              currentPage={currentPage!}
              type={`cat/${catId}`}
              pages={catPages!}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Cat
