import React, { useEffect, useState } from 'react'

import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import { BlogPageProps } from '@/@types'

type PostProps = BlogPageProps['data']['allMarkdownRemark']['nodes']

const Main: React.FC<BlogPageProps> = ({ data, pageContext }) => {
  const [posts, setPosts] = useState<PostProps>([])
  const { currentPage, blogPages } = pageContext

  useEffect(() => {
    setPosts(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <Layouts>
      <Fv title="POST" />
      <Seo
        title="POST | K.Iwata's BLOG"
        description="This is the blog list page. I write not only about the web, but also about my daily life."
      />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
        <section className="section blog">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">記事</h1>
          </div>
          <ul className="article-list">
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
              currentPage={currentPage!}
              type="post"
              pages={blogPages!}
            />
          </div>
        </section>
      </main>
    </Layouts>
  )
}

export default Main
