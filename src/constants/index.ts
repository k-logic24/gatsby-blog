import { faBoxes, faBook, faPen } from '@fortawesome/free-solid-svg-icons'

export const navs = [
  {
    icon: faBook,
    txt: `読んだ本を紹介していきます。`,
    path: '/book',
  },
  {
    icon: faPen,
    txt: `ブログ一覧ページです。`,
    margin: `ml-1 md:ml-2`,
    path: '/blog',
  },
  {
    icon: faBoxes,
    txt: `制作作品一覧ページです。`,
    margin: `ml-1 md:ml-2`,
    path: '/work',
  },
]
