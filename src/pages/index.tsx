import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Main from '@/components/pages/Top/Main'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return <Main data={data} />
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/(tech|daily)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
