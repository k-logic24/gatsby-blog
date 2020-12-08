import React, { useEffect } from 'react'

import Particle from '@/components/particle'
import { AppProps } from '@/types'

const Fv: React.FC<AppProps['fv']> = ({ title, date }) => {
  return (
    <div className="fv">
      <Particle />
      <section className="fv__wrap">
        <h1 className="fv__ttl">{title}</h1>
        {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
      </section>
    </div>
  )
}

export default Fv
