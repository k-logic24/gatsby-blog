import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Search: React.FC = () => {
  const [searchData, setSearchData] = useState<
    GatsbyTypes.SearchQuery['allMarkdownRemark']['nodes']
  >([])
  const data = useStaticQuery<GatsbyTypes.SearchQuery>(graphql`
    query Search {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  const handleInputSearch = (target: HTMLInputElement) => {
    const keyword = target.value.toLowerCase()
    if (keyword) {
      const data = nodes.filter(node => {
        const target = `
          ${node.frontmatter?.title?.toLowerCase()}
          ${node.fields?.slug?.toLowerCase()}
        `
        return target.indexOf(keyword) !== -1
      })
      setSearchData(data)
      return
    }
    setSearchData([])
  }

  return (
    <div className="search">
      <div className="text-center py-4 search-wrap">
        <input
          className="search__input"
          type="text"
          placeholder="keyword"
          onInput={event => handleInputSearch(event.target as HTMLInputElement)}
        />
      </div>
      <ul className="search-list">
        {searchData.map(x => (
          <li key={x.frontmatter.slug}>
            <div className="flex">
              <span>{x.frontmatter?.date}</span>
              <p>
                <Link to={x.fields?.slug!}>{x.frontmatter?.title}</Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
