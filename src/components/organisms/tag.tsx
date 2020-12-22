import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import TagLabel from '@/components/atoms/tag-label'

const Tag: React.FC = () => {
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
    <ul className="tag-list">
      {tagGroup.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue}>
          <TagLabel fieldValue={fieldValue!} totalCount={totalCount} />
        </li>
      ))}
    </ul>
  )
}

export default Tag
