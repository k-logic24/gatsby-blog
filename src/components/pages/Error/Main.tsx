import React, { useEffect, useState } from 'react'

import Layouts from '@/layouts/layouts'
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
    <Layouts
      fvTitle="404: NotFound"
      seoDescription="Sorry.This page is Error Page.."
      seoTitle="404: NotFound"
      isText={true}
    >
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
    </Layouts>
  )
}

export default Main
