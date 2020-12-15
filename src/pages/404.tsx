import React from 'react'

import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import { Link } from 'gatsby'

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="404: Not Found">
      <Seo
        title="404: Not Found"
        description={`404Page`}
      />
      <section className="text-center">
        <p className="tracking-wider md:text-lg">You just hit a route.</p>
        <div className="pt-8 text-center">
          <Link className="link link--more" to="/">
            ホームへ戻る
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
