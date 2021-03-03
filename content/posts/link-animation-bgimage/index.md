---
title: 'background-imageを使用したリンクアニメーション'
date: '2021-01-30'
hero: '../images/css.jpg'
category: 'tech'
tags: ['html', 'css']
---

リンクアニメーションをbackgroundプロパティで表現します。

<iframe height="265" style="width: 100%;" scrolling="no" title="link-hover-animation" src="https://codepen.io/g-logic24/embed/NWbWNOv?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/g-logic24/pen/NWbWNOv'>link-hover-animation</a> by iwata
  (<a href='https://codepen.io/g-logic24'>@g-logic24</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 解説
`background-image`は半分半分にします。50% グラデーション、50% 黒みたいにします。  
`background-size`で2倍の大きさにし、100% 100%の状態にします。  
`background-position`でx方向に-100%ずらし、`#333`を見せます。

hover時には以下のようにします。  
`background-position`をx方向0%に戻します。
