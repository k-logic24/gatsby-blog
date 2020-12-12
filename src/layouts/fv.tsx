import React, { useEffect } from 'react'

import Particle from '@/components/Particle'
import { AppProps } from '@/types'
import { useLocation } from '@/hooks/useLocation'

const Fv: React.FC<AppProps['fv']> = ({ title, date, isText = true }) => {
  const titleJsx = isText ? (
    <section className="fv__wrap">
      <h1 className="fv__ttl font-scripts">{title}</h1>
      {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
    </section>
  ) : null

  return (
    <div className="fv">
      <Particle />
      {titleJsx}
    </div>
  )
}

export default Fv
