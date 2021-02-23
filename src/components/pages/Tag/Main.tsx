import React from 'react'

import Layouts from '@/layouts/layouts'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import { TagTemplateProps } from '@/types'

const TagIndex: React.FC<TagTemplateProps> = ({ title, data, pageContext }) => {
  const tagPosts = data.allMarkdownRemark.edges
  const { tagId, currentPage, tagPages } = pageContext

  return (
    <Layouts
      fvTitle={title}
      seoDescription={`The page of tag ${tagId}`}
      seoTitle={`Tag: ${tagId}`}
      isText={true}
    >
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`${tagId}`}</h1>
        </div>
        <ul className="article-list">
          {tagPosts.map(({ node }) => (
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
            type={`tag/${tagId}`}
            pages={tagPages!}
          />
        </div>
      </section>
    </Layouts>
  )
}

export default TagIndex
