import React from 'react'
import Image from 'gatsby-image'

interface Props {
  title?: string
  src: any
  siteUrl?: string
  githubUrl?: string
  skill: string
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
            rel="nofollow noreferer"
          >
            <Image fluid={src!} alt="" />
          </a>
        </figure>
        <h2>
          <a
            href={siteUrl}
            itemProp="url"
            className="block font-bold hover:opacity-60 transition-opacity md:text-xl mb-2 mt-3"
            target="_blank"
            rel="nofollow noreferer"
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
