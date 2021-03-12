import React, { useState } from 'react'
import { Link } from 'gatsby'

import { PostProps } from '@/@types'

const Search: React.FC<{ posts: PostProps }> = ({ posts }) => {
  const [searchData, setSearchData] = useState<
    GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['nodes']
  >([])
  const handleInputSearch = (target: EventTarget) => {
    if (target instanceof HTMLInputElement) {
      const keyword = target.value.toLowerCase()
      if (keyword) {
        const data = posts.filter(post => {
          const target = `${post.frontmatter?.title?.toLowerCase()}`
          return target.indexOf(keyword) !== -1
        })
        setSearchData(data)
        return
      }
      setSearchData([])
    }
  }

  return (
    <div className="search">
      <div className="text-center pb-2 md:py-4 search-wrap">
        <input
          className="search__input"
          type="text"
          placeholder="keyword"
          onInput={event => handleInputSearch(event.target)}
        />
      </div>
      <p className="text-sm text-center mb-4">{searchData.length}件ヒット！</p>
      <ul className="max-w-screen-sm mx-auto search-list">
        {searchData.map(x => (
          <li key={x.fields?.slug}>
            <dl>
              <div className="flex items-center text-sm md:text-base">
                <dt className="mr-4 text-sm whitespace-nowrap">
                  <time dateTime={x.frontmatter?.date}>
                    {x.frontmatter?.date}
                  </time>
                </dt>
                <Link
                  className="hover:text-accent transition-colors flex-1 font-bold underline"
                  to={`${x.fields?.slug}`}
                >
                  <dd>{x.frontmatter?.title}</dd>
                </Link>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
