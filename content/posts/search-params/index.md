---
title: 'urlのパラメータ取得の方法'
date: '2021-02-13'
hero: '../images/javascript.jpg'
category: 'tech'
tags: ['javascript']
---

個人的に、よくアプリを作成する際に、ユーザーidをurlから取得したり、検索のキーワードを取得したりします。  
この時、簡単にパラメータのみ取れたら楽ですよね。私自身、長い処理も書きたくないですし。

今回は簡単にパラメータを取得する方法を紹介します。

## new URLSearchParams
このインターフェイスを使用して、便利なメソッドを使用できるようにします。

以下のようなurlがあると仮定します。  
`https://iwoooogle/com/search?q=neko&code=1234`

これからqまたはcodeのパラメータ値をとるには以下のような処理で取得できます。
```js
// 直接urlを取得するなら
// const url = location.search
// 文字列からurlオブジェクトを作成するなら
const url = new URL('https://iwoooogle/com/search?q=neko&code=1234')
const queries = new URLSearchParams(url.search)
console.log(queries.get('code')) // 1234
console.log(queries.get('q')) // neko
```

`url.search`で?以下を取得し、新たに`new URLSearchParams`でURLSearchParams オブジェクトを作成します。  
このURLSearchParams オブジェクトには多くの便利なメソッドがあります。

<adsense></adsense>

今回はgetを使用し、指定したパラメータ値を取得しました。  
他にはこんなこともできます。

```js
for (const [key, value] of queries.entries()) {
  console.log(key, value)
}
// "q",  "neko"
// "code",  "1234"
```

`entries`メソッドで、このオブジェクトに含まれるすべてのキーと値のペアを列挙するための イテレータ を返します。

### IEではPolyfill必須
そのままではIEで動きません。潔く、polyfillを導入します。

polyfill.ioというサイトがあります。  
まとめて使用するpolyfillを指定し、cdnを生成してくれるサービスです。  
[https://polyfill.io/v3/url-builder/]()

## 参考ドキュメント
[https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams]()
