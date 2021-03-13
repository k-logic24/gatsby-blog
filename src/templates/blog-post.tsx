import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Post/Main'
import { BlogPostProps } from '@/@types'

const BlogPostTemplate: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  return <Main data={data} pageContext={pageContext} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        hero {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
            sizes {
              src
            }
          }
        }
      }
      htmlAst
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
    }
  }
`
