import React from 'react'

import TagLabel from '@/components/atoms/tag-label'
import { BlogTagGroupProps } from '@/@types'

const Tag: React.FC<{ tagGroup: BlogTagGroupProps }> = ({ tagGroup }) => {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-8 bg-gray-tag dark:bg-white rounded-lg">
      <div className="text-center">
        <h1 className="pb-4 mb-10 text-gray section__ttl">タグ</h1>
      </div>
      <ul className="flex flex-wrap justify-center -my-1.5 -mx-1">
        {tagGroup.map(({ fieldValue, totalCount }) => (
          <li className="my-1.5 mx-1" key={fieldValue}>
            <TagLabel
              fieldValue={fieldValue!}
              totalCount={totalCount}
              variant="lg"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
