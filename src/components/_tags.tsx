import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Tags = () => {
  const [tags, setTags] = useState<string[]>([])
  const data = useStaticQuery<GatsbyTypes.TagQuery>(graphql`
    query Tag {
      allMarkdownRemark {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  useEffect(() => {
    const myTagSet = new Set('')
    nodes.map(({ frontmatter }) => {
      frontmatter?.tags?.map(tag => {
        myTagSet.add(tag ? tag : '')
        setTags(Array.from(myTagSet))
      })
    })
  }, [])

  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {tags.map(tag => (
        <li>
          <Link
            className="text-sm md:text-base font-bold tag"
            to={`/tag/${tag}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tags
