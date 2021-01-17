import React from 'react'
import { Link } from 'gatsby'

import Img from '@/components/shared/image'
import { BlogCatGroupProps } from '@/types'

const Cat: React.FC<{ catGroup: BlogCatGroupProps }> = ({ catGroup }) => {
  return (
    <section className="text-center">
      <h1 className="pb-4 mb-10 section__ttl">カテゴリー</h1>
      <ul className="max-w-screen-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 cat-list">
        {catGroup.map(({ fieldValue }) => (
          <li className="relative rounded overflow-hidden h-32 sm:h-40" key={fieldValue}>
            <Link className="cat-list__link" to={`/cat/${fieldValue}`}>
              <figure className="cat-list__imgwrap">
                <Img assetUrl={`cat-${fieldValue}.jpg`} alt={``} />
              </figure>
              <p className="font-bold text-xl md:text-3xl tracking-widest z-50 text-white font-scripts absolute-center">{fieldValue}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cat
