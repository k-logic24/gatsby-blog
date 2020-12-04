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
      <SEO title="Home" />
      <div className="home">
        <div className="mb-6">
          <p className="mb-4">Hi!</p>
          <p>
            My name is K.Iwata.
            <br />
            My job is FrontEngineer.
          </p>
        </div>
        <p>
          <a
            className="text-link anim-link"
            href="https://zenn.dev/k_logic24"
            target="_blank"
          >
            Check Tech Site
          </a>
        </p>
      </div>
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
