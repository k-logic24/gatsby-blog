import React, { useEffect } from 'react'

type Props = {
  currentPath?: string
}

const Ads: React.FC<Props> = props => {
  const { currentPath } = props

  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
  }, [currentPath])

  return (
    <ins
      className="block my-4 adsbygoogle"
      data-ad-client="ca-pub-3684314520364885"
      data-ad-slot="7188888367"
      data-ad-format="auto"
      data-full-width-responsive="false"
    />
  )
}

export default Ads
