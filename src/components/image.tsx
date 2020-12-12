import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

interface ImgProps {
  assetUrl: string
  alt: string
}

const Img: React.FC<ImgProps> = ({ assetUrl, alt }) => {
  const { allImageSharp } = useStaticQuery<GatsbyTypes.ImgQuery>(graphql`
    query Img {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={
        allImageSharp.nodes.find(n => n.fluid?.originalName === assetUrl)
          ?.fluid!
      }
      alt={alt}
    />
  )
}

export default Img
