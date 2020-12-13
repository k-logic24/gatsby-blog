import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/Bio'
import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import Item from '@/components/blog/item'
import { AppProps } from '@/types'
import Pagination from '@/pages/pagination'

const TagIndex: React.FC<
  PageProps<GatsbyTypes.TagPage> & AppProps['template']
> = ({ data, pageContext }) => {
  const tagPosts = data.allMarkdownRemark.edges
  const { tagId, isFirst, isLast, currentPage, tagPages } = pageContext
  console.log(tagPosts)

  if (tagPosts.length === 0) {
    return (
      <Layout title={`TAG：${tagId}`}>
        <Seo title={`TAG：${tagId}`} />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title={`TAG：${tagId}`}>
      <Seo title={`TAG：${tagId}`} />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`TAG：${tagId}`}</h1>
        </div>
        <ul className="blog-list">
          {tagPosts.map(({ node }) => (
            <li key={node.fields.slug}>
              <article itemScope itemType="http://schema.org/Article">
                <figure className="overflow-hidden rounded relative blog-list__imgwrap">
                  <Link
                    to={`/blog${node.fields.slug!}`}
                    className="block transition-transform duration-700 ease-out"
                    itemProp="url"
                  >
                    <Image
                      fluid={node.frontmatter.hero.childImageSharp.fluid!}
                      alt=""
                    />
                  </Link>
                  <p className="blog-list__date">{node.frontmatter.date}</p>
                </figure>
                <h2 className="blog-list__ttl">
                  <Link
                    to={`/blog${node.fields.slug!}`}
                    itemProp="url"
                    className="block hover:opacity-60 transition-opacity"
                  >
                    <span itemProp="headline">{node.frontmatter.title}</span>
                  </Link>
                </h2>
                <div className="mt-2 flex flex-wrap gap-1">
                  {node.frontmatter.tags &&
                    node.frontmatter.tags.map((tag, index) => (
                      <Link
                        className="text-xs md:text-sm post-tag"
                        to={`/tag/${tag}`}
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="max-w-screen-sm mx-auto py-12">
          <Pagination
            isFirst={isFirst!}
            isLast={isLast!}
            currentPage={currentPage!}
            type={`tag`}
            pages={tagPages!}
          />
        </div>
      </section>
    </Layout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query TagPage($limit: Int!, $skip: Int!, $tagId: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tags: { in: [$tagId] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            description
            hero {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
