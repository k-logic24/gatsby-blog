import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '@/layouts/default'
import Seo from '@/components/Seo'

const NotFoundPage: React.FC<PageProps<GatsbyTypes.Page404Query>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site!.siteMetadata!.title!

  return (
    <Layout title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
      }
    }
  }
`
