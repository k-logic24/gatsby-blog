import React, { useEffect, useState } from 'react'

import Seo from '@/components/shared/seo'
import Header from '@/components/organisms/header'
import Fv from '@/components/organisms/fv'
import Item from '@/components/molecules/Work/item'

type WorkProps = GatsbyTypes.WorkPageQuery['allMarkdownRemark']['nodes']

const Main: React.FC<{ data: GatsbyTypes.WorkPageQuery }> = ({ data }) => {
  const [works, setWorks] = useState<WorkProps>([])

  useEffect(() => {
    setWorks(data.allMarkdownRemark.nodes)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title="WORK" isText={true} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-md">
        <Seo
          title="WORK"
          description="制作した作品ページになります。フロントエンドエンジニアとして、APIを使用したアプリや違った視点からのゲーム作成など、精力的にこなしていきます。"
        />
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
    </div>
  )
}

export default Main
