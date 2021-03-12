import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'

import { AppProps } from '@/@types'

const TagLabel: React.FC<AppProps['taglabel']> = ({
  fieldValue,
  totalCount,
  variant,
}) => {
  const size = clsx(
    'post-tag',
    variant === 'sm' && 'font-normal text-sm',
    variant === 'lg' && 'font-bold text-base sm:text-lg'
  )

  return (
    <Link className={size} to={`/tag/${fieldValue}`}>
      <p className="relative z-10">
        {fieldValue}
        {totalCount && (
          <span className="inline-block ml-2">({totalCount})</span>
        )}
      </p>
    </Link>
  )
}

export default TagLabel
