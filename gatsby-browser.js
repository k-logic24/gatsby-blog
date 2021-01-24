import { gsap } from 'gsap'
import 'typeface-caveat'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import { splitTestToChars } from './src/utils/SplitTextUtils'
import '@/styles/tailwind.css'
import '@/styles/index.css'
import '@/styles/tailwind-utils.css'

// prism
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/command-line/prism-command-line.css'

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
  (() => {
    const postRegExp = /^\/blog\/(web|daily)\/.+\/$/
    if (postRegExp.test(location.pathname)) {
      const targets = document.querySelectorAll('.js-fadeUpPost')
      targets.forEach((target, idx) => {
        setTimeout(() => target.classList.add('show'), 500 * idx)
      })
    }
  })();

  (() => {
    const textAnimEl = document.getElementById('js-splitText')
    if (textAnimEl) {
      const chars = splitTestToChars(textAnimEl)
      gsap.from(
        chars, {
          opacity: 0,
          x: -20,
          ease: 'inOut',
          stagger: 0.15,
          duration: 0.2,
          delay: 0.5
        }
      )
    }
  })();
}

export { onRouteUpdate }
