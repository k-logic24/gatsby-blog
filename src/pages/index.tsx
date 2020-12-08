import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '@/layouts/default'
import Item from '@/components/item'
import Seo from '@/components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Hi!Dear">
      <Seo title="Home" />
      <section className="section home">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">Latest</h1>
        </div>
        {posts.length ? (
          <>
            <ul className="daily-list">
              {posts.map(post => (
                <Item
                  key={post.fields!.slug!}
                  title={post.frontmatter?.title || post.fields?.slug}
                  src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                  slug={post.fields?.slug}
                  date={post.frontmatter!.date}
                />
              ))}
            </ul>
            <div className="pt-8 text-center">
              <Link className="link link--more" to="/blog">
                もっとみる
              </Link>
            </div>
            {/*<p className="mt-12 text-center leading-relaxed font-bold">*/}
            {/*  <span className="text-xl">Check!!</span>*/}
            {/*  <br />*/}
            {/*  <a*/}
            {/*    className="text-blue-400 py-1 px-2 anim-link"*/}
            {/*    href="https://zenn.dev/k-logic24"*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    Tech-Blog Site.*/}
            {/*  </a>*/}
            {/*</p>*/}
          </>
        ) : (
          <p>no posts...</p>
        )}
      </section>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
          hero {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
