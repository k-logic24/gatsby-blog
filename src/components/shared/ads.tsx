import React, { useEffect } from 'react'

const Ads: React.FC = ( props: any ) => {
  const { currentPath } = props

  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
  }, [currentPath]);

  return (
    <ins
      className="adsbygoogle"
      style={{display:'block', textAlign: 'center'}}
      data-ad-client="ca-pub-3684314520364885"
      data-ad-slot="7188888367"
      data-ad-format='auto'
      data-full-width-responsive='true'
    />
  )
}

export default Ads
