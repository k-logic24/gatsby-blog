import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Blog/Main'
import { BlogPageProps } from '@/@types'

const BlogIndex: React.FC<BlogPageProps> = ({ data, pageContext }) => {
  return <Main data={data} pageContext={pageContext} />
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/(tech|daily)/" } } }
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          tags
        }
      }
    }
  }
`
