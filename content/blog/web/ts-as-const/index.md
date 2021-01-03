---
title: "TypeScriptのconstアサーションの意義を考える"
date: 2020-12-29
hero: "../../images/typescript.jpg"
tags: ["typescript", "javascript"]
category: "tech"
---

TypeScript3.4から実装されている**constアサーション**。  
なぜconstアサーションが必要になってくるのでしょうか。

## constの特徴から考える
constは言わずもがな、**再代入、再宣言不可**です。
```js
const a = 'hoge'
// Cannot assign to 'a' because it is a constant.
a = 'hogehoge'
```

ではこれはどうでしょう。
```js
const obj = {
  a: 'hoge',
  b: 'hage',
}

// 変数の中身を書き換えている
obj.a = 'hogehoge'
console.log(obj) // { a: 'hogehoge', b: 'hage' }
```
このように平気でプロパティの中身を改ざんできます。再代入でも再宣言でもありません。

### Object.freeze使ったらいいのでは？
```js
const obj = Object.freeze({
  a: 'hoge',
  b: 'hage',
})

// Cannot assign to 'a' because it is a read-only property.
obj.a = 'hogehoge'
```
確かに書き換えを防ぐことができます。  
しかし、あくまでシャローなのでディープだと、
```js
const obj = Object.freeze({
  a: 'hoge',
  b: 'hage',
  c: {
    d: 'nyancat'
  }
})

obj.c.d = 'hogehoge'
console.log(obj)
// {
//   "a": "hoge",
//   "b": "hage",
//   "c": {
//   "d": "hogehoge"
//   }
// } 
```
余裕で書き変わります。  
deep-freezeライブラリがあるそうですが、パフォーマンスにも影響がでるそうであまり使用したくはないですね。

## そこでconstアサーション
constアサーションを使用すると以下のようになります。
```ts
const obj = {
  a: 'hoge',
  b: 'hage',
  c: {
    d: 'nyancat'
  }
} as const

// Cannot assign to 'd' because it is a read-only property.
obj.c.d = 'hogehoge'
```
read-onlyとなり、読み取り専用になります。よって書き込みはできません。

## 感想
constは万能ではなく、特性を理解しないと痛い目にあいます。
そこを補うように、TypeScriptは定数をより堅牢にしてくれます。

なるべくconstアサーションを使用していきたいですね。
