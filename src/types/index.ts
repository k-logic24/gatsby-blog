export type BlogTagGroupProps = GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['tagGroup']
export type BlogCatGroupProps = GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['catGroup']
export type BlogPostProps = {
  data: GatsbyTypes.BlogPostBySlugQuery
  pageContext: {
    previous: GatsbyTypes.MarkdownRemarkEdge['previous']
    next: GatsbyTypes.MarkdownRemarkEdge['next']
  }
}
export type BlogIndexProps = {
  data: GatsbyTypes.BlogIndexQuery
  title: string
}
export type BlogPageProps = {
  data: GatsbyTypes.BlogPageQuery
  pageContext: GatsbyTypes.SitePageContext
}
export type CatTemplateProps = {
  data: GatsbyTypes.CatPageQuery
  pageContext: GatsbyTypes.SitePageContext
  title: string
}
export type TagTemplateProps = {
  data: GatsbyTypes.TagPageQuery
  pageContext: GatsbyTypes.SitePageContext
  title: string
}
export type PostProps = BlogIndexProps['data']['allMarkdownRemark']['nodes']
export interface AppProps {
  layouts: {
    title?: string
    date?: string
    isText?: boolean
  }
  fv: {
    title?: string
    date?: string
    isText?: boolean
  }
  item: {
    title?: string
    date?: string
    slug?: string
    src?: Pick<
      GatsbyTypes.ImageSharpFluid,
      | 'base64'
      | 'aspectRatio'
      | 'src'
      | 'srcSet'
      | 'srcSetWebp'
      | 'srcWebp'
      | 'sizes'
    >
    tags?: GatsbyTypes.Maybe<readonly (string | undefined)[]>
    children?: never
    variant?: 'sm' | 'lg'
  }
  toggle: {
    theme: 'light' | 'dark'
    toggleTheme: () => void
    children?: never
  }
  taglabel: {
    fieldValue?: string
    totalCount?: number
    variant?: 'sm' | 'lg'
  }
  pagination: {
    currentPage: number
    type: string
    pages: number
  }
}
