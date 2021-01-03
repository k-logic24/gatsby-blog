import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Main from '@/components/pages/Error/Main'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return <Main title="404 Not Found" data={data} />
}

export default BlogIndex

export const pageQuery = graphql`
  query ErrorPage {
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/(tech|daily)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
