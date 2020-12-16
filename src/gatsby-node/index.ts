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
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`)
  const tagPostTemplate = path.resolve(`./src/templates/tag-template.tsx`)
  const catPostTemplate = path.resolve(`./src/templates/cat-template.tsx`)
  const blogResult = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query['allMarkdownRemark'], 'nodes'>
  }>(
    `
      query PostInfo {
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
            }
          }
          group(field: frontmatter___tags) {
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
  const blogPosts = blogResult!.data!.allMarkdownRemark!.nodes
  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previous =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1]
      const next = index === 0 ? null : blogPosts[index - 1]

      createPage({
        path: `/blog${post!.fields!.slug!}`,
        component: blogPostTemplate,
        context: {
          slug: post!.fields!.slug,
          previous,
          next,
        },
      })
    })
  }

  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResult.errors
    )
    return
  }
  const blogNodes = blogResult!.data!.allMarkdownRemark!.nodes
  const blogAllPosts = blogNodes.length
  const blogPerPage = 6
  const blogPages = Math.ceil(blogAllPosts / blogPerPage)

  Array.from({ length: blogPages }).forEach((_, i) => {
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
  const tagResult = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query['allMarkdownRemark'], 'nodes'>
  }>(
    `
      query TagInfo {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  // @ts-ignore
  const tagGroup = tagResult!.data!.allMarkdownRemark!.group
  for (let i = 0; i < tagGroup.length; i++) {
    const tagAllCounts = tagGroup[i].totalCount
    const tagPages = Math.ceil(tagAllCounts / blogPerPage)
    Array.from({ length: tagPages }).forEach((_, j) => {
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
  // category
  const catResult = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query['allMarkdownRemark'], 'nodes'>
  }>(
    `
      query CatInfo {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  // @ts-ignore
  const catGroup = catResult!.data!.allMarkdownRemark!.group
  for (let i = 0; i < catGroup.length; i++) {
    const catAllCounts = catGroup[i].totalCount
    const catPages = Math.ceil(catAllCounts / blogPerPage)
    Array.from({ length: catPages }).forEach((_, j) => {
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
