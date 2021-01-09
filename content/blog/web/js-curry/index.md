---
title: "JavaScriptにおけるカリー化とは"
date: 2021-01-09
hero: "../../images/javascript.jpg"
tags: ["javascript"]
category: "tech"
---

## カリー...化?
カリー化とは、
>カリー化 (currying, カリー化された=curried) とは、複数の引数をとる関数を、引数が「もとの関数の最初の引数」で戻り値が「もとの関数の残りの引数を取り結果を返す関数」であるような関数にすること（あるいはその関数のこと）である。

とのこと。うん、よくわからない。

なので、実際にサンプルコードに書き写してみました。

## サンプルコード
このようなデータがあると仮定します。  
この中の、students配列からクラスごとの生徒のオブジェクトを取り出したいと思います。
```js
const sampleData = {
    students: [
        {
            class: "A",
            name: "Bob"
        },
        {
            class: "A",
            name: "Sarah"
        },
        {
            class: "C",
            name: "John"
        },
        {
            class: "B",
            name: "Smith"
        },
    ],
    teachers: [
        {
            class: "A",
            name: "hoge"
        }
    ]
}
```

### カリー化を使わない場合。
```js
const getInfoOfClass = (key, classId) =>
    sampleData[key].filter(data => data.class === classId)

const studentsInfoOfClassA = getInfoOfClass('students', 'A')
const studentsInfoOfClassB = getInfoOfClass('students', 'B')
const studentsInfoOfClassC = getInfoOfClass('students', 'C')
```
一見、良いと思います。  
が、`getInfoOfClass`関数のkey部分がstudentsと決まっているので、いちいち指定してしまっています。

同じことを繰り返すと、タイポミスしてバグを引き起こす可能性が高いですね。というか、いちいちstudentsを書くのも手間ですね。

### カリー化を使う場合。
```js
const getInfoOfClass = (key: string) => (classId: string) => sampleData[key].filter(data => data.class === classId)
const data = getInfoOfClass('students')
const studentsInfoOfClassA = data('A')
const studentsInfoOfClassB = data('B')
const studentsInfoOfClassC = data('C')
```
関数が複雑になりました。とはいえ、成り立ちは簡単です。

1. getInfoOfClassにkeyのstudentsを渡す。
2. その引数をとりうる関数が返ってくる。
3. その関数の引数にclassを与えて結果を返す。

変数`data`でstudentsを固定しています。あとはそれぞれクラスを指定してあげるだけで結果が取得できます。 
これは**部分適用**といい、**一部の引数を固定化して新しい関数を作り出す**ことをいいます。

## 感想
関数型プログラミングに興味が出て、調べていくうちに初めに当たった壁でした。  
仕組みを知ることでより理解が深まりました。

もっとも、カリー化の有効的な使用方法はこれから模索する必要がありますね。
