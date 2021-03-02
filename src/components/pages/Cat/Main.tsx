import React from 'react'

import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import Layouts from '@/layouts/layouts'
import { CatTemplateProps } from '@/types'

const Cat: React.FC<CatTemplateProps> = ({ title, data, pageContext }) => {
  const catPosts = data.allMarkdownRemark.edges
  const { catId, currentPage, catPages } = pageContext

  return (
    <Layouts
      fvTitle={title}
      seoDescription={`The page of category ${catId}`}
      seoTitle={`Category: ${catId}`}
      isText
    >
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`${catId}`}</h1>
        </div>
        <ul className="article-list">
          {catPosts.map(({ node }) => (
            <Item
              key={node.fields?.slug}
              title={node.frontmatter?.title}
              src={node.frontmatter?.hero?.childImageSharp?.fluid}
              slug={node.fields?.slug}
              date={node.frontmatter?.date}
              tags={node.frontmatter?.tags}
              variant="sm"
            />
          ))}
        </ul>
        <div className="max-w-screen-sm mx-auto py-12">
          <Pagination
            currentPage={currentPage!}
            type={`cat/${catId}`}
            pages={catPages!}
          />
        </div>
      </section>
    </Layouts>
  )
}

export default Cat
