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
      className="block py-4 w-full adsbygoogle"
      data-ad-client="ca-pub-3684314520364885"
      data-ad-slot="7188888367"
      data-ad-format='auto'
    />
  )
}

export default Ads
