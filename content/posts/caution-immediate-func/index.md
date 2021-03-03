---
title: "セミコロンなしの即時関数ご利用はやめておけ"
date: 2021-01-24
hero: "../images/javascript.jpg"
tags: ["javascript"]
category: "tech"
---
さっそくですが、即時関数はご存知だと思います。  
グローバル汚染を防ぐために無名関数でくくり、関数スコープで完結させるテクです。

## 突然のエラー
ある時、即時関数を使用しているとエラーがでました。以下のようなコードです。
```js
const callName = function(name: string) {
  console.log(`hey ${name}`);
}

(function() {
   console.log("call immediate function");
})();
```

## 原因
セミコロンがないがために文が継続していると解釈されるため。つまり以下のコードになる。
```js
const callName = function(name: string) {
  console.log(`hey ${name}`);
}(function() {
   console.log("call immediate function");
})();
```

## 解決策
ちゃんとセミコロンをつけましょう。
```js
const callName = function(name: string) {
  console.log(`hey ${name}`);
}; // ここ

(function() {
   console.log("call immediate function");
})();
```
僕はセミコロンを書かないスタイルなので、もし即時関数を使用するならば以下のように使用します。
```js
const callName = function(name: string) {
  console.log(`hey ${name}`);
}

// 以下のように即時関数前にセミコロンを
;(function() {
   console.log("call immediate function");
})();
```
はっきり気持ち悪いですけど、そうそう即時関数を使用しないものなので...
