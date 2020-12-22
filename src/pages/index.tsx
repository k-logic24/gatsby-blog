import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import Layout from '@/components/templates/layout'
import Item from '@/components/molecules/item'
import Seo from '@/components/seo'
import Search from '@/components/organisms/search'
import Tag from '@/components/organisms/tag'
import Cat from '@/components/organisms/cat'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Hi!Dear">
      <Seo title="Home" />
      <div className="section home">
        <div className="section-wrap">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">最新の記事</h1>
          </div>
          {posts.length ? (
            <>
              <ul className="blog-list">
                {posts.map(post => (
                  <Item
                    key={post.id}
                    title={post.frontmatter?.title || post.fields?.slug}
                    src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                    slug={post.fields?.slug}
                    date={post.frontmatter?.date}
                    tags={post.frontmatter?.tags as any}
                  />
                ))}
              </ul>
              <div className="pt-8 text-center">
                <Link className="link link--more" to="/blog">
                  もっとみる
                </Link>
              </div>
            </>
          ) : (
            <p>no posts...</p>
          )}
        </div>
        <div className="section-wrap">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">検索</h1>
          </div>
          <Search />
        </div>
        <div className="section-wrap">
          <div className="max-w-screen-md mx-auto px-4 py-8 bg-gray-tag dark:bg-white rounded-lg">
            <div className="text-center">
              <h1 className="pb-4 mb-10 text-gray section__ttl">タグ</h1>
            </div>
            <Tag />
          </div>
        </div>
        <div className="section-wrap">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">カテゴリー</h1>
          </div>
          <Cat />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
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
        id
      }
    }
  }
`
