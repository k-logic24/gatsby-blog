import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import Label from '@/components/atoms/label'
import { AppProps } from '@/types'

const Item: React.FC<AppProps['item']> = ({ title, date, slug, src, tags }) => {
  return (
    <li key={slug}>
      <article itemScope itemType="http://schema.org/Article">
        <figure className="overflow-hidden rounded relative blog-list__imgwrap">
          <Link
            to={`/blog${slug!}`}
            className="block transition-transform duration-700 ease-out"
            itemProp="url"
          >
            <Image fluid={src!} alt="" />
          </Link>
          <p className="blog-list__date">
            <span itemProp="datePublished" content={date}>
              {date}
            </span>
          </p>
        </figure>
        <h2 className="blog-list__ttl">
          <Link
            to={`/blog${slug!}`}
            itemProp="url"
            className="block hover:opacity-60 transition-opacity"
          >
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <div className="mt-1">
          <ul className="blog-list-taglist">
            {tags &&
              tags.map((tag, index) => (
                <li key={index}>
                  <Label fieldValue={tag} />
                </li>
              ))}
          </ul>
        </div>
      </article>
    </li>
  )
}

export default Item
