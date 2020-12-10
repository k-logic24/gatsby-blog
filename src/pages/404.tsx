import React from 'react'

import Layout from '@/layouts/default'
import Seo from '@/components/seo'

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="404: Not Found">
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route.</p>
    </Layout>
  )
}

export default NotFoundPage
