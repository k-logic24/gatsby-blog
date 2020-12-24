import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Main from '@/components/pages/Top/Main'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return <Main title="Hi!Dear" data={data} />
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        id
      }
      catGroup: group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      tagGroup: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
