---
title: 'JSのscroll,resizeイベント負荷の対処法'
date: '2021-02-06'
hero: '../../images/javascript.jpg'
category: 'tech'
tags: ['javascript']
---
JavaScriptのscrollイベント、resizeイベントはそのまま使用すると負荷が大きくなります。  
特にscrollイベントはスクロールの度に発火するので、とても負荷がかかります。

今回はイベントの負荷を下げる方法について考えてみます。

またlodashライブラリにある、debounceやthrottleがありますが、今回は使用しません。  
使用できるなら積極的に使用した方が記述も少なくて良いかもしれません。  
- debounce [https://lodash.com/docs/#debounce]()
- throttle [https://lodash.com/docs/#throttle]()

## スクロールジャンクってなんだろう
ページのスクロールをした際に、スクロールが詰まったような遅延のことです。  
以下のことで発生します。
- スクロールイベント内で`preventDefault()`が実行されている可能性がある
- スクロールイベント内で要素のサイズや位置を取得する処理がある

### preventDefault...可能性？
イベントは`preventDefault`が呼び出された地点で、処理が中止されます。  
しかし、ブラウザ側はイベント内で`preventDefault`が呼び出されるか事前に知りません。  
イベント内で処理が待つしかなく、それが遅延の原因となりえます。

### サイズや位置の取得
レイアウト計算処理で発生します。  
「レイアウト処理」が実行されないと期待する値が分からない系の処理です。

## スクロールイベントの最適化
上記の現象を踏まえた最適化方法を模索します。

### まず事前にpreventDefault()されないことを伝える
addEventListenerには第三引数として、passiveが設定できます。  
`preventDefault`の状態を明示的にできます。
```js
addEventListener('scroll', function(){
  // some actions
}, { passive: true })
```

### settimeoutを使用する
これはよくみる方法ではないかと思います。

```js
let flag = false
function Action() {
  if (!flag) {
    flag = true
    setTimeout(() => {
      console.log(`event fired!!`)
      flag = false
    }, 100)
  }
}
window.addEventListener('scroll', Action, {passive: true})
```
### requestAnimationFrameを使用する
```js
let flag = false;

function Action() {
  if (!flag) {
    requestAnimationFrame(function() {
      flag = false
      console.log(`event fired!!`)
    })
    flag = true
  }
}

document.addEventListener('scroll', Action, {passive: true})
```
requestAnimationFrameはブラウザの適切なタイミングで実行してくれます。  
なので、別タブにいるときは発火せず、戻ってきた時に再開してくれます。

## 感想
割とネックになる部分ではあるので、意識して実装していくといいですね。  
UX改善にもつながるかもしれません。
