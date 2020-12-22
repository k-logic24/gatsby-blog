import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '@/components/templates/layout'
import Seo from '@/components/seo'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import { AppProps } from '@/types'

const TagIndex: React.FC<
  PageProps<GatsbyTypes.CatPage> & AppProps['template']
> = ({ data, pageContext }) => {
  const catPosts = data.allMarkdownRemark.edges
  const { catId, isFirst, isLast, currentPage, catPages } = pageContext

  if (catPosts.length === 0) {
    return (
      <Layout title={`${catId}`}>
        <Seo title={`${catId}`} />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title={`Cat: ${catId}`}>
      <Seo
        title={`${catId}`}
        description={`カテゴリー: ${catId}の一覧です。`}
      />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`${catId}`}</h1>
        </div>
        <ul className="blog-list">
          {catPosts.map(({ node }) => (
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
            type={`cat/${catId}`}
            pages={catPages!}
          />
        </div>
      </section>
    </Layout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query CatPage($limit: Int!, $skip: Int!, $catId: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { in: [$catId] } } }
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
