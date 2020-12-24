import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'

import { AppProps } from '@/types'

const TagLabel: React.FC<AppProps['taglabel']> = ({
  fieldValue,
  totalCount,
  variant,
}) => {
  const size = clsx(
    'post-tag',
    variant === 'sm' && 'post-tag--sm',
    variant === 'lg' && 'post-tag--lg'
  )

  return (
    <Link className={size} to={`/tag/${fieldValue}`}>
      {fieldValue}
      {totalCount && <span className="inline-block ml-2">({totalCount})</span>}
    </Link>
  )
}

export default TagLabel
