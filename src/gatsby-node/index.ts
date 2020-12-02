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
  const blogResult = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query['allMarkdownRemark'], 'nodes'>
  }>(
    `
      query PostPaginateQuery {
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
            }
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
        path: post!.fields!.slug!,
        component: path.resolve(`./src/templates/blog-post.tsx`),
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
  const blogAllPosts = blogResult!.data!.allMarkdownRemark!.nodes.length
  const blogPerPage = 6
  const blogPages = Math.ceil(blogAllPosts / blogPerPage)

  Array.from({ length: blogAllPosts }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog-template.tsx'),
      context: {
        skip: blogPerPage * i,
        limit: blogPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
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
