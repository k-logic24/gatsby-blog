import React, { useEffect, useState } from 'react'

import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'
import Tag from '@/components/organisms/tag'
import Cat from '@/components/organisms/cat'
import { BlogIndexProps, BlogTagGroupProps, BlogCatGroupProps } from '@/types'

const Main: React.FC<BlogIndexProps> = ({ data }) => {
  const [tagGroup, setTagGroup] = useState<BlogTagGroupProps | []>([])
  const [catGroup, setCatGroup] = useState<BlogCatGroupProps | []>([])

  useEffect(() => {
    const { tagGroup, catGroup } = data.allMarkdownRemark
    setTagGroup(tagGroup)
    setCatGroup(catGroup)
  }, [])

  return (
    <Layouts>
      <Fv title="404: NotFound" />
      <Seo isNoIndex />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
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
    </Layouts>
  )
}

export default Main
