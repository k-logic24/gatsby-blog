import React from 'react'

import Particle from '@/components/organisms/particle'
import { AppProps } from '@/types'
import { splitTestToChars } from '@/utils/SplitTextUtils'

const Fv: React.FC<AppProps['fv']> = ({ title, date, isText = true }) => {
  const titleJsx = isText ? (
    <section className="pt-12 text-center absolute-center w-5/6 leading-loose">
      <h1 className="text-white text-2xl md:text-4xl tracking-widest font-scripts">
        <span id="js-splitText">{title}</span>
      </h1>
      {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
    </section>
  ) : null

  // cpu使用率が高い、開発ではただの黒画面にする
  const devComponent = process.env.NODE_ENV === 'development' ? <div className="absolute top-0 left-0 bottom-0 right-0 bg-black">&ensp;</div> : <Particle />

  return (
    <div className="fv">
      {devComponent}
      {titleJsx}
    </div>
  )
}

export default Fv
