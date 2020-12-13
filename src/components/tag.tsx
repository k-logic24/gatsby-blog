import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Tag = () => {
  const data = useStaticQuery<GatsbyTypes.TagQuery>(graphql`
    query Tag {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const tagGroup = data.allMarkdownRemark.group

  return (
    <ul className="flex flex-wrap justify-center gap-y-3 gap-x-1">
      {tagGroup.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <Link
            className="text-sm md:text-base font-bold post-tag"
            to={`/tag/${fieldValue}`}
          >
            {fieldValue}
            <span className="inline-block ml-2">({totalCount})</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tag
