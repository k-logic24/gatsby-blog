---
title: '擬似要素で特殊文字を使用するには'
date: '2021-02-01'
hero: '../images/css.jpg'
category: 'tech'
tags: ['css']
---
擬似要素を使用して特殊文字を表すには、以下のことをしなければなりません
```shell
- 「&」 は 「¥」 に
- 「#」 は 「0」 に
- 数字は10進数から16進数に
- 最後のセミコロンは省略する
```

例えば、「&times;」を表そうとすると以下の通りになります。
```css
.sample {
  content: '\0d7";
}
```

こちらのサイトで10進数と16進数を確認してみるといいかもしれません。  
https://gray-code.com/html_css/list-of-symbols-and-special-characters/
