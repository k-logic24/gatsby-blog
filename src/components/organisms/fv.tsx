import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { AppProps } from '@/@types'

const Fv: React.FC<AppProps['fv']> = ({ title, date, isText = true, assetName }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 900) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const src = assetName || 'default.jpg'
  const fvSrc = allImageSharp.nodes.find(n => n.fluid.originalName === src)?.fluid

  return (
    <BackgroundImage
      Tag="div"
      className="fv"
      fluid={fvSrc}
    >
      <div className="fv-overlay" />
      {isText && (
        <section className="pt-12 text-center absolute-center w-5/6 leading-loose z-10">
          <h1 className="text-white text-2xl md:text-4xl tracking-widest font-dosis">
            {title}
          </h1>
          {date ? <span className="text-gray-200 text-xs">{date}</span> : null}
        </section>
      )}
    </BackgroundImage>
  )
}

export default Fv
