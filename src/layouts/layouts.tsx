import React from 'react'

import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import Footer from '@/components/organisms/footer'

interface Props {
  isText: boolean
  fvTitle?: string
}

const Layouts: React.FC<Props> = ({ children, fvTitle, isText }) => {
  return (
    <div className="wrapper">
      <Header />
      <Fv title={fvTitle} isText={isText} />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layouts
