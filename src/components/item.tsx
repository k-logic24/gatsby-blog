import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import { AppProps } from '@/types'

const Item: React.FC<AppProps['item']> = ({ title, date, slug, src }) => {
  return (
    <li>
      <article itemScope itemType="http://schema.org/Article">
        <figure className="overflow-hidden blog-list__imgwrap">
          <Link
            to={slug!}
            className="block transition-transform duration-700 ease-out"
            itemProp="url"
          >
            <Image fluid={src!} alt="" />
          </Link>
        </figure>
        <h2 className="blog-list__ttl">
          <Link
            to={slug!}
            itemProp="url"
            className="block hover:opacity-60 transition-opacity"
          >
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <span className="text-xs text-gray-400">{date}</span>
      </article>
    </li>
  )
}

export default Item
