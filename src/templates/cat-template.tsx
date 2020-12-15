import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/bio'
import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import Item from '@/components/blog/item'
import Pagination from '@/components/pagination'
import { AppProps } from '@/types'

const TagIndex: React.FC<
  PageProps<GatsbyTypes.CatPage> & AppProps['template']
> = ({ data, pageContext }) => {
  const catPosts = data.allMarkdownRemark.edges
  const { catId, isFirst, isLast, currentPage, catPages } = pageContext

  console.log(catPosts)

  if (catPosts.length === 0) {
    return (
      <Layout title={`カテゴリー：${catId}`}>
        <Seo title={`カテゴリー：${catId}`} />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title={`カテゴリー: ${catId}`}>
      <Seo title={`カテゴリー: ${catId}`} />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">{`カテゴリー: ${catId}`}</h1>
        </div>
        <ul className="blog-list">
          {catPosts.map(({ node }) => (
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
                <div className="mt-1">
                  <ul className="blog-list-taglist">
                    {node.frontmatter.tags &&
                      node.frontmatter.tags.map((cat, index) => (
                        <li key={index}>
                          <Link
                            className="text-xs md:text-sm post-tag"
                            to={`/cat/${cat}`}
                          >
                            {cat}
                          </Link>
                        </li>
                      ))}
                  </ul>
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
            type={`cat/${catId}`}
            pages={catPages!}
          />
        </div>
      </section>
    </Layout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query CatPage($limit: Int!, $skip: Int!, $catId: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { in: [$catId] } } }
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
