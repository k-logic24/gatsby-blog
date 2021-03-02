import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: HTMLMetaElement[]
  title?: string
  image?: string
  isNoIndex?: boolean
}

const Seo: React.FC<Props> = ({
  description,
  lang,
  meta,
  title,
  image,
  isNoIndex,
}) => {
  const { site, avatar } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
          childImageSharp {
            original {
                src
            }
          }
        }
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const siteUrl = site?.siteMetadata?.siteUrl
  const metaDescription = description || site!.siteMetadata!.description
  const defaultTitle = site?.siteMetadata?.title
  const defaultImage = avatar?.childImageSharp?.original?.src
  const ogImage = image || defaultImage
  const noIndex = isNoIndex
    ? {
        name: `robots`,
        content: `noindex`,
      }
    : {}

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      meta={[
        noIndex,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${ogImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site!.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta!)}
    />
  )
}
Seo.defaultProps = {
  lang: 'ja',
  meta: [],
  description: '',
}

export default Seo
