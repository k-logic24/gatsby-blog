import 'typeface-caveat'

import '@/styles/tailwind.css'
import '@/styles/index.css'
import '@/styles/tailwind-utils.css'

// prism
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/command-line/prism-command-line.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

/**
 * smooth-scroll
 */
if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
    easing: 'easeInOutCubic',
  })
}

const onRouteUpdate = ({ location }) => {
  const postRegExp = /\/.+\/.+\/.+\//
  if (postRegExp.test(location.pathname)) {
    const targets = document.querySelectorAll('.js-fadeUpPost')
    targets.forEach((target, idx) => {
      setTimeout(() => target.classList.add('show'), 500 * idx)
    })
  }
}

export { onRouteUpdate }
