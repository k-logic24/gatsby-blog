import React, { useEffect, useState } from 'react'

import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Tag from '@/components/organisms/tag'
import Cat from '@/components/organisms/cat'
import { BlogIndexProps, BlogTagGroupProps, BlogCatGroupProps } from '@/types'

const Main: React.FC<BlogIndexProps> = ({ title, data }) => {
  const [tagGroup, setTagGroup] = useState<BlogTagGroupProps | []>([])
  const [catGroup, setCatGroup] = useState<BlogCatGroupProps | []>([])

  useEffect(() => {
    const { tagGroup, catGroup } = data.allMarkdownRemark
    setTagGroup(tagGroup)
    setCatGroup(catGroup)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title={title} isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        <Seo title="404Page" description="404ページです。" />
        <div className="section home">
          <div className="section-wrap">
            <div className="text-center">
              <h1 className="pb-4 mb-10 section__ttl">404: Not Found</h1>
            </div>
            <p className="text-center">
              Sorry. This Page is not Found.
              <br />
              Please check your request url.
            </p>
          </div>
          <div className="section-wrap">
            <Tag tagGroup={tagGroup} />
          </div>
          <div className="section-wrap">
            <Cat catGroup={catGroup} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Main
