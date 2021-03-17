import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Cat/Main'
import { CatTemplateProps } from '@/@types'

const TagIndex: React.FC<CatTemplateProps> = ({ data, pageContext }) => {
  const { catId } = pageContext
  return <Main title={`Cat: ${catId}`} data={data} pageContext={pageContext} />
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            tags
          }
        }
      }
    }
  }
`
