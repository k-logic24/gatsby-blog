import React from 'react'
import { Link, graphql } from 'gatsby'
import { PageProps } from 'gatsby'

import Layout from '@/layouts'
import SEO from '@/components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <p>
        Hi!
        <br />
        My name is K.Iwata.
      </p>
      <p>
        My job is FrontEngineer. Check{' '}
        <a href="https://zenn.dev/k_logic24" target="_blank">
          Tech Site
        </a>
      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`
