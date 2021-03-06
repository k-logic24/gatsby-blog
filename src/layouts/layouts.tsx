import React from 'react'

import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'

const Layouts: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layouts
