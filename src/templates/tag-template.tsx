import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import Item from '@/components/item'
import Pagination from '@/components/pagination'
import { AppProps } from '@/types'

const TagIndex: React.FC<
  PageProps<GatsbyTypes.TagPage> & AppProps['template']
> = ({ data, pageContext }) => {
  const tagPosts = data.allMarkdownRemark.edges
  const { tagId, isFirst, isLast, currentPage, tagPages } = pageContext

  if (tagPosts.length === 0) {
    return (
      <Layout title={`TAG：${tagId}`}>
        <Seo title={`TAG：${tagId}`} />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title={`Tag: ${tagId}`}>
      <Seo title={`${tagId}`} description={`タグ: ${tagId}の一覧です。`} />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`${tagId}`}</h1>
        </div>
        <ul className="blog-list">
          {tagPosts.map(({ node }) => (
            <Item
              key={node.fields.slug}
              title={node.frontmatter.title}
              src={node.frontmatter.hero.childImageSharp.fluid!}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
            />
          ))}
        </ul>
        <div className="max-w-screen-sm mx-auto py-12">
          <Pagination
            isFirst={isFirst!}
            isLast={isLast!}
            currentPage={currentPage!}
            type={`tag/${tagId}`}
            pages={tagPages!}
          />
        </div>
      </section>
    </Layout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query TagPage($limit: Int!, $skip: Int!, $tagId: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { in: [$tagId] } } }
    ) {
      totalCount
      edges {
        node {
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
  }
`
