import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Book/Main'
import { BookPageProps } from '@/types'

const BlogIndex: React.FC<BookPageProps> = ({ data, pageContext }) => {
  return <Main data={data} pageContext={pageContext} />
}

export default BlogIndex

export const pageQuery = graphql`
  query BookPage($limit: Int!, $skip: Int!, $identifer: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $identifer } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          author
          published_date
          thumb {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
