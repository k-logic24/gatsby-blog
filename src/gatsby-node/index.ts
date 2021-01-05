import path from 'path'
import { GatsbyNode, Actions } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

/**
 * createPages
 */
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-template.tsx')
  const bookTemplate = path.resolve('./src/templates/book-template.tsx')
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`)
  const tagPostTemplate = path.resolve(`./src/templates/tag-template.tsx`)
  const catPostTemplate = path.resolve(`./src/templates/cat-template.tsx`)
  const blogResult = await graphql<{
    allMarkdownRemark: Pick<
      GatsbyTypes.Query['allMarkdownRemark'],
      'nodes' | 'group'
    >
  }>(
    `
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
            }
          }
          tagGroup: group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          catGroup: group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResult.errors
    )
    return
  }
  /**
   * ブログ記事
   */
  const blogPosts = blogResult.data!.allMarkdownRemark.nodes
  const postsExcludeCatBook = blogPosts.filter(
    post => post.frontmatter!.category !== 'book'
  )
  if (postsExcludeCatBook && postsExcludeCatBook.length > 0) {
    postsExcludeCatBook.forEach((post, index) => {
      const previous =
        index === postsExcludeCatBook.length - 1
          ? null
          : postsExcludeCatBook[index + 1]
      const next = index === 0 ? null : postsExcludeCatBook[index - 1]

      createPage({
        path: `/blog${post.fields!.slug}`,
        component: blogPostTemplate,
        context: {
          slug: post!.fields!.slug,
          previous,
          next,
        },
      })
    })
  }

  /**
   * ブログ一覧
   */
  const blogNodes = blogResult.data!.allMarkdownRemark.nodes
  const filteredNoBookPosts = blogNodes.filter(
    node => node.frontmatter!.category !== 'book'
  )
  const blogAllPosts = blogNodes ? filteredNoBookPosts.length : 0
  const blogPerPage = 6
  const blogPages = Math.ceil(blogAllPosts / blogPerPage)

  Array.from({ length: blogPages }).forEach((_: unknown, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        blogPages: blogPages,
        skip: blogPerPage * i,
        limit: blogPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })

  /**
   * タグ一覧
   */
  // @ts-ignore
  const tagGroup = blogResult.data!.allMarkdownRemark.tagGroup
  for (let i = 0; i < tagGroup.length; i++) {
    const tagAllCounts = tagGroup[i].totalCount
    const tagPages = Math.ceil(tagAllCounts / blogPerPage)
    Array.from({ length: tagPages }).forEach((_: unknown, j) => {
      createPage({
        path:
          j === 0
            ? `/tag/${tagGroup[i].fieldValue}`
            : `/tag/${tagGroup[i].fieldValue}/${j + 1}`,
        component: tagPostTemplate,
        context: {
          tagPages: tagPages,
          tagId: tagGroup[i].fieldValue,
          skip: blogPerPage * j,
          limit: blogPerPage,
          currentPage: j + 1,
          isFirst: j + 1 === 1,
          isLast: j + 1 === tagPages,
        },
      })
    })
  }
  /**
   * カテゴリー一覧
   */
  // @ts-ignore
  const catGroup = blogResult.data!.allMarkdownRemark.catGroup
  for (let i = 0; i < catGroup.length; i++) {
    const catAllCounts = catGroup[i].totalCount
    const catPages = Math.ceil(catAllCounts / blogPerPage)
    Array.from({ length: catPages }).forEach((_: unknown, j) => {
      createPage({
        path:
          j === 0
            ? `/cat/${catGroup[i].fieldValue}`
            : `/cat/${catGroup[i].fieldValue}/${j + 1}`,
        component: catPostTemplate,
        context: {
          catPages: catPages,
          catId: catGroup[i].fieldValue,
          skip: blogPerPage * j,
          limit: blogPerPage,
          currentPage: j + 1,
          isFirst: j + 1 === 1,
          isLast: j + 1 === catPages,
        },
      })
    })
  }

  /**
   * book
   */
  const bookResult = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query['allMarkdownRemark'], 'nodes'>
  }>(
    `
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "book" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            id
          }
        }
      }
    `
  )

  const bookNodes = bookResult.data!.allMarkdownRemark.nodes
  const bookAllPosts = bookNodes ? bookNodes.length : 0
  const bookPerPage = 10
  const bookPages = Math.ceil(bookAllPosts / bookPerPage)

  Array.from({ length: bookPages }).forEach((_: unknown, i) => {
    createPage({
      path: i === 0 ? `/book/` : `/book/${i + 1}`,
      component: bookTemplate,
      context: {
        bookPages: bookPages,
        skip: bookPerPage * i,
        limit: bookPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === bookPages,
      },
    })
  })
}

/**
 * onCreateNode
 */
export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * createSchemaCustomization
 */
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}: {
  actions: Actions
}) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
