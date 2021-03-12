/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
  type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    Date: string
    JSON: never
  }

  type Author = {
    readonly name: Maybe<Scalars['String']>
    readonly summary: Maybe<Scalars['String']>
  }

  type AuthorFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly summary: Maybe<StringQueryOperatorInput>
  }

  type AVIFOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly lossless: Maybe<Scalars['Boolean']>
    readonly speed: Maybe<Scalars['Int']>
  }

  type BlurredOptions = {
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: Maybe<Scalars['Int']>
    /**
     * Force the output format for the low-res preview. Default is to use the same
     * format as the input. You should rarely need to change this
     */
    readonly toFormat: Maybe<ImageFormat>
  }

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Boolean']>
    readonly ne: Maybe<Scalars['Boolean']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  }

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Date']>
    readonly ne: Maybe<Scalars['Date']>
    readonly gt: Maybe<Scalars['Date']>
    readonly gte: Maybe<Scalars['Date']>
    readonly lt: Maybe<Scalars['Date']>
    readonly lte: Maybe<Scalars['Date']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  }

  type Directory = Node & {
    readonly sourceInstanceName: Scalars['String']
    readonly absolutePath: Scalars['String']
    readonly relativePath: Scalars['String']
    readonly extension: Scalars['String']
    readonly size: Scalars['Int']
    readonly prettySize: Scalars['String']
    readonly modifiedTime: Scalars['Date']
    readonly accessTime: Scalars['Date']
    readonly changeTime: Scalars['Date']
    readonly birthTime: Scalars['Date']
    readonly root: Scalars['String']
    readonly dir: Scalars['String']
    readonly base: Scalars['String']
    readonly ext: Scalars['String']
    readonly name: Scalars['String']
    readonly relativeDirectory: Scalars['String']
    readonly dev: Scalars['Int']
    readonly mode: Scalars['Int']
    readonly nlink: Scalars['Int']
    readonly uid: Scalars['Int']
    readonly gid: Scalars['Int']
    readonly rdev: Scalars['Int']
    readonly ino: Scalars['Float']
    readonly atimeMs: Scalars['Float']
    readonly mtimeMs: Scalars['Float']
    readonly ctimeMs: Scalars['Float']
    readonly atime: Scalars['Date']
    readonly mtime: Scalars['Date']
    readonly ctime: Scalars['Date']
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>
    readonly blksize: Maybe<Scalars['Int']>
    readonly blocks: Maybe<Scalars['Int']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type DirectoryConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<DirectoryEdge>
    readonly nodes: ReadonlyArray<Directory>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<DirectoryGroupConnection>
  }

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum
  }

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: DirectoryFieldsEnum
  }

  type DirectoryEdge = {
    readonly next: Maybe<Directory>
    readonly node: Directory
    readonly previous: Maybe<Directory>
  }

  type DirectoryFieldsEnum =
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'relativeDirectory'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'ino'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'blksize'
    | 'blocks'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
    readonly absolutePath: Maybe<StringQueryOperatorInput>
    readonly relativePath: Maybe<StringQueryOperatorInput>
    readonly extension: Maybe<StringQueryOperatorInput>
    readonly size: Maybe<IntQueryOperatorInput>
    readonly prettySize: Maybe<StringQueryOperatorInput>
    readonly modifiedTime: Maybe<DateQueryOperatorInput>
    readonly accessTime: Maybe<DateQueryOperatorInput>
    readonly changeTime: Maybe<DateQueryOperatorInput>
    readonly birthTime: Maybe<DateQueryOperatorInput>
    readonly root: Maybe<StringQueryOperatorInput>
    readonly dir: Maybe<StringQueryOperatorInput>
    readonly base: Maybe<StringQueryOperatorInput>
    readonly ext: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>
    readonly dev: Maybe<IntQueryOperatorInput>
    readonly mode: Maybe<IntQueryOperatorInput>
    readonly nlink: Maybe<IntQueryOperatorInput>
    readonly uid: Maybe<IntQueryOperatorInput>
    readonly gid: Maybe<IntQueryOperatorInput>
    readonly rdev: Maybe<IntQueryOperatorInput>
    readonly ino: Maybe<FloatQueryOperatorInput>
    readonly atimeMs: Maybe<FloatQueryOperatorInput>
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>
    readonly atime: Maybe<DateQueryOperatorInput>
    readonly mtime: Maybe<DateQueryOperatorInput>
    readonly ctime: Maybe<DateQueryOperatorInput>
    readonly birthtime: Maybe<DateQueryOperatorInput>
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
    readonly blksize: Maybe<IntQueryOperatorInput>
    readonly blocks: Maybe<IntQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<DirectoryEdge>
    readonly nodes: ReadonlyArray<Directory>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type DuotoneGradient = {
    readonly highlight: Scalars['String']
    readonly shadow: Scalars['String']
    readonly opacity: Maybe<Scalars['Int']>
  }

  type Fields = {
    readonly slug: Maybe<Scalars['String']>
  }

  type FieldsFilterInput = {
    readonly slug: Maybe<StringQueryOperatorInput>
  }

  type File = Node & {
    readonly sourceInstanceName: Scalars['String']
    readonly absolutePath: Scalars['String']
    readonly relativePath: Scalars['String']
    readonly extension: Scalars['String']
    readonly size: Scalars['Int']
    readonly prettySize: Scalars['String']
    readonly modifiedTime: Scalars['Date']
    readonly accessTime: Scalars['Date']
    readonly changeTime: Scalars['Date']
    readonly birthTime: Scalars['Date']
    readonly root: Scalars['String']
    readonly dir: Scalars['String']
    readonly base: Scalars['String']
    readonly ext: Scalars['String']
    readonly name: Scalars['String']
    readonly relativeDirectory: Scalars['String']
    readonly dev: Scalars['Int']
    readonly mode: Scalars['Int']
    readonly nlink: Scalars['Int']
    readonly uid: Scalars['Int']
    readonly gid: Scalars['Int']
    readonly rdev: Scalars['Int']
    readonly ino: Scalars['Float']
    readonly atimeMs: Scalars['Float']
    readonly mtimeMs: Scalars['Float']
    readonly ctimeMs: Scalars['Float']
    readonly atime: Scalars['Date']
    readonly mtime: Scalars['Date']
    readonly ctime: Scalars['Date']
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>
    readonly blksize: Maybe<Scalars['Int']>
    readonly blocks: Maybe<Scalars['Int']>
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars['String']>
    /** Returns all children nodes filtered by type MarkdownRemark */
    readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>
    /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
    readonly childMarkdownRemark: Maybe<MarkdownRemark>
    /** Returns all children nodes filtered by type ImageSharp */
    readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    readonly childImageSharp: Maybe<ImageSharp>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_atimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_mtimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_ctimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type FileConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<FileEdge>
    readonly nodes: ReadonlyArray<File>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<FileGroupConnection>
  }

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum
  }

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: FileFieldsEnum
  }

  type FileEdge = {
    readonly next: Maybe<File>
    readonly node: File
    readonly previous: Maybe<File>
  }

  type FileFieldsEnum =
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'relativeDirectory'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'ino'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'blksize'
    | 'blocks'
    | 'publicURL'
    | 'childrenMarkdownRemark'
    | 'childrenMarkdownRemark.id'
    | 'childrenMarkdownRemark.frontmatter.title'
    | 'childrenMarkdownRemark.frontmatter.description'
    | 'childrenMarkdownRemark.frontmatter.date'
    | 'childrenMarkdownRemark.frontmatter.hero.sourceInstanceName'
    | 'childrenMarkdownRemark.frontmatter.hero.absolutePath'
    | 'childrenMarkdownRemark.frontmatter.hero.relativePath'
    | 'childrenMarkdownRemark.frontmatter.hero.extension'
    | 'childrenMarkdownRemark.frontmatter.hero.size'
    | 'childrenMarkdownRemark.frontmatter.hero.prettySize'
    | 'childrenMarkdownRemark.frontmatter.hero.modifiedTime'
    | 'childrenMarkdownRemark.frontmatter.hero.accessTime'
    | 'childrenMarkdownRemark.frontmatter.hero.changeTime'
    | 'childrenMarkdownRemark.frontmatter.hero.birthTime'
    | 'childrenMarkdownRemark.frontmatter.hero.root'
    | 'childrenMarkdownRemark.frontmatter.hero.dir'
    | 'childrenMarkdownRemark.frontmatter.hero.base'
    | 'childrenMarkdownRemark.frontmatter.hero.ext'
    | 'childrenMarkdownRemark.frontmatter.hero.name'
    | 'childrenMarkdownRemark.frontmatter.hero.relativeDirectory'
    | 'childrenMarkdownRemark.frontmatter.hero.dev'
    | 'childrenMarkdownRemark.frontmatter.hero.mode'
    | 'childrenMarkdownRemark.frontmatter.hero.nlink'
    | 'childrenMarkdownRemark.frontmatter.hero.uid'
    | 'childrenMarkdownRemark.frontmatter.hero.gid'
    | 'childrenMarkdownRemark.frontmatter.hero.rdev'
    | 'childrenMarkdownRemark.frontmatter.hero.ino'
    | 'childrenMarkdownRemark.frontmatter.hero.atimeMs'
    | 'childrenMarkdownRemark.frontmatter.hero.mtimeMs'
    | 'childrenMarkdownRemark.frontmatter.hero.ctimeMs'
    | 'childrenMarkdownRemark.frontmatter.hero.atime'
    | 'childrenMarkdownRemark.frontmatter.hero.mtime'
    | 'childrenMarkdownRemark.frontmatter.hero.ctime'
    | 'childrenMarkdownRemark.frontmatter.hero.birthtime'
    | 'childrenMarkdownRemark.frontmatter.hero.birthtimeMs'
    | 'childrenMarkdownRemark.frontmatter.hero.blksize'
    | 'childrenMarkdownRemark.frontmatter.hero.blocks'
    | 'childrenMarkdownRemark.frontmatter.hero.publicURL'
    | 'childrenMarkdownRemark.frontmatter.hero.childrenMarkdownRemark'
    | 'childrenMarkdownRemark.frontmatter.hero.childrenImageSharp'
    | 'childrenMarkdownRemark.frontmatter.hero.id'
    | 'childrenMarkdownRemark.frontmatter.hero.children'
    | 'childrenMarkdownRemark.frontmatter.category'
    | 'childrenMarkdownRemark.frontmatter.tags'
    | 'childrenMarkdownRemark.frontmatter.skill'
    | 'childrenMarkdownRemark.frontmatter.siteUrl'
    | 'childrenMarkdownRemark.frontmatter.githubUrl'
    | 'childrenMarkdownRemark.frontmatter.thumb.sourceInstanceName'
    | 'childrenMarkdownRemark.frontmatter.thumb.absolutePath'
    | 'childrenMarkdownRemark.frontmatter.thumb.relativePath'
    | 'childrenMarkdownRemark.frontmatter.thumb.extension'
    | 'childrenMarkdownRemark.frontmatter.thumb.size'
    | 'childrenMarkdownRemark.frontmatter.thumb.prettySize'
    | 'childrenMarkdownRemark.frontmatter.thumb.modifiedTime'
    | 'childrenMarkdownRemark.frontmatter.thumb.accessTime'
    | 'childrenMarkdownRemark.frontmatter.thumb.changeTime'
    | 'childrenMarkdownRemark.frontmatter.thumb.birthTime'
    | 'childrenMarkdownRemark.frontmatter.thumb.root'
    | 'childrenMarkdownRemark.frontmatter.thumb.dir'
    | 'childrenMarkdownRemark.frontmatter.thumb.base'
    | 'childrenMarkdownRemark.frontmatter.thumb.ext'
    | 'childrenMarkdownRemark.frontmatter.thumb.name'
    | 'childrenMarkdownRemark.frontmatter.thumb.relativeDirectory'
    | 'childrenMarkdownRemark.frontmatter.thumb.dev'
    | 'childrenMarkdownRemark.frontmatter.thumb.mode'
    | 'childrenMarkdownRemark.frontmatter.thumb.nlink'
    | 'childrenMarkdownRemark.frontmatter.thumb.uid'
    | 'childrenMarkdownRemark.frontmatter.thumb.gid'
    | 'childrenMarkdownRemark.frontmatter.thumb.rdev'
    | 'childrenMarkdownRemark.frontmatter.thumb.ino'
    | 'childrenMarkdownRemark.frontmatter.thumb.atimeMs'
    | 'childrenMarkdownRemark.frontmatter.thumb.mtimeMs'
    | 'childrenMarkdownRemark.frontmatter.thumb.ctimeMs'
    | 'childrenMarkdownRemark.frontmatter.thumb.atime'
    | 'childrenMarkdownRemark.frontmatter.thumb.mtime'
    | 'childrenMarkdownRemark.frontmatter.thumb.ctime'
    | 'childrenMarkdownRemark.frontmatter.thumb.birthtime'
    | 'childrenMarkdownRemark.frontmatter.thumb.birthtimeMs'
    | 'childrenMarkdownRemark.frontmatter.thumb.blksize'
    | 'childrenMarkdownRemark.frontmatter.thumb.blocks'
    | 'childrenMarkdownRemark.frontmatter.thumb.publicURL'
    | 'childrenMarkdownRemark.frontmatter.thumb.childrenMarkdownRemark'
    | 'childrenMarkdownRemark.frontmatter.thumb.childrenImageSharp'
    | 'childrenMarkdownRemark.frontmatter.thumb.id'
    | 'childrenMarkdownRemark.frontmatter.thumb.children'
    | 'childrenMarkdownRemark.fields.slug'
    | 'childrenMarkdownRemark.excerpt'
    | 'childrenMarkdownRemark.rawMarkdownBody'
    | 'childrenMarkdownRemark.fileAbsolutePath'
    | 'childrenMarkdownRemark.html'
    | 'childrenMarkdownRemark.htmlAst'
    | 'childrenMarkdownRemark.excerptAst'
    | 'childrenMarkdownRemark.headings'
    | 'childrenMarkdownRemark.headings.id'
    | 'childrenMarkdownRemark.headings.value'
    | 'childrenMarkdownRemark.headings.depth'
    | 'childrenMarkdownRemark.timeToRead'
    | 'childrenMarkdownRemark.tableOfContents'
    | 'childrenMarkdownRemark.wordCount.paragraphs'
    | 'childrenMarkdownRemark.wordCount.sentences'
    | 'childrenMarkdownRemark.wordCount.words'
    | 'childrenMarkdownRemark.parent.id'
    | 'childrenMarkdownRemark.parent.parent.id'
    | 'childrenMarkdownRemark.parent.parent.children'
    | 'childrenMarkdownRemark.parent.children'
    | 'childrenMarkdownRemark.parent.children.id'
    | 'childrenMarkdownRemark.parent.children.children'
    | 'childrenMarkdownRemark.parent.internal.content'
    | 'childrenMarkdownRemark.parent.internal.contentDigest'
    | 'childrenMarkdownRemark.parent.internal.description'
    | 'childrenMarkdownRemark.parent.internal.fieldOwners'
    | 'childrenMarkdownRemark.parent.internal.ignoreType'
    | 'childrenMarkdownRemark.parent.internal.mediaType'
    | 'childrenMarkdownRemark.parent.internal.owner'
    | 'childrenMarkdownRemark.parent.internal.type'
    | 'childrenMarkdownRemark.children'
    | 'childrenMarkdownRemark.children.id'
    | 'childrenMarkdownRemark.children.parent.id'
    | 'childrenMarkdownRemark.children.parent.children'
    | 'childrenMarkdownRemark.children.children'
    | 'childrenMarkdownRemark.children.children.id'
    | 'childrenMarkdownRemark.children.children.children'
    | 'childrenMarkdownRemark.children.internal.content'
    | 'childrenMarkdownRemark.children.internal.contentDigest'
    | 'childrenMarkdownRemark.children.internal.description'
    | 'childrenMarkdownRemark.children.internal.fieldOwners'
    | 'childrenMarkdownRemark.children.internal.ignoreType'
    | 'childrenMarkdownRemark.children.internal.mediaType'
    | 'childrenMarkdownRemark.children.internal.owner'
    | 'childrenMarkdownRemark.children.internal.type'
    | 'childrenMarkdownRemark.internal.content'
    | 'childrenMarkdownRemark.internal.contentDigest'
    | 'childrenMarkdownRemark.internal.description'
    | 'childrenMarkdownRemark.internal.fieldOwners'
    | 'childrenMarkdownRemark.internal.ignoreType'
    | 'childrenMarkdownRemark.internal.mediaType'
    | 'childrenMarkdownRemark.internal.owner'
    | 'childrenMarkdownRemark.internal.type'
    | 'childMarkdownRemark.id'
    | 'childMarkdownRemark.frontmatter.title'
    | 'childMarkdownRemark.frontmatter.description'
    | 'childMarkdownRemark.frontmatter.date'
    | 'childMarkdownRemark.frontmatter.hero.sourceInstanceName'
    | 'childMarkdownRemark.frontmatter.hero.absolutePath'
    | 'childMarkdownRemark.frontmatter.hero.relativePath'
    | 'childMarkdownRemark.frontmatter.hero.extension'
    | 'childMarkdownRemark.frontmatter.hero.size'
    | 'childMarkdownRemark.frontmatter.hero.prettySize'
    | 'childMarkdownRemark.frontmatter.hero.modifiedTime'
    | 'childMarkdownRemark.frontmatter.hero.accessTime'
    | 'childMarkdownRemark.frontmatter.hero.changeTime'
    | 'childMarkdownRemark.frontmatter.hero.birthTime'
    | 'childMarkdownRemark.frontmatter.hero.root'
    | 'childMarkdownRemark.frontmatter.hero.dir'
    | 'childMarkdownRemark.frontmatter.hero.base'
    | 'childMarkdownRemark.frontmatter.hero.ext'
    | 'childMarkdownRemark.frontmatter.hero.name'
    | 'childMarkdownRemark.frontmatter.hero.relativeDirectory'
    | 'childMarkdownRemark.frontmatter.hero.dev'
    | 'childMarkdownRemark.frontmatter.hero.mode'
    | 'childMarkdownRemark.frontmatter.hero.nlink'
    | 'childMarkdownRemark.frontmatter.hero.uid'
    | 'childMarkdownRemark.frontmatter.hero.gid'
    | 'childMarkdownRemark.frontmatter.hero.rdev'
    | 'childMarkdownRemark.frontmatter.hero.ino'
    | 'childMarkdownRemark.frontmatter.hero.atimeMs'
    | 'childMarkdownRemark.frontmatter.hero.mtimeMs'
    | 'childMarkdownRemark.frontmatter.hero.ctimeMs'
    | 'childMarkdownRemark.frontmatter.hero.atime'
    | 'childMarkdownRemark.frontmatter.hero.mtime'
    | 'childMarkdownRemark.frontmatter.hero.ctime'
    | 'childMarkdownRemark.frontmatter.hero.birthtime'
    | 'childMarkdownRemark.frontmatter.hero.birthtimeMs'
    | 'childMarkdownRemark.frontmatter.hero.blksize'
    | 'childMarkdownRemark.frontmatter.hero.blocks'
    | 'childMarkdownRemark.frontmatter.hero.publicURL'
    | 'childMarkdownRemark.frontmatter.hero.childrenMarkdownRemark'
    | 'childMarkdownRemark.frontmatter.hero.childrenImageSharp'
    | 'childMarkdownRemark.frontmatter.hero.id'
    | 'childMarkdownRemark.frontmatter.hero.children'
    | 'childMarkdownRemark.frontmatter.category'
    | 'childMarkdownRemark.frontmatter.tags'
    | 'childMarkdownRemark.frontmatter.skill'
    | 'childMarkdownRemark.frontmatter.siteUrl'
    | 'childMarkdownRemark.frontmatter.githubUrl'
    | 'childMarkdownRemark.frontmatter.thumb.sourceInstanceName'
    | 'childMarkdownRemark.frontmatter.thumb.absolutePath'
    | 'childMarkdownRemark.frontmatter.thumb.relativePath'
    | 'childMarkdownRemark.frontmatter.thumb.extension'
    | 'childMarkdownRemark.frontmatter.thumb.size'
    | 'childMarkdownRemark.frontmatter.thumb.prettySize'
    | 'childMarkdownRemark.frontmatter.thumb.modifiedTime'
    | 'childMarkdownRemark.frontmatter.thumb.accessTime'
    | 'childMarkdownRemark.frontmatter.thumb.changeTime'
    | 'childMarkdownRemark.frontmatter.thumb.birthTime'
    | 'childMarkdownRemark.frontmatter.thumb.root'
    | 'childMarkdownRemark.frontmatter.thumb.dir'
    | 'childMarkdownRemark.frontmatter.thumb.base'
    | 'childMarkdownRemark.frontmatter.thumb.ext'
    | 'childMarkdownRemark.frontmatter.thumb.name'
    | 'childMarkdownRemark.frontmatter.thumb.relativeDirectory'
    | 'childMarkdownRemark.frontmatter.thumb.dev'
    | 'childMarkdownRemark.frontmatter.thumb.mode'
    | 'childMarkdownRemark.frontmatter.thumb.nlink'
    | 'childMarkdownRemark.frontmatter.thumb.uid'
    | 'childMarkdownRemark.frontmatter.thumb.gid'
    | 'childMarkdownRemark.frontmatter.thumb.rdev'
    | 'childMarkdownRemark.frontmatter.thumb.ino'
    | 'childMarkdownRemark.frontmatter.thumb.atimeMs'
    | 'childMarkdownRemark.frontmatter.thumb.mtimeMs'
    | 'childMarkdownRemark.frontmatter.thumb.ctimeMs'
    | 'childMarkdownRemark.frontmatter.thumb.atime'
    | 'childMarkdownRemark.frontmatter.thumb.mtime'
    | 'childMarkdownRemark.frontmatter.thumb.ctime'
    | 'childMarkdownRemark.frontmatter.thumb.birthtime'
    | 'childMarkdownRemark.frontmatter.thumb.birthtimeMs'
    | 'childMarkdownRemark.frontmatter.thumb.blksize'
    | 'childMarkdownRemark.frontmatter.thumb.blocks'
    | 'childMarkdownRemark.frontmatter.thumb.publicURL'
    | 'childMarkdownRemark.frontmatter.thumb.childrenMarkdownRemark'
    | 'childMarkdownRemark.frontmatter.thumb.childrenImageSharp'
    | 'childMarkdownRemark.frontmatter.thumb.id'
    | 'childMarkdownRemark.frontmatter.thumb.children'
    | 'childMarkdownRemark.fields.slug'
    | 'childMarkdownRemark.excerpt'
    | 'childMarkdownRemark.rawMarkdownBody'
    | 'childMarkdownRemark.fileAbsolutePath'
    | 'childMarkdownRemark.html'
    | 'childMarkdownRemark.htmlAst'
    | 'childMarkdownRemark.excerptAst'
    | 'childMarkdownRemark.headings'
    | 'childMarkdownRemark.headings.id'
    | 'childMarkdownRemark.headings.value'
    | 'childMarkdownRemark.headings.depth'
    | 'childMarkdownRemark.timeToRead'
    | 'childMarkdownRemark.tableOfContents'
    | 'childMarkdownRemark.wordCount.paragraphs'
    | 'childMarkdownRemark.wordCount.sentences'
    | 'childMarkdownRemark.wordCount.words'
    | 'childMarkdownRemark.parent.id'
    | 'childMarkdownRemark.parent.parent.id'
    | 'childMarkdownRemark.parent.parent.children'
    | 'childMarkdownRemark.parent.children'
    | 'childMarkdownRemark.parent.children.id'
    | 'childMarkdownRemark.parent.children.children'
    | 'childMarkdownRemark.parent.internal.content'
    | 'childMarkdownRemark.parent.internal.contentDigest'
    | 'childMarkdownRemark.parent.internal.description'
    | 'childMarkdownRemark.parent.internal.fieldOwners'
    | 'childMarkdownRemark.parent.internal.ignoreType'
    | 'childMarkdownRemark.parent.internal.mediaType'
    | 'childMarkdownRemark.parent.internal.owner'
    | 'childMarkdownRemark.parent.internal.type'
    | 'childMarkdownRemark.children'
    | 'childMarkdownRemark.children.id'
    | 'childMarkdownRemark.children.parent.id'
    | 'childMarkdownRemark.children.parent.children'
    | 'childMarkdownRemark.children.children'
    | 'childMarkdownRemark.children.children.id'
    | 'childMarkdownRemark.children.children.children'
    | 'childMarkdownRemark.children.internal.content'
    | 'childMarkdownRemark.children.internal.contentDigest'
    | 'childMarkdownRemark.children.internal.description'
    | 'childMarkdownRemark.children.internal.fieldOwners'
    | 'childMarkdownRemark.children.internal.ignoreType'
    | 'childMarkdownRemark.children.internal.mediaType'
    | 'childMarkdownRemark.children.internal.owner'
    | 'childMarkdownRemark.children.internal.type'
    | 'childMarkdownRemark.internal.content'
    | 'childMarkdownRemark.internal.contentDigest'
    | 'childMarkdownRemark.internal.description'
    | 'childMarkdownRemark.internal.fieldOwners'
    | 'childMarkdownRemark.internal.ignoreType'
    | 'childMarkdownRemark.internal.mediaType'
    | 'childMarkdownRemark.internal.owner'
    | 'childMarkdownRemark.internal.type'
    | 'childrenImageSharp'
    | 'childrenImageSharp.fixed.base64'
    | 'childrenImageSharp.fixed.tracedSVG'
    | 'childrenImageSharp.fixed.aspectRatio'
    | 'childrenImageSharp.fixed.width'
    | 'childrenImageSharp.fixed.height'
    | 'childrenImageSharp.fixed.src'
    | 'childrenImageSharp.fixed.srcSet'
    | 'childrenImageSharp.fixed.srcWebp'
    | 'childrenImageSharp.fixed.srcSetWebp'
    | 'childrenImageSharp.fixed.originalName'
    | 'childrenImageSharp.resolutions.base64'
    | 'childrenImageSharp.resolutions.tracedSVG'
    | 'childrenImageSharp.resolutions.aspectRatio'
    | 'childrenImageSharp.resolutions.width'
    | 'childrenImageSharp.resolutions.height'
    | 'childrenImageSharp.resolutions.src'
    | 'childrenImageSharp.resolutions.srcSet'
    | 'childrenImageSharp.resolutions.srcWebp'
    | 'childrenImageSharp.resolutions.srcSetWebp'
    | 'childrenImageSharp.resolutions.originalName'
    | 'childrenImageSharp.fluid.base64'
    | 'childrenImageSharp.fluid.tracedSVG'
    | 'childrenImageSharp.fluid.aspectRatio'
    | 'childrenImageSharp.fluid.src'
    | 'childrenImageSharp.fluid.srcSet'
    | 'childrenImageSharp.fluid.srcWebp'
    | 'childrenImageSharp.fluid.srcSetWebp'
    | 'childrenImageSharp.fluid.sizes'
    | 'childrenImageSharp.fluid.originalImg'
    | 'childrenImageSharp.fluid.originalName'
    | 'childrenImageSharp.fluid.presentationWidth'
    | 'childrenImageSharp.fluid.presentationHeight'
    | 'childrenImageSharp.sizes.base64'
    | 'childrenImageSharp.sizes.tracedSVG'
    | 'childrenImageSharp.sizes.aspectRatio'
    | 'childrenImageSharp.sizes.src'
    | 'childrenImageSharp.sizes.srcSet'
    | 'childrenImageSharp.sizes.srcWebp'
    | 'childrenImageSharp.sizes.srcSetWebp'
    | 'childrenImageSharp.sizes.sizes'
    | 'childrenImageSharp.sizes.originalImg'
    | 'childrenImageSharp.sizes.originalName'
    | 'childrenImageSharp.sizes.presentationWidth'
    | 'childrenImageSharp.sizes.presentationHeight'
    | 'childrenImageSharp.gatsbyImageData'
    | 'childrenImageSharp.original.width'
    | 'childrenImageSharp.original.height'
    | 'childrenImageSharp.original.src'
    | 'childrenImageSharp.resize.src'
    | 'childrenImageSharp.resize.tracedSVG'
    | 'childrenImageSharp.resize.width'
    | 'childrenImageSharp.resize.height'
    | 'childrenImageSharp.resize.aspectRatio'
    | 'childrenImageSharp.resize.originalName'
    | 'childrenImageSharp.id'
    | 'childrenImageSharp.parent.id'
    | 'childrenImageSharp.parent.parent.id'
    | 'childrenImageSharp.parent.parent.children'
    | 'childrenImageSharp.parent.children'
    | 'childrenImageSharp.parent.children.id'
    | 'childrenImageSharp.parent.children.children'
    | 'childrenImageSharp.parent.internal.content'
    | 'childrenImageSharp.parent.internal.contentDigest'
    | 'childrenImageSharp.parent.internal.description'
    | 'childrenImageSharp.parent.internal.fieldOwners'
    | 'childrenImageSharp.parent.internal.ignoreType'
    | 'childrenImageSharp.parent.internal.mediaType'
    | 'childrenImageSharp.parent.internal.owner'
    | 'childrenImageSharp.parent.internal.type'
    | 'childrenImageSharp.children'
    | 'childrenImageSharp.children.id'
    | 'childrenImageSharp.children.parent.id'
    | 'childrenImageSharp.children.parent.children'
    | 'childrenImageSharp.children.children'
    | 'childrenImageSharp.children.children.id'
    | 'childrenImageSharp.children.children.children'
    | 'childrenImageSharp.children.internal.content'
    | 'childrenImageSharp.children.internal.contentDigest'
    | 'childrenImageSharp.children.internal.description'
    | 'childrenImageSharp.children.internal.fieldOwners'
    | 'childrenImageSharp.children.internal.ignoreType'
    | 'childrenImageSharp.children.internal.mediaType'
    | 'childrenImageSharp.children.internal.owner'
    | 'childrenImageSharp.children.internal.type'
    | 'childrenImageSharp.internal.content'
    | 'childrenImageSharp.internal.contentDigest'
    | 'childrenImageSharp.internal.description'
    | 'childrenImageSharp.internal.fieldOwners'
    | 'childrenImageSharp.internal.ignoreType'
    | 'childrenImageSharp.internal.mediaType'
    | 'childrenImageSharp.internal.owner'
    | 'childrenImageSharp.internal.type'
    | 'childImageSharp.fixed.base64'
    | 'childImageSharp.fixed.tracedSVG'
    | 'childImageSharp.fixed.aspectRatio'
    | 'childImageSharp.fixed.width'
    | 'childImageSharp.fixed.height'
    | 'childImageSharp.fixed.src'
    | 'childImageSharp.fixed.srcSet'
    | 'childImageSharp.fixed.srcWebp'
    | 'childImageSharp.fixed.srcSetWebp'
    | 'childImageSharp.fixed.originalName'
    | 'childImageSharp.resolutions.base64'
    | 'childImageSharp.resolutions.tracedSVG'
    | 'childImageSharp.resolutions.aspectRatio'
    | 'childImageSharp.resolutions.width'
    | 'childImageSharp.resolutions.height'
    | 'childImageSharp.resolutions.src'
    | 'childImageSharp.resolutions.srcSet'
    | 'childImageSharp.resolutions.srcWebp'
    | 'childImageSharp.resolutions.srcSetWebp'
    | 'childImageSharp.resolutions.originalName'
    | 'childImageSharp.fluid.base64'
    | 'childImageSharp.fluid.tracedSVG'
    | 'childImageSharp.fluid.aspectRatio'
    | 'childImageSharp.fluid.src'
    | 'childImageSharp.fluid.srcSet'
    | 'childImageSharp.fluid.srcWebp'
    | 'childImageSharp.fluid.srcSetWebp'
    | 'childImageSharp.fluid.sizes'
    | 'childImageSharp.fluid.originalImg'
    | 'childImageSharp.fluid.originalName'
    | 'childImageSharp.fluid.presentationWidth'
    | 'childImageSharp.fluid.presentationHeight'
    | 'childImageSharp.sizes.base64'
    | 'childImageSharp.sizes.tracedSVG'
    | 'childImageSharp.sizes.aspectRatio'
    | 'childImageSharp.sizes.src'
    | 'childImageSharp.sizes.srcSet'
    | 'childImageSharp.sizes.srcWebp'
    | 'childImageSharp.sizes.srcSetWebp'
    | 'childImageSharp.sizes.sizes'
    | 'childImageSharp.sizes.originalImg'
    | 'childImageSharp.sizes.originalName'
    | 'childImageSharp.sizes.presentationWidth'
    | 'childImageSharp.sizes.presentationHeight'
    | 'childImageSharp.gatsbyImageData'
    | 'childImageSharp.original.width'
    | 'childImageSharp.original.height'
    | 'childImageSharp.original.src'
    | 'childImageSharp.resize.src'
    | 'childImageSharp.resize.tracedSVG'
    | 'childImageSharp.resize.width'
    | 'childImageSharp.resize.height'
    | 'childImageSharp.resize.aspectRatio'
    | 'childImageSharp.resize.originalName'
    | 'childImageSharp.id'
    | 'childImageSharp.parent.id'
    | 'childImageSharp.parent.parent.id'
    | 'childImageSharp.parent.parent.children'
    | 'childImageSharp.parent.children'
    | 'childImageSharp.parent.children.id'
    | 'childImageSharp.parent.children.children'
    | 'childImageSharp.parent.internal.content'
    | 'childImageSharp.parent.internal.contentDigest'
    | 'childImageSharp.parent.internal.description'
    | 'childImageSharp.parent.internal.fieldOwners'
    | 'childImageSharp.parent.internal.ignoreType'
    | 'childImageSharp.parent.internal.mediaType'
    | 'childImageSharp.parent.internal.owner'
    | 'childImageSharp.parent.internal.type'
    | 'childImageSharp.children'
    | 'childImageSharp.children.id'
    | 'childImageSharp.children.parent.id'
    | 'childImageSharp.children.parent.children'
    | 'childImageSharp.children.children'
    | 'childImageSharp.children.children.id'
    | 'childImageSharp.children.children.children'
    | 'childImageSharp.children.internal.content'
    | 'childImageSharp.children.internal.contentDigest'
    | 'childImageSharp.children.internal.description'
    | 'childImageSharp.children.internal.fieldOwners'
    | 'childImageSharp.children.internal.ignoreType'
    | 'childImageSharp.children.internal.mediaType'
    | 'childImageSharp.children.internal.owner'
    | 'childImageSharp.children.internal.type'
    | 'childImageSharp.internal.content'
    | 'childImageSharp.internal.contentDigest'
    | 'childImageSharp.internal.description'
    | 'childImageSharp.internal.fieldOwners'
    | 'childImageSharp.internal.ignoreType'
    | 'childImageSharp.internal.mediaType'
    | 'childImageSharp.internal.owner'
    | 'childImageSharp.internal.type'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
    readonly absolutePath: Maybe<StringQueryOperatorInput>
    readonly relativePath: Maybe<StringQueryOperatorInput>
    readonly extension: Maybe<StringQueryOperatorInput>
    readonly size: Maybe<IntQueryOperatorInput>
    readonly prettySize: Maybe<StringQueryOperatorInput>
    readonly modifiedTime: Maybe<DateQueryOperatorInput>
    readonly accessTime: Maybe<DateQueryOperatorInput>
    readonly changeTime: Maybe<DateQueryOperatorInput>
    readonly birthTime: Maybe<DateQueryOperatorInput>
    readonly root: Maybe<StringQueryOperatorInput>
    readonly dir: Maybe<StringQueryOperatorInput>
    readonly base: Maybe<StringQueryOperatorInput>
    readonly ext: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>
    readonly dev: Maybe<IntQueryOperatorInput>
    readonly mode: Maybe<IntQueryOperatorInput>
    readonly nlink: Maybe<IntQueryOperatorInput>
    readonly uid: Maybe<IntQueryOperatorInput>
    readonly gid: Maybe<IntQueryOperatorInput>
    readonly rdev: Maybe<IntQueryOperatorInput>
    readonly ino: Maybe<FloatQueryOperatorInput>
    readonly atimeMs: Maybe<FloatQueryOperatorInput>
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>
    readonly atime: Maybe<DateQueryOperatorInput>
    readonly mtime: Maybe<DateQueryOperatorInput>
    readonly ctime: Maybe<DateQueryOperatorInput>
    readonly birthtime: Maybe<DateQueryOperatorInput>
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
    readonly blksize: Maybe<IntQueryOperatorInput>
    readonly blocks: Maybe<IntQueryOperatorInput>
    readonly publicURL: Maybe<StringQueryOperatorInput>
    readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>
    readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
    readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>
    readonly childImageSharp: Maybe<ImageSharpFilterInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type FileGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<FileEdge>
    readonly nodes: ReadonlyArray<File>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Float']>
    readonly ne: Maybe<Scalars['Float']>
    readonly gt: Maybe<Scalars['Float']>
    readonly gte: Maybe<Scalars['Float']>
    readonly lt: Maybe<Scalars['Float']>
    readonly lte: Maybe<Scalars['Float']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  }

  type Frontmatter = {
    readonly title: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly date: Maybe<Scalars['Date']>
    readonly hero: Maybe<File>
    readonly category: Maybe<Scalars['String']>
    readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly skill: Maybe<Scalars['String']>
    readonly siteUrl: Maybe<Scalars['String']>
    readonly githubUrl: Maybe<Scalars['String']>
    readonly thumb: Maybe<File>
  }

  type Frontmatter_dateArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type FrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly date: Maybe<DateQueryOperatorInput>
    readonly hero: Maybe<FileFilterInput>
    readonly category: Maybe<StringQueryOperatorInput>
    readonly tags: Maybe<StringQueryOperatorInput>
    readonly skill: Maybe<StringQueryOperatorInput>
    readonly siteUrl: Maybe<StringQueryOperatorInput>
    readonly githubUrl: Maybe<StringQueryOperatorInput>
    readonly thumb: Maybe<FileFilterInput>
  }

  type ImageCropFocus = 'CENTER' | 1 | 5 | 2 | 6 | 3 | 7 | 4 | 8 | 16 | 17

  type ImageFit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside'

  type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'jpg' | 'png' | 'webp' | 'avif'

  type ImageLayout = 'fixed' | 'fullWidth' | 'constrained'

  type ImagePlaceholder = 'dominantColor' | 'tracedSVG' | 'blurred' | 'none'

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    readonly resolutions: Maybe<ImageSharpResolutions>
    readonly fluid: Maybe<ImageSharpFluid>
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    readonly sizes: Maybe<ImageSharpSizes>
    readonly gatsbyImageData: Scalars['JSON']
    readonly original: Maybe<ImageSharpOriginal>
    readonly resize: Maybe<ImageSharpResize>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
  }

  type ImageSharp_resolutionsArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
  }

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>
    maxHeight: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
    sizes?: Maybe<Scalars['String']>
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  }

  type ImageSharp_sizesArgs = {
    maxWidth: Maybe<Scalars['Int']>
    maxHeight: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
    sizes?: Maybe<Scalars['String']>
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  }

  type ImageSharp_gatsbyImageDataArgs = {
    layout?: Maybe<ImageLayout>
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    aspectRatio: Maybe<Scalars['Float']>
    placeholder: Maybe<ImagePlaceholder>
    blurredOptions: Maybe<BlurredOptions>
    tracedSVGOptions: Maybe<Potrace>
    formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
    breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
    sizes: Maybe<Scalars['String']>
    quality: Maybe<Scalars['Int']>
    jpgOptions: Maybe<JPGOptions>
    pngOptions: Maybe<PNGOptions>
    webpOptions: Maybe<WebPOptions>
    avifOptions: Maybe<AVIFOptions>
    transformOptions: Maybe<TransformOptions>
    backgroundColor: Maybe<Scalars['String']>
  }

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionLevel?: Maybe<Scalars['Int']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    duotone: Maybe<DuotoneGradient>
    base64?: Maybe<Scalars['Boolean']>
    traceSVG: Maybe<Potrace>
    toFormat?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
  }

  type ImageSharpConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ImageSharpEdge>
    readonly nodes: ReadonlyArray<ImageSharp>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ImageSharpGroupConnection>
  }

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum
  }

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ImageSharpFieldsEnum
  }

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>
    readonly node: ImageSharp
    readonly previous: Maybe<ImageSharp>
  }

  type ImageSharpFieldsEnum =
    | 'fixed.base64'
    | 'fixed.tracedSVG'
    | 'fixed.aspectRatio'
    | 'fixed.width'
    | 'fixed.height'
    | 'fixed.src'
    | 'fixed.srcSet'
    | 'fixed.srcWebp'
    | 'fixed.srcSetWebp'
    | 'fixed.originalName'
    | 'resolutions.base64'
    | 'resolutions.tracedSVG'
    | 'resolutions.aspectRatio'
    | 'resolutions.width'
    | 'resolutions.height'
    | 'resolutions.src'
    | 'resolutions.srcSet'
    | 'resolutions.srcWebp'
    | 'resolutions.srcSetWebp'
    | 'resolutions.originalName'
    | 'fluid.base64'
    | 'fluid.tracedSVG'
    | 'fluid.aspectRatio'
    | 'fluid.src'
    | 'fluid.srcSet'
    | 'fluid.srcWebp'
    | 'fluid.srcSetWebp'
    | 'fluid.sizes'
    | 'fluid.originalImg'
    | 'fluid.originalName'
    | 'fluid.presentationWidth'
    | 'fluid.presentationHeight'
    | 'sizes.base64'
    | 'sizes.tracedSVG'
    | 'sizes.aspectRatio'
    | 'sizes.src'
    | 'sizes.srcSet'
    | 'sizes.srcWebp'
    | 'sizes.srcSetWebp'
    | 'sizes.sizes'
    | 'sizes.originalImg'
    | 'sizes.originalName'
    | 'sizes.presentationWidth'
    | 'sizes.presentationHeight'
    | 'gatsbyImageData'
    | 'original.width'
    | 'original.height'
    | 'original.src'
    | 'resize.src'
    | 'resize.tracedSVG'
    | 'resize.width'
    | 'resize.height'
    | 'resize.aspectRatio'
    | 'resize.originalName'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>
    readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>
    readonly fluid: Maybe<ImageSharpFluidFilterInput>
    readonly sizes: Maybe<ImageSharpSizesFilterInput>
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>
    readonly original: Maybe<ImageSharpOriginalFilterInput>
    readonly resize: Maybe<ImageSharpResizeFilterInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ImageSharpFilterListInput = {
    readonly elemMatch: Maybe<ImageSharpFilterInput>
  }

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly width: Scalars['Float']
    readonly height: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
  }

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly sizes: Scalars['String']
    readonly originalImg: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
    readonly presentationWidth: Scalars['Int']
    readonly presentationHeight: Scalars['Int']
  }

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly sizes: Maybe<StringQueryOperatorInput>
    readonly originalImg: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
    readonly presentationWidth: Maybe<IntQueryOperatorInput>
    readonly presentationHeight: Maybe<IntQueryOperatorInput>
  }

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ImageSharpEdge>
    readonly nodes: ReadonlyArray<ImageSharp>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars['Float']>
    readonly height: Maybe<Scalars['Float']>
    readonly src: Maybe<Scalars['String']>
  }

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpResize = {
    readonly src: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly width: Maybe<Scalars['Int']>
    readonly height: Maybe<Scalars['Int']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly originalName: Maybe<Scalars['String']>
  }

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly width: Maybe<IntQueryOperatorInput>
    readonly height: Maybe<IntQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpResolutions = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly width: Scalars['Float']
    readonly height: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
  }

  type ImageSharpResolutionsFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpSizes = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly sizes: Scalars['String']
    readonly originalImg: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
    readonly presentationWidth: Scalars['Int']
    readonly presentationHeight: Scalars['Int']
  }

  type ImageSharpSizesFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly sizes: Maybe<StringQueryOperatorInput>
    readonly originalImg: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
    readonly presentationWidth: Maybe<IntQueryOperatorInput>
    readonly presentationHeight: Maybe<IntQueryOperatorInput>
  }

  type ImageSharpSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type Internal = {
    readonly content: Maybe<Scalars['String']>
    readonly contentDigest: Scalars['String']
    readonly description: Maybe<Scalars['String']>
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ignoreType: Maybe<Scalars['Boolean']>
    readonly mediaType: Maybe<Scalars['String']>
    readonly owner: Scalars['String']
    readonly type: Scalars['String']
  }

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>
    readonly contentDigest: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly fieldOwners: Maybe<StringQueryOperatorInput>
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>
    readonly mediaType: Maybe<StringQueryOperatorInput>
    readonly owner: Maybe<StringQueryOperatorInput>
    readonly type: Maybe<StringQueryOperatorInput>
  }

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Int']>
    readonly ne: Maybe<Scalars['Int']>
    readonly gt: Maybe<Scalars['Int']>
    readonly gte: Maybe<Scalars['Int']>
    readonly lt: Maybe<Scalars['Int']>
    readonly lte: Maybe<Scalars['Int']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  }

  type JPGOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly progressive: Maybe<Scalars['Boolean']>
  }

  type JSONQueryOperatorInput = {
    readonly eq: Maybe<Scalars['JSON']>
    readonly ne: Maybe<Scalars['JSON']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
    readonly regex: Maybe<Scalars['JSON']>
    readonly glob: Maybe<Scalars['JSON']>
  }

  type MarkdownExcerptFormats = 'PLAIN' | 'HTML' | 'MARKDOWN'

  type MarkdownHeading = {
    readonly id: Maybe<Scalars['String']>
    readonly value: Maybe<Scalars['String']>
    readonly depth: Maybe<Scalars['Int']>
  }

  type MarkdownHeadingFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly value: Maybe<StringQueryOperatorInput>
    readonly depth: Maybe<IntQueryOperatorInput>
  }

  type MarkdownHeadingFilterListInput = {
    readonly elemMatch: Maybe<MarkdownHeadingFilterInput>
  }

  type MarkdownHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  type MarkdownRemark = Node & {
    readonly id: Scalars['ID']
    readonly frontmatter: Maybe<Frontmatter>
    readonly fields: Maybe<Fields>
    readonly excerpt: Maybe<Scalars['String']>
    readonly rawMarkdownBody: Maybe<Scalars['String']>
    readonly fileAbsolutePath: Maybe<Scalars['String']>
    readonly html: Maybe<Scalars['String']>
    readonly htmlAst: Maybe<Scalars['JSON']>
    readonly excerptAst: Maybe<Scalars['JSON']>
    readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>
    readonly timeToRead: Maybe<Scalars['Int']>
    readonly tableOfContents: Maybe<Scalars['String']>
    readonly wordCount: Maybe<MarkdownWordCount>
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type MarkdownRemark_excerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>
    truncate?: Maybe<Scalars['Boolean']>
    format?: Maybe<MarkdownExcerptFormats>
  }

  type MarkdownRemark_excerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>
    truncate?: Maybe<Scalars['Boolean']>
  }

  type MarkdownRemark_headingsArgs = {
    depth: Maybe<MarkdownHeadingLevels>
  }

  type MarkdownRemark_tableOfContentsArgs = {
    absolute?: Maybe<Scalars['Boolean']>
    pathToSlugField?: Maybe<Scalars['String']>
    maxDepth: Maybe<Scalars['Int']>
    heading: Maybe<Scalars['String']>
  }

  type MarkdownRemarkConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>
    readonly nodes: ReadonlyArray<MarkdownRemark>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>
  }

  type MarkdownRemarkConnection_distinctArgs = {
    field: MarkdownRemarkFieldsEnum
  }

  type MarkdownRemarkConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: MarkdownRemarkFieldsEnum
  }

  type MarkdownRemarkEdge = {
    readonly next: Maybe<MarkdownRemark>
    readonly node: MarkdownRemark
    readonly previous: Maybe<MarkdownRemark>
  }

  type MarkdownRemarkFieldsEnum =
    | 'id'
    | 'frontmatter.title'
    | 'frontmatter.description'
    | 'frontmatter.date'
    | 'frontmatter.hero.sourceInstanceName'
    | 'frontmatter.hero.absolutePath'
    | 'frontmatter.hero.relativePath'
    | 'frontmatter.hero.extension'
    | 'frontmatter.hero.size'
    | 'frontmatter.hero.prettySize'
    | 'frontmatter.hero.modifiedTime'
    | 'frontmatter.hero.accessTime'
    | 'frontmatter.hero.changeTime'
    | 'frontmatter.hero.birthTime'
    | 'frontmatter.hero.root'
    | 'frontmatter.hero.dir'
    | 'frontmatter.hero.base'
    | 'frontmatter.hero.ext'
    | 'frontmatter.hero.name'
    | 'frontmatter.hero.relativeDirectory'
    | 'frontmatter.hero.dev'
    | 'frontmatter.hero.mode'
    | 'frontmatter.hero.nlink'
    | 'frontmatter.hero.uid'
    | 'frontmatter.hero.gid'
    | 'frontmatter.hero.rdev'
    | 'frontmatter.hero.ino'
    | 'frontmatter.hero.atimeMs'
    | 'frontmatter.hero.mtimeMs'
    | 'frontmatter.hero.ctimeMs'
    | 'frontmatter.hero.atime'
    | 'frontmatter.hero.mtime'
    | 'frontmatter.hero.ctime'
    | 'frontmatter.hero.birthtime'
    | 'frontmatter.hero.birthtimeMs'
    | 'frontmatter.hero.blksize'
    | 'frontmatter.hero.blocks'
    | 'frontmatter.hero.publicURL'
    | 'frontmatter.hero.childrenMarkdownRemark'
    | 'frontmatter.hero.childrenMarkdownRemark.id'
    | 'frontmatter.hero.childrenMarkdownRemark.excerpt'
    | 'frontmatter.hero.childrenMarkdownRemark.rawMarkdownBody'
    | 'frontmatter.hero.childrenMarkdownRemark.fileAbsolutePath'
    | 'frontmatter.hero.childrenMarkdownRemark.html'
    | 'frontmatter.hero.childrenMarkdownRemark.htmlAst'
    | 'frontmatter.hero.childrenMarkdownRemark.excerptAst'
    | 'frontmatter.hero.childrenMarkdownRemark.headings'
    | 'frontmatter.hero.childrenMarkdownRemark.timeToRead'
    | 'frontmatter.hero.childrenMarkdownRemark.tableOfContents'
    | 'frontmatter.hero.childrenMarkdownRemark.children'
    | 'frontmatter.hero.childMarkdownRemark.id'
    | 'frontmatter.hero.childMarkdownRemark.excerpt'
    | 'frontmatter.hero.childMarkdownRemark.rawMarkdownBody'
    | 'frontmatter.hero.childMarkdownRemark.fileAbsolutePath'
    | 'frontmatter.hero.childMarkdownRemark.html'
    | 'frontmatter.hero.childMarkdownRemark.htmlAst'
    | 'frontmatter.hero.childMarkdownRemark.excerptAst'
    | 'frontmatter.hero.childMarkdownRemark.headings'
    | 'frontmatter.hero.childMarkdownRemark.timeToRead'
    | 'frontmatter.hero.childMarkdownRemark.tableOfContents'
    | 'frontmatter.hero.childMarkdownRemark.children'
    | 'frontmatter.hero.childrenImageSharp'
    | 'frontmatter.hero.childrenImageSharp.gatsbyImageData'
    | 'frontmatter.hero.childrenImageSharp.id'
    | 'frontmatter.hero.childrenImageSharp.children'
    | 'frontmatter.hero.childImageSharp.gatsbyImageData'
    | 'frontmatter.hero.childImageSharp.id'
    | 'frontmatter.hero.childImageSharp.children'
    | 'frontmatter.hero.id'
    | 'frontmatter.hero.parent.id'
    | 'frontmatter.hero.parent.children'
    | 'frontmatter.hero.children'
    | 'frontmatter.hero.children.id'
    | 'frontmatter.hero.children.children'
    | 'frontmatter.hero.internal.content'
    | 'frontmatter.hero.internal.contentDigest'
    | 'frontmatter.hero.internal.description'
    | 'frontmatter.hero.internal.fieldOwners'
    | 'frontmatter.hero.internal.ignoreType'
    | 'frontmatter.hero.internal.mediaType'
    | 'frontmatter.hero.internal.owner'
    | 'frontmatter.hero.internal.type'
    | 'frontmatter.category'
    | 'frontmatter.tags'
    | 'frontmatter.skill'
    | 'frontmatter.siteUrl'
    | 'frontmatter.githubUrl'
    | 'frontmatter.thumb.sourceInstanceName'
    | 'frontmatter.thumb.absolutePath'
    | 'frontmatter.thumb.relativePath'
    | 'frontmatter.thumb.extension'
    | 'frontmatter.thumb.size'
    | 'frontmatter.thumb.prettySize'
    | 'frontmatter.thumb.modifiedTime'
    | 'frontmatter.thumb.accessTime'
    | 'frontmatter.thumb.changeTime'
    | 'frontmatter.thumb.birthTime'
    | 'frontmatter.thumb.root'
    | 'frontmatter.thumb.dir'
    | 'frontmatter.thumb.base'
    | 'frontmatter.thumb.ext'
    | 'frontmatter.thumb.name'
    | 'frontmatter.thumb.relativeDirectory'
    | 'frontmatter.thumb.dev'
    | 'frontmatter.thumb.mode'
    | 'frontmatter.thumb.nlink'
    | 'frontmatter.thumb.uid'
    | 'frontmatter.thumb.gid'
    | 'frontmatter.thumb.rdev'
    | 'frontmatter.thumb.ino'
    | 'frontmatter.thumb.atimeMs'
    | 'frontmatter.thumb.mtimeMs'
    | 'frontmatter.thumb.ctimeMs'
    | 'frontmatter.thumb.atime'
    | 'frontmatter.thumb.mtime'
    | 'frontmatter.thumb.ctime'
    | 'frontmatter.thumb.birthtime'
    | 'frontmatter.thumb.birthtimeMs'
    | 'frontmatter.thumb.blksize'
    | 'frontmatter.thumb.blocks'
    | 'frontmatter.thumb.publicURL'
    | 'frontmatter.thumb.childrenMarkdownRemark'
    | 'frontmatter.thumb.childrenMarkdownRemark.id'
    | 'frontmatter.thumb.childrenMarkdownRemark.excerpt'
    | 'frontmatter.thumb.childrenMarkdownRemark.rawMarkdownBody'
    | 'frontmatter.thumb.childrenMarkdownRemark.fileAbsolutePath'
    | 'frontmatter.thumb.childrenMarkdownRemark.html'
    | 'frontmatter.thumb.childrenMarkdownRemark.htmlAst'
    | 'frontmatter.thumb.childrenMarkdownRemark.excerptAst'
    | 'frontmatter.thumb.childrenMarkdownRemark.headings'
    | 'frontmatter.thumb.childrenMarkdownRemark.timeToRead'
    | 'frontmatter.thumb.childrenMarkdownRemark.tableOfContents'
    | 'frontmatter.thumb.childrenMarkdownRemark.children'
    | 'frontmatter.thumb.childMarkdownRemark.id'
    | 'frontmatter.thumb.childMarkdownRemark.excerpt'
    | 'frontmatter.thumb.childMarkdownRemark.rawMarkdownBody'
    | 'frontmatter.thumb.childMarkdownRemark.fileAbsolutePath'
    | 'frontmatter.thumb.childMarkdownRemark.html'
    | 'frontmatter.thumb.childMarkdownRemark.htmlAst'
    | 'frontmatter.thumb.childMarkdownRemark.excerptAst'
    | 'frontmatter.thumb.childMarkdownRemark.headings'
    | 'frontmatter.thumb.childMarkdownRemark.timeToRead'
    | 'frontmatter.thumb.childMarkdownRemark.tableOfContents'
    | 'frontmatter.thumb.childMarkdownRemark.children'
    | 'frontmatter.thumb.childrenImageSharp'
    | 'frontmatter.thumb.childrenImageSharp.gatsbyImageData'
    | 'frontmatter.thumb.childrenImageSharp.id'
    | 'frontmatter.thumb.childrenImageSharp.children'
    | 'frontmatter.thumb.childImageSharp.gatsbyImageData'
    | 'frontmatter.thumb.childImageSharp.id'
    | 'frontmatter.thumb.childImageSharp.children'
    | 'frontmatter.thumb.id'
    | 'frontmatter.thumb.parent.id'
    | 'frontmatter.thumb.parent.children'
    | 'frontmatter.thumb.children'
    | 'frontmatter.thumb.children.id'
    | 'frontmatter.thumb.children.children'
    | 'frontmatter.thumb.internal.content'
    | 'frontmatter.thumb.internal.contentDigest'
    | 'frontmatter.thumb.internal.description'
    | 'frontmatter.thumb.internal.fieldOwners'
    | 'frontmatter.thumb.internal.ignoreType'
    | 'frontmatter.thumb.internal.mediaType'
    | 'frontmatter.thumb.internal.owner'
    | 'frontmatter.thumb.internal.type'
    | 'fields.slug'
    | 'excerpt'
    | 'rawMarkdownBody'
    | 'fileAbsolutePath'
    | 'html'
    | 'htmlAst'
    | 'excerptAst'
    | 'headings'
    | 'headings.id'
    | 'headings.value'
    | 'headings.depth'
    | 'timeToRead'
    | 'tableOfContents'
    | 'wordCount.paragraphs'
    | 'wordCount.sentences'
    | 'wordCount.words'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type MarkdownRemarkFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly frontmatter: Maybe<FrontmatterFilterInput>
    readonly fields: Maybe<FieldsFilterInput>
    readonly excerpt: Maybe<StringQueryOperatorInput>
    readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>
    readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>
    readonly html: Maybe<StringQueryOperatorInput>
    readonly htmlAst: Maybe<JSONQueryOperatorInput>
    readonly excerptAst: Maybe<JSONQueryOperatorInput>
    readonly headings: Maybe<MarkdownHeadingFilterListInput>
    readonly timeToRead: Maybe<IntQueryOperatorInput>
    readonly tableOfContents: Maybe<StringQueryOperatorInput>
    readonly wordCount: Maybe<MarkdownWordCountFilterInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type MarkdownRemarkFilterListInput = {
    readonly elemMatch: Maybe<MarkdownRemarkFilterInput>
  }

  type MarkdownRemarkGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>
    readonly nodes: ReadonlyArray<MarkdownRemark>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type MarkdownRemarkSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type MarkdownWordCount = {
    readonly paragraphs: Maybe<Scalars['Int']>
    readonly sentences: Maybe<Scalars['Int']>
    readonly words: Maybe<Scalars['Int']>
  }

  type MarkdownWordCountFilterInput = {
    readonly paragraphs: Maybe<IntQueryOperatorInput>
    readonly sentences: Maybe<IntQueryOperatorInput>
    readonly words: Maybe<IntQueryOperatorInput>
  }

  /** Node Interface */
  type Node = {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>
  }

  type PageInfo = {
    readonly currentPage: Scalars['Int']
    readonly hasPreviousPage: Scalars['Boolean']
    readonly hasNextPage: Scalars['Boolean']
    readonly itemCount: Scalars['Int']
    readonly pageCount: Scalars['Int']
    readonly perPage: Maybe<Scalars['Int']>
    readonly totalCount: Scalars['Int']
  }

  type PNGOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly compressionSpeed: Maybe<Scalars['Int']>
  }

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>
    readonly turdSize: Maybe<Scalars['Float']>
    readonly alphaMax: Maybe<Scalars['Float']>
    readonly optCurve: Maybe<Scalars['Boolean']>
    readonly optTolerance: Maybe<Scalars['Float']>
    readonly threshold: Maybe<Scalars['Int']>
    readonly blackOnWhite: Maybe<Scalars['Boolean']>
    readonly color: Maybe<Scalars['String']>
    readonly background: Maybe<Scalars['String']>
  }

  type PotraceTurnPolicy =
    | 'black'
    | 'white'
    | 'left'
    | 'right'
    | 'minority'
    | 'majority'

  type Query = {
    readonly file: Maybe<File>
    readonly allFile: FileConnection
    readonly directory: Maybe<Directory>
    readonly allDirectory: DirectoryConnection
    readonly site: Maybe<Site>
    readonly allSite: SiteConnection
    readonly sitePage: Maybe<SitePage>
    readonly allSitePage: SitePageConnection
    readonly markdownRemark: Maybe<MarkdownRemark>
    readonly allMarkdownRemark: MarkdownRemarkConnection
    readonly imageSharp: Maybe<ImageSharp>
    readonly allImageSharp: ImageSharpConnection
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection
    readonly sitePlugin: Maybe<SitePlugin>
    readonly allSitePlugin: SitePluginConnection
  }

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>
    absolutePath: Maybe<StringQueryOperatorInput>
    relativePath: Maybe<StringQueryOperatorInput>
    extension: Maybe<StringQueryOperatorInput>
    size: Maybe<IntQueryOperatorInput>
    prettySize: Maybe<StringQueryOperatorInput>
    modifiedTime: Maybe<DateQueryOperatorInput>
    accessTime: Maybe<DateQueryOperatorInput>
    changeTime: Maybe<DateQueryOperatorInput>
    birthTime: Maybe<DateQueryOperatorInput>
    root: Maybe<StringQueryOperatorInput>
    dir: Maybe<StringQueryOperatorInput>
    base: Maybe<StringQueryOperatorInput>
    ext: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    relativeDirectory: Maybe<StringQueryOperatorInput>
    dev: Maybe<IntQueryOperatorInput>
    mode: Maybe<IntQueryOperatorInput>
    nlink: Maybe<IntQueryOperatorInput>
    uid: Maybe<IntQueryOperatorInput>
    gid: Maybe<IntQueryOperatorInput>
    rdev: Maybe<IntQueryOperatorInput>
    ino: Maybe<FloatQueryOperatorInput>
    atimeMs: Maybe<FloatQueryOperatorInput>
    mtimeMs: Maybe<FloatQueryOperatorInput>
    ctimeMs: Maybe<FloatQueryOperatorInput>
    atime: Maybe<DateQueryOperatorInput>
    mtime: Maybe<DateQueryOperatorInput>
    ctime: Maybe<DateQueryOperatorInput>
    birthtime: Maybe<DateQueryOperatorInput>
    birthtimeMs: Maybe<FloatQueryOperatorInput>
    blksize: Maybe<IntQueryOperatorInput>
    blocks: Maybe<IntQueryOperatorInput>
    publicURL: Maybe<StringQueryOperatorInput>
    childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>
    childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
    childrenImageSharp: Maybe<ImageSharpFilterListInput>
    childImageSharp: Maybe<ImageSharpFilterInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>
    sort: Maybe<FileSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>
    absolutePath: Maybe<StringQueryOperatorInput>
    relativePath: Maybe<StringQueryOperatorInput>
    extension: Maybe<StringQueryOperatorInput>
    size: Maybe<IntQueryOperatorInput>
    prettySize: Maybe<StringQueryOperatorInput>
    modifiedTime: Maybe<DateQueryOperatorInput>
    accessTime: Maybe<DateQueryOperatorInput>
    changeTime: Maybe<DateQueryOperatorInput>
    birthTime: Maybe<DateQueryOperatorInput>
    root: Maybe<StringQueryOperatorInput>
    dir: Maybe<StringQueryOperatorInput>
    base: Maybe<StringQueryOperatorInput>
    ext: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    relativeDirectory: Maybe<StringQueryOperatorInput>
    dev: Maybe<IntQueryOperatorInput>
    mode: Maybe<IntQueryOperatorInput>
    nlink: Maybe<IntQueryOperatorInput>
    uid: Maybe<IntQueryOperatorInput>
    gid: Maybe<IntQueryOperatorInput>
    rdev: Maybe<IntQueryOperatorInput>
    ino: Maybe<FloatQueryOperatorInput>
    atimeMs: Maybe<FloatQueryOperatorInput>
    mtimeMs: Maybe<FloatQueryOperatorInput>
    ctimeMs: Maybe<FloatQueryOperatorInput>
    atime: Maybe<DateQueryOperatorInput>
    mtime: Maybe<DateQueryOperatorInput>
    ctime: Maybe<DateQueryOperatorInput>
    birthtime: Maybe<DateQueryOperatorInput>
    birthtimeMs: Maybe<FloatQueryOperatorInput>
    blksize: Maybe<IntQueryOperatorInput>
    blocks: Maybe<IntQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>
    sort: Maybe<DirectorySortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>
    port: Maybe<IntQueryOperatorInput>
    host: Maybe<StringQueryOperatorInput>
    polyfill: Maybe<BooleanQueryOperatorInput>
    pathPrefix: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>
    sort: Maybe<SiteSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>
    component: Maybe<StringQueryOperatorInput>
    internalComponentName: Maybe<StringQueryOperatorInput>
    componentChunkName: Maybe<StringQueryOperatorInput>
    matchPath: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
    context: Maybe<SitePageContextFilterInput>
    pluginCreator: Maybe<SitePluginFilterInput>
    pluginCreatorId: Maybe<StringQueryOperatorInput>
    componentPath: Maybe<StringQueryOperatorInput>
  }

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>
    sort: Maybe<SitePageSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_markdownRemarkArgs = {
    id: Maybe<StringQueryOperatorInput>
    frontmatter: Maybe<FrontmatterFilterInput>
    fields: Maybe<FieldsFilterInput>
    excerpt: Maybe<StringQueryOperatorInput>
    rawMarkdownBody: Maybe<StringQueryOperatorInput>
    fileAbsolutePath: Maybe<StringQueryOperatorInput>
    html: Maybe<StringQueryOperatorInput>
    htmlAst: Maybe<JSONQueryOperatorInput>
    excerptAst: Maybe<JSONQueryOperatorInput>
    headings: Maybe<MarkdownHeadingFilterListInput>
    timeToRead: Maybe<IntQueryOperatorInput>
    tableOfContents: Maybe<StringQueryOperatorInput>
    wordCount: Maybe<MarkdownWordCountFilterInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allMarkdownRemarkArgs = {
    filter: Maybe<MarkdownRemarkFilterInput>
    sort: Maybe<MarkdownRemarkSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>
    resolutions: Maybe<ImageSharpResolutionsFilterInput>
    fluid: Maybe<ImageSharpFluidFilterInput>
    sizes: Maybe<ImageSharpSizesFilterInput>
    gatsbyImageData: Maybe<JSONQueryOperatorInput>
    original: Maybe<ImageSharpOriginalFilterInput>
    resize: Maybe<ImageSharpResizeFilterInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>
    sort: Maybe<ImageSharpSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    buildTime: Maybe<DateQueryOperatorInput>
  }

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>
    sort: Maybe<SiteBuildMetadataSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    resolve: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    version: Maybe<StringQueryOperatorInput>
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
    nodeAPIs: Maybe<StringQueryOperatorInput>
    browserAPIs: Maybe<StringQueryOperatorInput>
    ssrAPIs: Maybe<StringQueryOperatorInput>
    pluginFilepath: Maybe<StringQueryOperatorInput>
    packageJson: Maybe<SitePluginPackageJsonFilterInput>
  }

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>
    sort: Maybe<SitePluginSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>
    readonly siteMetadata: Maybe<SiteSiteMetadata>
    readonly port: Maybe<Scalars['Int']>
    readonly host: Maybe<Scalars['String']>
    readonly polyfill: Maybe<Scalars['Boolean']>
    readonly pathPrefix: Maybe<Scalars['String']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type SiteBuildMetadata = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly buildTime: Maybe<Scalars['Date']>
  }

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>
    readonly nodes: ReadonlyArray<SiteBuildMetadata>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>
  }

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum
  }

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SiteBuildMetadataFieldsEnum
  }

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>
    readonly node: SiteBuildMetadata
    readonly previous: Maybe<SiteBuildMetadata>
  }

  type SiteBuildMetadataFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'buildTime'

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly buildTime: Maybe<DateQueryOperatorInput>
  }

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>
    readonly nodes: ReadonlyArray<SiteBuildMetadata>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SiteConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteEdge>
    readonly nodes: ReadonlyArray<Site>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SiteGroupConnection>
  }

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum
  }

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SiteFieldsEnum
  }

  type SiteEdge = {
    readonly next: Maybe<Site>
    readonly node: Site
    readonly previous: Maybe<Site>
  }

  type SiteFieldsEnum =
    | 'buildTime'
    | 'siteMetadata.title'
    | 'siteMetadata.description'
    | 'siteMetadata.author.name'
    | 'siteMetadata.author.summary'
    | 'siteMetadata.siteUrl'
    | 'siteMetadata.social.twitter'
    | 'siteMetadata.social.github'
    | 'port'
    | 'host'
    | 'polyfill'
    | 'pathPrefix'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>
    readonly port: Maybe<IntQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly polyfill: Maybe<BooleanQueryOperatorInput>
    readonly pathPrefix: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type SiteGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteEdge>
    readonly nodes: ReadonlyArray<Site>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SitePage = Node & {
    readonly path: Scalars['String']
    readonly component: Scalars['String']
    readonly internalComponentName: Scalars['String']
    readonly componentChunkName: Scalars['String']
    readonly matchPath: Maybe<Scalars['String']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
    readonly context: Maybe<SitePageContext>
    readonly pluginCreator: Maybe<SitePlugin>
    readonly pluginCreatorId: Maybe<Scalars['String']>
    readonly componentPath: Maybe<Scalars['String']>
  }

  type SitePageConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePageEdge>
    readonly nodes: ReadonlyArray<SitePage>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SitePageGroupConnection>
  }

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum
  }

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SitePageFieldsEnum
  }

  type SitePageContext = {
    readonly slug: Maybe<Scalars['String']>
    readonly previous: Maybe<SitePageContextPrevious>
    readonly next: Maybe<SitePageContextNext>
    readonly blogPages: Maybe<Scalars['Int']>
    readonly skip: Maybe<Scalars['Int']>
    readonly limit: Maybe<Scalars['Int']>
    readonly currentPage: Maybe<Scalars['Int']>
    readonly tagPages: Maybe<Scalars['Int']>
    readonly tagId: Maybe<Scalars['String']>
    readonly catPages: Maybe<Scalars['Int']>
    readonly catId: Maybe<Scalars['String']>
  }

  type SitePageContextFilterInput = {
    readonly slug: Maybe<StringQueryOperatorInput>
    readonly previous: Maybe<SitePageContextPreviousFilterInput>
    readonly next: Maybe<SitePageContextNextFilterInput>
    readonly blogPages: Maybe<IntQueryOperatorInput>
    readonly skip: Maybe<IntQueryOperatorInput>
    readonly limit: Maybe<IntQueryOperatorInput>
    readonly currentPage: Maybe<IntQueryOperatorInput>
    readonly tagPages: Maybe<IntQueryOperatorInput>
    readonly tagId: Maybe<StringQueryOperatorInput>
    readonly catPages: Maybe<IntQueryOperatorInput>
    readonly catId: Maybe<StringQueryOperatorInput>
  }

  type SitePageContextNext = {
    readonly fields: Maybe<SitePageContextNextFields>
    readonly frontmatter: Maybe<SitePageContextNextFrontmatter>
  }

  type SitePageContextNextFields = {
    readonly slug: Maybe<Scalars['String']>
  }

  type SitePageContextNextFieldsFilterInput = {
    readonly slug: Maybe<StringQueryOperatorInput>
  }

  type SitePageContextNextFilterInput = {
    readonly fields: Maybe<SitePageContextNextFieldsFilterInput>
    readonly frontmatter: Maybe<SitePageContextNextFrontmatterFilterInput>
  }

  type SitePageContextNextFrontmatter = {
    readonly title: Maybe<Scalars['String']>
    readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly category: Maybe<Scalars['String']>
  }

  type SitePageContextNextFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
    readonly tags: Maybe<StringQueryOperatorInput>
    readonly category: Maybe<StringQueryOperatorInput>
  }

  type SitePageContextPrevious = {
    readonly fields: Maybe<SitePageContextPreviousFields>
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatter>
  }

  type SitePageContextPreviousFields = {
    readonly slug: Maybe<Scalars['String']>
  }

  type SitePageContextPreviousFieldsFilterInput = {
    readonly slug: Maybe<StringQueryOperatorInput>
  }

  type SitePageContextPreviousFilterInput = {
    readonly fields: Maybe<SitePageContextPreviousFieldsFilterInput>
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatterFilterInput>
  }

  type SitePageContextPreviousFrontmatter = {
    readonly title: Maybe<Scalars['String']>
    readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly category: Maybe<Scalars['String']>
  }

  type SitePageContextPreviousFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
    readonly tags: Maybe<StringQueryOperatorInput>
    readonly category: Maybe<StringQueryOperatorInput>
  }

  type SitePageEdge = {
    readonly next: Maybe<SitePage>
    readonly node: SitePage
    readonly previous: Maybe<SitePage>
  }

  type SitePageFieldsEnum =
    | 'path'
    | 'component'
    | 'internalComponentName'
    | 'componentChunkName'
    | 'matchPath'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'isCreatedByStatefulCreatePages'
    | 'context.slug'
    | 'context.previous.fields.slug'
    | 'context.previous.frontmatter.title'
    | 'context.previous.frontmatter.tags'
    | 'context.previous.frontmatter.category'
    | 'context.next.fields.slug'
    | 'context.next.frontmatter.title'
    | 'context.next.frontmatter.tags'
    | 'context.next.frontmatter.category'
    | 'context.blogPages'
    | 'context.skip'
    | 'context.limit'
    | 'context.currentPage'
    | 'context.tagPages'
    | 'context.tagId'
    | 'context.catPages'
    | 'context.catId'
    | 'pluginCreator.id'
    | 'pluginCreator.parent.id'
    | 'pluginCreator.parent.parent.id'
    | 'pluginCreator.parent.parent.children'
    | 'pluginCreator.parent.children'
    | 'pluginCreator.parent.children.id'
    | 'pluginCreator.parent.children.children'
    | 'pluginCreator.parent.internal.content'
    | 'pluginCreator.parent.internal.contentDigest'
    | 'pluginCreator.parent.internal.description'
    | 'pluginCreator.parent.internal.fieldOwners'
    | 'pluginCreator.parent.internal.ignoreType'
    | 'pluginCreator.parent.internal.mediaType'
    | 'pluginCreator.parent.internal.owner'
    | 'pluginCreator.parent.internal.type'
    | 'pluginCreator.children'
    | 'pluginCreator.children.id'
    | 'pluginCreator.children.parent.id'
    | 'pluginCreator.children.parent.children'
    | 'pluginCreator.children.children'
    | 'pluginCreator.children.children.id'
    | 'pluginCreator.children.children.children'
    | 'pluginCreator.children.internal.content'
    | 'pluginCreator.children.internal.contentDigest'
    | 'pluginCreator.children.internal.description'
    | 'pluginCreator.children.internal.fieldOwners'
    | 'pluginCreator.children.internal.ignoreType'
    | 'pluginCreator.children.internal.mediaType'
    | 'pluginCreator.children.internal.owner'
    | 'pluginCreator.children.internal.type'
    | 'pluginCreator.internal.content'
    | 'pluginCreator.internal.contentDigest'
    | 'pluginCreator.internal.description'
    | 'pluginCreator.internal.fieldOwners'
    | 'pluginCreator.internal.ignoreType'
    | 'pluginCreator.internal.mediaType'
    | 'pluginCreator.internal.owner'
    | 'pluginCreator.internal.type'
    | 'pluginCreator.resolve'
    | 'pluginCreator.name'
    | 'pluginCreator.version'
    | 'pluginCreator.pluginOptions.plugins'
    | 'pluginCreator.pluginOptions.plugins.resolve'
    | 'pluginCreator.pluginOptions.plugins.id'
    | 'pluginCreator.pluginOptions.plugins.name'
    | 'pluginCreator.pluginOptions.plugins.version'
    | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
    | 'pluginCreator.pluginOptions.plugins.browserAPIs'
    | 'pluginCreator.pluginOptions.plugins.ssrAPIs'
    | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
    | 'pluginCreator.pluginOptions.output'
    | 'pluginCreator.pluginOptions.createLinkInHead'
    | 'pluginCreator.pluginOptions.path'
    | 'pluginCreator.pluginOptions.name'
    | 'pluginCreator.pluginOptions.offsetY'
    | 'pluginCreator.pluginOptions.maintainCase'
    | 'pluginCreator.pluginOptions.className'
    | 'pluginCreator.pluginOptions.maxWidth'
    | 'pluginCreator.pluginOptions.linkImagesToOriginal'
    | 'pluginCreator.pluginOptions.showCaptions'
    | 'pluginCreator.pluginOptions.markdownCaptions'
    | 'pluginCreator.pluginOptions.sizeByPixelDensity'
    | 'pluginCreator.pluginOptions.backgroundColor'
    | 'pluginCreator.pluginOptions.quality'
    | 'pluginCreator.pluginOptions.withWebp'
    | 'pluginCreator.pluginOptions.tracedSVG'
    | 'pluginCreator.pluginOptions.loading'
    | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
    | 'pluginCreator.pluginOptions.disableBgImage'
    | 'pluginCreator.pluginOptions.wrapperStyle'
    | 'pluginCreator.pluginOptions.base64Width'
    | 'pluginCreator.pluginOptions.stripMetadata'
    | 'pluginCreator.pluginOptions.defaultQuality'
    | 'pluginCreator.pluginOptions.failOnError'
    | 'pluginCreator.pluginOptions.trackingId'
    | 'pluginCreator.pluginOptions.head'
    | 'pluginCreator.pluginOptions.anonymize'
    | 'pluginCreator.pluginOptions.respectDNT'
    | 'pluginCreator.pluginOptions.pageTransitionDelay'
    | 'pluginCreator.pluginOptions.short_name'
    | 'pluginCreator.pluginOptions.start_url'
    | 'pluginCreator.pluginOptions.background_color'
    | 'pluginCreator.pluginOptions.theme_color'
    | 'pluginCreator.pluginOptions.display'
    | 'pluginCreator.pluginOptions.legacy'
    | 'pluginCreator.pluginOptions.theme_color_in_head'
    | 'pluginCreator.pluginOptions.cache_busting_mode'
    | 'pluginCreator.pluginOptions.crossOrigin'
    | 'pluginCreator.pluginOptions.include_favicon'
    | 'pluginCreator.pluginOptions.cacheDigest'
    | 'pluginCreator.pluginOptions.pathCheck'
    | 'pluginCreator.pluginOptions.allExtensions'
    | 'pluginCreator.pluginOptions.isTSX'
    | 'pluginCreator.pluginOptions.jsxPragma'
    | 'pluginCreator.nodeAPIs'
    | 'pluginCreator.browserAPIs'
    | 'pluginCreator.ssrAPIs'
    | 'pluginCreator.pluginFilepath'
    | 'pluginCreator.packageJson.name'
    | 'pluginCreator.packageJson.description'
    | 'pluginCreator.packageJson.version'
    | 'pluginCreator.packageJson.main'
    | 'pluginCreator.packageJson.license'
    | 'pluginCreator.packageJson.dependencies'
    | 'pluginCreator.packageJson.dependencies.name'
    | 'pluginCreator.packageJson.dependencies.version'
    | 'pluginCreator.packageJson.devDependencies'
    | 'pluginCreator.packageJson.devDependencies.name'
    | 'pluginCreator.packageJson.devDependencies.version'
    | 'pluginCreator.packageJson.peerDependencies'
    | 'pluginCreator.packageJson.peerDependencies.name'
    | 'pluginCreator.packageJson.peerDependencies.version'
    | 'pluginCreator.packageJson.keywords'
    | 'pluginCreatorId'
    | 'componentPath'

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>
    readonly component: Maybe<StringQueryOperatorInput>
    readonly internalComponentName: Maybe<StringQueryOperatorInput>
    readonly componentChunkName: Maybe<StringQueryOperatorInput>
    readonly matchPath: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
    readonly context: Maybe<SitePageContextFilterInput>
    readonly pluginCreator: Maybe<SitePluginFilterInput>
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>
    readonly componentPath: Maybe<StringQueryOperatorInput>
  }

  type SitePageGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePageEdge>
    readonly nodes: ReadonlyArray<SitePage>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SitePlugin = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly resolve: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly pluginOptions: Maybe<SitePluginPluginOptions>
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly pluginFilepath: Maybe<Scalars['String']>
    readonly packageJson: Maybe<SitePluginPackageJson>
  }

  type SitePluginConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePluginEdge>
    readonly nodes: ReadonlyArray<SitePlugin>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SitePluginGroupConnection>
  }

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum
  }

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SitePluginFieldsEnum
  }

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>
    readonly node: SitePlugin
    readonly previous: Maybe<SitePlugin>
  }

  type SitePluginFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'resolve'
    | 'name'
    | 'version'
    | 'pluginOptions.plugins'
    | 'pluginOptions.plugins.resolve'
    | 'pluginOptions.plugins.id'
    | 'pluginOptions.plugins.name'
    | 'pluginOptions.plugins.version'
    | 'pluginOptions.plugins.pluginOptions.offsetY'
    | 'pluginOptions.plugins.pluginOptions.icon'
    | 'pluginOptions.plugins.pluginOptions.maintainCase'
    | 'pluginOptions.plugins.pluginOptions.className'
    | 'pluginOptions.plugins.pluginOptions.maxWidth'
    | 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal'
    | 'pluginOptions.plugins.pluginOptions.showCaptions'
    | 'pluginOptions.plugins.pluginOptions.markdownCaptions'
    | 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity'
    | 'pluginOptions.plugins.pluginOptions.backgroundColor'
    | 'pluginOptions.plugins.pluginOptions.quality'
    | 'pluginOptions.plugins.pluginOptions.withWebp'
    | 'pluginOptions.plugins.pluginOptions.tracedSVG'
    | 'pluginOptions.plugins.pluginOptions.loading'
    | 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha'
    | 'pluginOptions.plugins.pluginOptions.disableBgImage'
    | 'pluginOptions.plugins.pluginOptions.wrapperStyle'
    | 'pluginOptions.plugins.nodeAPIs'
    | 'pluginOptions.plugins.browserAPIs'
    | 'pluginOptions.plugins.ssrAPIs'
    | 'pluginOptions.plugins.pluginFilepath'
    | 'pluginOptions.output'
    | 'pluginOptions.createLinkInHead'
    | 'pluginOptions.path'
    | 'pluginOptions.name'
    | 'pluginOptions.offsetY'
    | 'pluginOptions.maintainCase'
    | 'pluginOptions.className'
    | 'pluginOptions.maxWidth'
    | 'pluginOptions.linkImagesToOriginal'
    | 'pluginOptions.showCaptions'
    | 'pluginOptions.markdownCaptions'
    | 'pluginOptions.sizeByPixelDensity'
    | 'pluginOptions.backgroundColor'
    | 'pluginOptions.quality'
    | 'pluginOptions.withWebp'
    | 'pluginOptions.tracedSVG'
    | 'pluginOptions.loading'
    | 'pluginOptions.disableBgImageOnAlpha'
    | 'pluginOptions.disableBgImage'
    | 'pluginOptions.wrapperStyle'
    | 'pluginOptions.base64Width'
    | 'pluginOptions.stripMetadata'
    | 'pluginOptions.defaultQuality'
    | 'pluginOptions.failOnError'
    | 'pluginOptions.trackingId'
    | 'pluginOptions.head'
    | 'pluginOptions.anonymize'
    | 'pluginOptions.respectDNT'
    | 'pluginOptions.pageTransitionDelay'
    | 'pluginOptions.short_name'
    | 'pluginOptions.start_url'
    | 'pluginOptions.background_color'
    | 'pluginOptions.theme_color'
    | 'pluginOptions.display'
    | 'pluginOptions.legacy'
    | 'pluginOptions.theme_color_in_head'
    | 'pluginOptions.cache_busting_mode'
    | 'pluginOptions.crossOrigin'
    | 'pluginOptions.include_favicon'
    | 'pluginOptions.cacheDigest'
    | 'pluginOptions.pathCheck'
    | 'pluginOptions.allExtensions'
    | 'pluginOptions.isTSX'
    | 'pluginOptions.jsxPragma'
    | 'nodeAPIs'
    | 'browserAPIs'
    | 'ssrAPIs'
    | 'pluginFilepath'
    | 'packageJson.name'
    | 'packageJson.description'
    | 'packageJson.version'
    | 'packageJson.main'
    | 'packageJson.license'
    | 'packageJson.dependencies'
    | 'packageJson.dependencies.name'
    | 'packageJson.dependencies.version'
    | 'packageJson.devDependencies'
    | 'packageJson.devDependencies.name'
    | 'packageJson.devDependencies.version'
    | 'packageJson.peerDependencies'
    | 'packageJson.peerDependencies.name'
    | 'packageJson.peerDependencies.version'
    | 'packageJson.keywords'

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly resolve: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>
    readonly browserAPIs: Maybe<StringQueryOperatorInput>
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>
  }

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePluginEdge>
    readonly nodes: ReadonlyArray<SitePlugin>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly main: Maybe<Scalars['String']>
    readonly license: Maybe<Scalars['String']>
    readonly dependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
    >
    readonly devDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
    >
    readonly peerDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
    >
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  }

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>
  }

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
  }

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly main: Maybe<StringQueryOperatorInput>
    readonly license: Maybe<StringQueryOperatorInput>
    readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
    readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
    readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
    readonly keywords: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
  }

  type SitePluginPluginOptions = {
    readonly plugins: Maybe<
      ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>
    >
    readonly output: Maybe<Scalars['String']>
    readonly createLinkInHead: Maybe<Scalars['Boolean']>
    readonly path: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly offsetY: Maybe<Scalars['Int']>
    readonly maintainCase: Maybe<Scalars['Boolean']>
    readonly className: Maybe<Scalars['String']>
    readonly maxWidth: Maybe<Scalars['Int']>
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>
    readonly showCaptions: Maybe<Scalars['Boolean']>
    readonly markdownCaptions: Maybe<Scalars['Boolean']>
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>
    readonly backgroundColor: Maybe<Scalars['String']>
    readonly quality: Maybe<Scalars['Int']>
    readonly withWebp: Maybe<Scalars['Boolean']>
    readonly tracedSVG: Maybe<Scalars['Boolean']>
    readonly loading: Maybe<Scalars['String']>
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>
    readonly disableBgImage: Maybe<Scalars['Boolean']>
    readonly wrapperStyle: Maybe<Scalars['String']>
    readonly base64Width: Maybe<Scalars['Int']>
    readonly stripMetadata: Maybe<Scalars['Boolean']>
    readonly defaultQuality: Maybe<Scalars['Int']>
    readonly failOnError: Maybe<Scalars['Boolean']>
    readonly trackingId: Maybe<Scalars['String']>
    readonly head: Maybe<Scalars['Boolean']>
    readonly anonymize: Maybe<Scalars['Boolean']>
    readonly respectDNT: Maybe<Scalars['Boolean']>
    readonly pageTransitionDelay: Maybe<Scalars['Int']>
    readonly short_name: Maybe<Scalars['String']>
    readonly start_url: Maybe<Scalars['String']>
    readonly background_color: Maybe<Scalars['String']>
    readonly theme_color: Maybe<Scalars['String']>
    readonly display: Maybe<Scalars['String']>
    readonly legacy: Maybe<Scalars['Boolean']>
    readonly theme_color_in_head: Maybe<Scalars['Boolean']>
    readonly cache_busting_mode: Maybe<Scalars['String']>
    readonly crossOrigin: Maybe<Scalars['String']>
    readonly include_favicon: Maybe<Scalars['Boolean']>
    readonly cacheDigest: Maybe<Scalars['String']>
    readonly pathCheck: Maybe<Scalars['Boolean']>
    readonly allExtensions: Maybe<Scalars['Boolean']>
    readonly isTSX: Maybe<Scalars['Boolean']>
    readonly jsxPragma: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsFilterInput = {
    readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
    readonly output: Maybe<StringQueryOperatorInput>
    readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>
    readonly path: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly offsetY: Maybe<IntQueryOperatorInput>
    readonly maintainCase: Maybe<BooleanQueryOperatorInput>
    readonly className: Maybe<StringQueryOperatorInput>
    readonly maxWidth: Maybe<IntQueryOperatorInput>
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>
    readonly backgroundColor: Maybe<StringQueryOperatorInput>
    readonly quality: Maybe<IntQueryOperatorInput>
    readonly withWebp: Maybe<BooleanQueryOperatorInput>
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>
    readonly loading: Maybe<StringQueryOperatorInput>
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>
    readonly wrapperStyle: Maybe<StringQueryOperatorInput>
    readonly base64Width: Maybe<IntQueryOperatorInput>
    readonly stripMetadata: Maybe<BooleanQueryOperatorInput>
    readonly defaultQuality: Maybe<IntQueryOperatorInput>
    readonly failOnError: Maybe<BooleanQueryOperatorInput>
    readonly trackingId: Maybe<StringQueryOperatorInput>
    readonly head: Maybe<BooleanQueryOperatorInput>
    readonly anonymize: Maybe<BooleanQueryOperatorInput>
    readonly respectDNT: Maybe<BooleanQueryOperatorInput>
    readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>
    readonly short_name: Maybe<StringQueryOperatorInput>
    readonly start_url: Maybe<StringQueryOperatorInput>
    readonly background_color: Maybe<StringQueryOperatorInput>
    readonly theme_color: Maybe<StringQueryOperatorInput>
    readonly display: Maybe<StringQueryOperatorInput>
    readonly legacy: Maybe<BooleanQueryOperatorInput>
    readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>
    readonly cache_busting_mode: Maybe<StringQueryOperatorInput>
    readonly crossOrigin: Maybe<StringQueryOperatorInput>
    readonly include_favicon: Maybe<BooleanQueryOperatorInput>
    readonly cacheDigest: Maybe<StringQueryOperatorInput>
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>
    readonly allExtensions: Maybe<BooleanQueryOperatorInput>
    readonly isTSX: Maybe<BooleanQueryOperatorInput>
    readonly jsxPragma: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPlugins = {
    readonly resolve: Maybe<Scalars['String']>
    readonly id: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly pluginFilepath: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>
    readonly browserAPIs: Maybe<StringQueryOperatorInput>
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptions = {
    readonly offsetY: Maybe<Scalars['Int']>
    readonly icon: Maybe<Scalars['Boolean']>
    readonly maintainCase: Maybe<Scalars['Boolean']>
    readonly className: Maybe<Scalars['String']>
    readonly maxWidth: Maybe<Scalars['Int']>
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>
    readonly showCaptions: Maybe<Scalars['Boolean']>
    readonly markdownCaptions: Maybe<Scalars['Boolean']>
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>
    readonly backgroundColor: Maybe<Scalars['String']>
    readonly quality: Maybe<Scalars['Int']>
    readonly withWebp: Maybe<Scalars['Boolean']>
    readonly tracedSVG: Maybe<Scalars['Boolean']>
    readonly loading: Maybe<Scalars['String']>
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>
    readonly disableBgImage: Maybe<Scalars['Boolean']>
    readonly wrapperStyle: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    readonly offsetY: Maybe<IntQueryOperatorInput>
    readonly icon: Maybe<BooleanQueryOperatorInput>
    readonly maintainCase: Maybe<BooleanQueryOperatorInput>
    readonly className: Maybe<StringQueryOperatorInput>
    readonly maxWidth: Maybe<IntQueryOperatorInput>
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>
    readonly backgroundColor: Maybe<StringQueryOperatorInput>
    readonly quality: Maybe<IntQueryOperatorInput>
    readonly withWebp: Maybe<BooleanQueryOperatorInput>
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>
    readonly loading: Maybe<StringQueryOperatorInput>
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>
    readonly wrapperStyle: Maybe<StringQueryOperatorInput>
  }

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly author: Maybe<Author>
    readonly siteUrl: Maybe<Scalars['String']>
    readonly social: Maybe<Social>
  }

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly author: Maybe<AuthorFilterInput>
    readonly siteUrl: Maybe<StringQueryOperatorInput>
    readonly social: Maybe<SocialFilterInput>
  }

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type Social = {
    readonly twitter: Maybe<Scalars['String']>
    readonly github: Maybe<Scalars['String']>
  }

  type SocialFilterInput = {
    readonly twitter: Maybe<StringQueryOperatorInput>
    readonly github: Maybe<StringQueryOperatorInput>
  }

  type SortOrderEnum = 'ASC' | 'DESC'

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars['String']>
    readonly ne: Maybe<Scalars['String']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly regex: Maybe<Scalars['String']>
    readonly glob: Maybe<Scalars['String']>
  }

  type TransformOptions = {
    readonly grayscale: Maybe<Scalars['Boolean']>
    readonly duotone: Maybe<DuotoneGradient>
    readonly rotate: Maybe<Scalars['Int']>
    readonly trim: Maybe<Scalars['Float']>
    readonly cropFocus: Maybe<ImageCropFocus>
    readonly fit: Maybe<ImageFit>
  }

  type WebPOptions = {
    readonly quality: Maybe<Scalars['Int']>
  }

  type GatsbyImageSharpFluid_withWebpFragment = Pick<
    ImageSharpFluid,
    | 'base64'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
  >

  type BlogPostBySlugQueryVariables = Exact<{
    slug: Scalars['String']
  }>

  type BlogPostBySlugQuery = {
    readonly markdownRemark: Maybe<
      Pick<MarkdownRemark, 'excerpt' | 'html' | 'tableOfContents'> & {
        readonly frontmatter: Maybe<
          Pick<Frontmatter, 'title' | 'date' | 'description'> & {
            readonly hero: Maybe<{
              readonly childImageSharp: Maybe<{
                readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
                readonly sizes: Maybe<Pick<ImageSharpSizes, 'src'>>
              }>
            }>
          }
        >
      }
    >
  }

  type BlogPageQueryVariables = Exact<{
    limit: Scalars['Int']
    skip: Scalars['Int']
  }>

  type BlogPageQuery = {
    readonly allMarkdownRemark: {
      readonly nodes: ReadonlyArray<
        Pick<MarkdownRemark, 'excerpt'> & {
          readonly fields: Maybe<Pick<Fields, 'slug'>>
          readonly frontmatter: Maybe<
            Pick<Frontmatter, 'date' | 'title' | 'description' | 'tags'> & {
              readonly hero: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
                }>
              }>
            }
          >
        }
      >
    }
  }

  type TagPageQueryVariables = Exact<{
    limit: Scalars['Int']
    skip: Scalars['Int']
    tagId: Scalars['String']
  }>

  type TagPageQuery = {
    readonly allMarkdownRemark: Pick<MarkdownRemarkConnection, 'totalCount'> & {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly fields: Maybe<Pick<Fields, 'slug'>>
          readonly frontmatter: Maybe<
            Pick<Frontmatter, 'date' | 'title' | 'description' | 'tags'> & {
              readonly hero: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
                }>
              }>
            }
          >
        }
      }>
    }
  }

  type CatPageQueryVariables = Exact<{
    limit: Scalars['Int']
    skip: Scalars['Int']
    catId: Scalars['String']
  }>

  type CatPageQuery = {
    readonly allMarkdownRemark: Pick<MarkdownRemarkConnection, 'totalCount'> & {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly fields: Maybe<Pick<Fields, 'slug'>>
          readonly frontmatter: Maybe<
            Pick<Frontmatter, 'date' | 'title' | 'description' | 'tags'> & {
              readonly hero: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
                }>
              }>
            }
          >
        }
      }>
    }
  }

  type PagesQueryQueryVariables = Exact<{ [key: string]: never }>

  type PagesQueryQuery = {
    readonly allSitePage: {
      readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>>
    }
  }

  type ErrorPageQueryVariables = Exact<{ [key: string]: never }>

  type ErrorPageQuery = {
    readonly allMarkdownRemark: {
      readonly catGroup: ReadonlyArray<
        Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
      >
      readonly tagGroup: ReadonlyArray<
        Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
      >
    }
  }

  type BlogIndexQueryVariables = Exact<{ [key: string]: never }>

  type BlogIndexQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>>
    }>
    readonly allMarkdownRemark: {
      readonly nodes: ReadonlyArray<
        Pick<MarkdownRemark, 'excerpt' | 'id'> & {
          readonly fields: Maybe<Pick<Fields, 'slug'>>
          readonly frontmatter: Maybe<
            Pick<Frontmatter, 'date' | 'title' | 'description' | 'tags'> & {
              readonly hero: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
                }>
              }>
            }
          >
        }
      >
      readonly catGroup: ReadonlyArray<
        Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
      >
      readonly tagGroup: ReadonlyArray<
        Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>
      >
    }
  }

  type WorkPageQueryVariables = Exact<{ [key: string]: never }>

  type WorkPageQuery = {
    readonly allMarkdownRemark: {
      readonly nodes: ReadonlyArray<{
        readonly frontmatter: Maybe<
          Pick<Frontmatter, 'title' | 'siteUrl' | 'githubUrl' | 'skill'> & {
            readonly thumb: Maybe<{
              readonly childImageSharp: Maybe<{
                readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
              }>
            }>
          }
        >
      }>
    }
  }

  type BioQueryVariables = Exact<{ [key: string]: never }>

  type BioQuery = {
    readonly avatar: Maybe<{
      readonly childImageSharp: Maybe<{
        readonly fixed: Maybe<GatsbyImageSharpFixedFragment>
      }>
    }>
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<{
        readonly author: Maybe<Pick<Author, 'name'>>
        readonly social: Maybe<Pick<Social, 'twitter' | 'github'>>
      }>
    }>
  }

  type FvQueryVariables = Exact<{ [key: string]: never }>

  type FvQuery = {
    readonly fv: Maybe<{
      readonly childImageSharp: Maybe<{
        readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>
      }>
    }>
  }

  type SeoQueryVariables = Exact<{ [key: string]: never }>

  type SeoQuery = {
    readonly avatar: Maybe<{
      readonly childImageSharp: Maybe<{
        readonly sizes: Maybe<Pick<ImageSharpSizes, 'src'>>
      }>
    }>
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<
        Pick<SiteSiteMetadata, 'title' | 'siteUrl' | 'description'> & {
          readonly social: Maybe<Pick<Social, 'twitter'>>
        }
      >
    }>
  }

  type ImgQueryVariables = Exact<{ [key: string]: never }>

  type ImgQuery = {
    readonly allImageSharp: {
      readonly nodes: ReadonlyArray<{
        readonly fluid: Maybe<
          Pick<ImageSharpFluid, 'originalName'> &
            GatsbyImageSharpFluid_withWebpFragment
        >
      }>
    }
  }

  type GatsbyImageSharpFixedFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_tracedSVGFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_withWebpFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<
    ImageSharpFixed,
    | 'tracedSVG'
    | 'width'
    | 'height'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
  >

  type GatsbyImageSharpFixed_noBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: ImageSharpFluid['presentationHeight']
    maxWidth: ImageSharpFluid['presentationWidth']
  }

  type GatsbyImageSharpFluid_tracedSVGFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<
    ImageSharpFluid,
    | 'tracedSVG'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
  >

  type GatsbyImageSharpFluid_noBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >

  type GatsbyImageSharpResolutionsFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpResolutions_withWebpFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<
    ImageSharpResolutions,
    | 'tracedSVG'
    | 'width'
    | 'height'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
  >

  type GatsbyImageSharpResolutions_noBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpSizesFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpSizes_tracedSVGFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpSizes_withWebpFragment = Pick<
    ImageSharpSizes,
    | 'base64'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
  >

  type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<
    ImageSharpSizes,
    | 'tracedSVG'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
  >

  type GatsbyImageSharpSizes_noBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >
}
