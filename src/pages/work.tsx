import React from 'react'
import { graphql } from 'gatsby'

import Main from '@/components/pages/Work/Main'

const WorkIndex: React.FC<{ data: GatsbyTypes.WorkPageQuery }> = ({ data }) => {
  return <Main data={data} />
}

export default WorkIndex

export const pageQuery = graphql`
  query WorkPage {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "work" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          siteUrl
          githubUrl
          thumb {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          skill
        }
      }
    }
  }
`
