import React, { useEffect } from 'react'
import clsx from 'clsx'

import Particle from '@/components/particle'
import { AppProps } from '@/types'
import { useLocation } from '@/hooks/useLocation'

const Fv: React.FC<AppProps['fv']> = ({ title, date }) => {
  const [path] = useLocation()
  const isSpecificPage = path === '/' || path === '/blog'
  const fontClass = clsx('fv__ttl', isSpecificPage && 'font-scripts')

  return (
    <div className="fv">
      <Particle />
      <section className="fv__wrap">
        <h1 className={fontClass}>{title}</h1>
        {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
      </section>
    </div>
  )
}

export default Fv
