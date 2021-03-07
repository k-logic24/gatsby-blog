import 'typeface-dosis'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/command-line/prism-command-line.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import '@/styles/tailwind.css'
import '@/styles/index.css'
import '@/styles/tailwind-utils.css'

/**
 * smooth-scroll
 */
if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
    easing: 'easeInOutCubic',
  })
}
