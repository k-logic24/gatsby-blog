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
      className="w-full text-center my-4 block"
      data-ad-client="ca-pub-3684314520364885"
      data-ad-slot="7188888367"
      data-ad-format='auto'
      data-full-width-responsive='false'
    />
  )
}

export default Ads
