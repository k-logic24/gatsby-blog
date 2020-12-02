import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
            summary
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
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <ul className="bio-list">
          <li>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>
          </li>
          <li>
            <a href={`https://github.com/${social?.github || ``}`}>GitHub</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Bio
