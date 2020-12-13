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
    tags?: string[] | null
    children?: never
  }
  toggle: {
    theme: 'light' | 'dark'
    toggleTheme: () => void
    children?: never
  }
  template: {
    pageContext: GatsbyTypes.SitePageContext
  }
  pagination: {
    isFirst: boolean
    isLast: boolean
    currentPage: number
    type: string
    pages: number
  }
}
