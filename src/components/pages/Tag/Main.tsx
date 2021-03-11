import React from 'react'

import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'
import Item from '@/components/molecules/item'
import Pagination from '@/components/organisms/pagination'
import { TagTemplateProps } from '@/types'

const TagIndex: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  const tagPosts = data.allMarkdownRemark.edges
  const { tagId, currentPage, tagPages } = pageContext

  return (
    <Layouts>
      <Fv title={tagId} />
      <Seo
        title={`Tag: ${tagId} | K.Iwata's BLOG`}
        description={`The page of tag ${tagId}`}
      />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
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
      </main>
    </Layouts>
  )
}

export default TagIndex
