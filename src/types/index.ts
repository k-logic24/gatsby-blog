export interface AppProps {
  layouts: {
    title?: string
    date?: string
  }
  fv: {
    title?: string
    date?: string
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
    tags: string[] | null
    children?: never
  }
  toggle: {
    theme: 'light' | 'dark'
    toggleTheme: () => void
    children?: never
  }
}
