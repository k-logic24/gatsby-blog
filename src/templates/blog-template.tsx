import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import Item from '@/components/item'
import Pagination from '@/components/pagination'
import { AppProps } from '@/types'

const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogPageQuery> & AppProps['template']
> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes
  const { isFirst, isLast, currentPage, blogPages } = pageContext

  if (posts.length === 0) {
    return (
      <Layout title="BLOG">
        <Seo title="BLOG" description={`ブログ一覧ページになります。`} />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title="BLOG">
      <Seo title="BLOG" description={`ブログ一覧ページになります。`} />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">記事</h1>
        </div>
        <ul className="blog-list">
          {posts.map(post => {
            const title = post.frontmatter?.title || post.fields?.slug

            return (
              <Item
                key={post.fields!.slug!}
                title={title}
                src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                slug={post.fields?.slug}
                date={post.frontmatter?.date}
                tags={post.frontmatter?.tags as any}
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
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          hero {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
        }
      }
    }
  }
`
