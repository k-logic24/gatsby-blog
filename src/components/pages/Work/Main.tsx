import React, { useEffect, useState } from 'react'

import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'
import Item from '@/components/molecules/Work/item'

type WorkProps = GatsbyTypes.WorkPageQuery['allMarkdownRemark']['nodes']

const Main: React.FC<{ data: GatsbyTypes.WorkPageQuery }> = ({ data }) => {
  const [works, setWorks] = useState<WorkProps>([])

  useEffect(() => {
    setWorks(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <Layouts>
      <Seo
        title="WORKS | K.Iwata's BLOG"
        description="This is a page of my works. As a front-end engineer, I will be actively working on applications using APIs and creating games from different perspectives."
      />
      <Fv title="WORKS" assetName="works.jpg" />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
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
      </main>
    </Layouts>
  )
}

export default Main
