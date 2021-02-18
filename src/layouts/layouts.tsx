import React from 'react'

import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Footer from '@/components/organisms/footer'

interface Props {
  fvTitle?: string
  seoTitle?: string
  seoDescription?: string
  seoImage?: string
  isText: boolean
}

const Layouts: React.FC<Props> = ({ children, fvTitle, isText, seoTitle, seoDescription, seoImage }) => {
  return (
    <div className="wrapper">
      <Header />
      <Fv title={ fvTitle } isText={ isText } />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
        <Seo
          title={ seoTitle }
          description={seoDescription}
          image={seoImage}
        />
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layouts
