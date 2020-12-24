import React from 'react'
import { Link } from 'gatsby'

import Img from '@/components/shared/image'
import { BlogCatGroupProps } from '@/types'

const Cat: React.FC<{ catGroup: BlogCatGroupProps }> = ({ catGroup }) => {
  return (
    <section className="text-center">
      <h1 className="pb-4 mb-10 section__ttl">カテゴリー</h1>
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
    </section>
  )
}

export default Cat
