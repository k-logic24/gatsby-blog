import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Tag/Main'
import { TagTemplateProps } from '@/types'

const TagIndex: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  const { tagId } = pageContext

  return <Main title={`Tag: ${tagId}`} data={data} pageContext={pageContext} />
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
