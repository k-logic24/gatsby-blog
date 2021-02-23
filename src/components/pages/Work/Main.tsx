import React, { useEffect, useState } from 'react'

import Layouts from '@/layouts/layouts'
import Item from '@/components/molecules/Work/item'

type WorkProps = GatsbyTypes.WorkPageQuery['allMarkdownRemark']['nodes']

const Main: React.FC<{ data: GatsbyTypes.WorkPageQuery }> = ({ data }) => {
  const [works, setWorks] = useState<WorkProps>([])

  useEffect(() => {
    setWorks(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <Layouts
      seoTitle="WORK"
      seoDescription="This is a page of my work. As a front-end engineer, I will be actively working on applications using APIs and creating games from different perspectives."
      fvTitle="WORK"
      isText
    >
      <section className="section work">
        <ul className="article-list">
          {works.map(({ frontmatter }) => (
            <Item
              key={frontmatter?.title}
              title={frontmatter?.title}
              src={frontmatter?.thumb?.childImageSharp?.fluid}
              githubUrl={frontmatter?.githubUrl}
              siteUrl={frontmatter?.siteUrl}
              skill={frontmatter?.skill}
            />
          ))}
        </ul>
      </section>
    </Layouts>
  )
}

export default Main
