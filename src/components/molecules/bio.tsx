import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const author = data.site?.siteMetadata?.author
  const social = data.site?.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="flex">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <ul className="ml-4 self-end flex">
          <li>
            <a
              className="text-white text-sm anim-link"
              href={`https://twitter.com/${social?.twitter || ``}`}
              target="_blank"
              rel="noopenner noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="ml-2">
            <a
              className="text-white text-sm anim-link"
              href={`https://github.com/${social?.github || ``}`}
              target="_blank"
              rel="noopenner noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Bio
