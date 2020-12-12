import 'typeface-caveat'
import 'typeface-m-plus-rounded-1c'

import '@/styles/tailwind.css'
import '@/styles/index.css'
import '@/styles/tailwind-utils.css'

// prism
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/command-line/prism-command-line.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
    easing: 'easeInOutCubic',
  })
}
