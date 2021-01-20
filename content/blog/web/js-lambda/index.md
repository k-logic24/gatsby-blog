---
title: "ラムダ式を理解する"
date: 2021-01-20
hero: "../../images/javascript.jpg"
tags: ["javascript"]
category: "tech"
---
ラムダ式は難しい印象を受けますが、そんなことありません。  
一緒にみていきましょう。

## ラムダ式とは
**無名関数を簡潔に書く方法**がラムダ式です。

## サンプルコード
ではどういったコードになるのでしょうか。

今回は、Todoリストで対象を削除するといった想定をします。  
idが2のものを削除します。

```js
const todos = [
  {
    id: 1,
    title: 'shopping',
  },
  {
    id: 2,
    title: 'study',
  },
  {
    id: 3,
    title: 'running',
  }
]

const targetId = 2
// 以下の処理に注目
const idx = todos.findIndex(function(todo) {
  return todo.id = targetId
})
todos.splice(idx, 1)
```

`findIndex`メソッドの部分を省略し、以下のように書けます。
```js
const idx = todos.findIndex(todo => todo.id === targetId)
```

これがラムダ式です。

### 呪文のように見えるけど
では順番を追ってみてみましょう。
```js
// ①これが原型
todos.findIndex(function(todo) {
  return todo.id = targetId
})
// ②アロー関数に変換
todos.findIndex((todo) => {
  return todo.id === targetId
})
// ③引数１つだと()は省略できる
todos.findIndex(todo => {
  return todo.id === targetId
})
// ④処理が１つ、かつreturnのみなので{}が省略できる
todos.findIndex(todo => todo.id === targetId)
```

といった流れです。  
条件さえ揃えば、簡単に、かつ簡潔に記述することができます。

## 感想
ちなみになんでもアロー関数にすると、thisの挙動に悩まされたりします。  
条件がそろった時にのみ簡略しましょう。
