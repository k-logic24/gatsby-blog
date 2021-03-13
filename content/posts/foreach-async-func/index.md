---
title: "Array.prototype.forEachでasyncを使用する時の注意"
date: "2021-03-13"
hero: "../images/javascript.jpg"
tags: ["javascript"]
category: "tech"
---

結論、**forEachはPromiseを待たない**

MDNをみればちゃんと記述されていました。  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

## polyfillから見る
またpolyfillをみて、以下のことが言えます。
- Array.prototype.forEachはasync関数ではない。
- callback.callにawaitがついていない。
  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#polyfill

<adsense></adsense>

## 検証
1秒ごとに番号をログ出力します。

### 望まない挙動
forEachだとプロミスを又な
```ts
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

(async () => {
    const nums = [1,2,3,4,5]
    nums.forEach(async (num) => {
        await sleep(1000)
        console.log(num)
    })
})()
```

### 望む挙動
`for-of`を使用する。
```ts
...(省略)
(async () => {
    const nums = [1,2,3,4,5]
    for( let num of nums ) {
      await sleep(1000)
      console.log(num)
    }
})()
```

### forEachでもasync-awaitが使用できる
下記のライブラリがありました。  
https://www.npmjs.com/package/array-foreach-async

これで使用できますが、本当に使う時があるのでしょうか。
