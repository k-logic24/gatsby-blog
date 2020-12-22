import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import Img from '@/components/atoms/image'

const Cat: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.CatQuery>(graphql`
    query Cat {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)
  const catGroup = data.allMarkdownRemark.group

  return (
    <ul className="cat-list">
      {catGroup.map(({ fieldValue }) => (
        <li key={fieldValue}>
          <Link className="cat-list__link" to={`/cat/${fieldValue}`}>
            <figure className="cat-list__imgwrap">
              <Img assetUrl={`cat-${fieldValue}.jpg`} alt={``} />
            </figure>
            <p className="cat-list__txt">{fieldValue}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Cat
