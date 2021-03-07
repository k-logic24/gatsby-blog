import React from 'react'

import Particle from '@/components/organisms/particle'
import { AppProps } from '@/types'

const Fv: React.FC<AppProps['fv']> = ({ title, date, isText = true }) => {
  return (
    <div className="fv">
      {process.env.NODE_ENV === 'development' ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black" />
      ) : (
        <Particle />
      )}
      {isText && (
        <section className="pt-12 text-center absolute-center w-5/6 leading-loose">
          <h1 className="text-white text-2xl md:text-4xl tracking-widest font-dosis">
            {title}
          </h1>
          {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
        </section>
      )}
    </div>
  )
}

export default Fv
