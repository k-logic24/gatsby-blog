import React from 'react'
import { Link } from 'gatsby'

import { AppProps } from '@/types'

const TagLabel: React.FC<AppProps['tag']> = ({ fieldValue, totalCount }) => {
  return (
    <Link
      className="text-sm md:text-base font-bold post-tag"
      to={`/tag/${fieldValue}`}
    >
      {fieldValue}
      {totalCount && <span className="inline-block ml-2">({totalCount})</span>}
    </Link>
  )
}

export default TagLabel
