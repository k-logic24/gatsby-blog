---
title: 'cssでテキストカラーを半分ずつわける'
date: '2020-12-20'
hero: '../img/css.jpg'
category: 'tech'
tags: ['html', 'css']
---

お題の通り、テキストカラーが異なるようなCSSを作りました。  
どこかで使用することを願って...。

## 擬似要素を使用
擬似要素を使用した方法です。

<iframe height="265" style="width: 100%;" scrolling="no" title="text-color-split" src="https://codepen.io/g-logic24/embed/zYqLpxy?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/g-logic24/pen/zYqLpxy'>text-color-split</a> by iwata
  (<a href='https://codepen.io/g-logic24'>@g-logic24</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## background-clipを使用
background-clipを使用した方法もあります。

```css
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(-90deg, #3498db 50%, #fff 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 7vw;
  font-weight: 700;
  white-space: nowrap;
}
```
擬似要素は必要ありません。

background-clipは__chromeではprefixが必要__みたいです。  
また、前プロパティに加え-webkit-text-fill-colorは__IE非対応__になっています。
