import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Item from '@/components/molecules/item'
import Search from '@/components/organisms/search'
import Tag from '@/components/organisms/tag'
import Cat from '@/components/organisms/cat'
import {
  BlogIndexProps,
  BlogTagGroupProps,
  BlogCatGroupProps,
  PostProps,
} from '@/types'

const Main: React.FC<BlogIndexProps> = ({ title, data }) => {
  const [posts, setPosts] = useState<PostProps>([])
  const [tagGroup, setTagGroup] = useState<BlogTagGroupProps | []>([])
  const [catGroup, setCatGroup] = useState<BlogCatGroupProps | []>([])

  useEffect(() => {
    const { nodes, tagGroup, catGroup } = data.allMarkdownRemark
    setPosts(nodes)
    setTagGroup(tagGroup)
    setCatGroup(catGroup)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title={title} isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        <Seo title="Webクリエイターの日々" />
        <div className="section home">
          <div className="section-wrap">
            <div className="text-center">
              <h1 className="pb-4 mb-10 section__ttl">最新の記事</h1>
            </div>
            {posts.length ? (
              <>
                <ul className="card-list">
                  {posts.slice(0, 6).map(post => (
                    <Item
                      key={post.id}
                      title={post.frontmatter?.title || post.fields?.slug}
                      src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                      slug={post.fields?.slug}
                      date={post.frontmatter?.date}
                      tags={post.frontmatter?.tags}
                      variant={'sm'}
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
            <Search posts={posts} />
          </div>
          <div className="section-wrap">
            <Tag tagGroup={tagGroup} />
          </div>
          <div className="section-wrap">
            <Cat catGroup={catGroup} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Main
