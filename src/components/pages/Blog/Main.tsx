import React, { useEffect, useState } from 'react'
import Seo from '@/components/shared/seo'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import { BlogPageProps } from '@/types'

type PostProps = BlogPageProps['data']['allMarkdownRemark']['nodes']

const Main: React.FC<BlogPageProps> = ({ data, pageContext }) => {
  const [posts, setPosts] = useState<PostProps>([])
  const { isFirst, isLast, currentPage, blogPages } = pageContext

  useEffect(() => {
    setPosts(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title="BLOG" isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        <Seo title="BLOG" description={`ブログ一覧ページになります。`} />
        <section className="section blog">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">記事</h1>
          </div>
          <ul className="card-list">
            {posts.map(post => {
              const title = post.frontmatter?.title || post.fields?.slug

              return (
                <Item
                  key={post.fields!.slug!}
                  title={title}
                  src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                  slug={post.fields?.slug}
                  date={post.frontmatter?.date}
                  tags={post.frontmatter?.tags}
                  variant={'sm'}
                />
              )
            })}
          </ul>
          <div className="max-w-screen-sm mx-auto py-12">
            <Pagination
              isFirst={isFirst!}
              isLast={isLast!}
              currentPage={currentPage!}
              type={`blog`}
              pages={blogPages!}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
