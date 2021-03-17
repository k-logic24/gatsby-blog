import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

interface Props {
  title?: string
  src?: any
  siteUrl?: string
  githubUrl?: string
  skill?: string
}

const Item: React.FC<Props> = ({ title, src, siteUrl, githubUrl, skill }) => {
  return (
    <li>
      <article itemScope itemType="http://schema.org/Article">
        <figure>
          <a
            href={siteUrl}
            className="block"
            itemProp="url"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <GatsbyImage image={src!} alt="" />
          </a>
        </figure>
        <h2>
          <a
            href={siteUrl}
            itemProp="url"
            className="block font-bold hover:opacity-60 transition-opacity md:text-xl mb-2 mt-3"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <span itemProp="headline">{title}</span>
          </a>
        </h2>
        <div className="mt-1">
          <ul>
            <li className="text-xs md:text-base">Skill:&ensp;{skill}</li>
            <li>
              <a
                className="text-xs md:text-base text-blue-600 hover:underline"
                href={githubUrl}
                target="_blank"
                rel="nofollow noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </article>
    </li>
  )
}

export default Item
