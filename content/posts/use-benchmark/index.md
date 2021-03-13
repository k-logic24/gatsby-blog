---
title: "Benchmark.jsを使用してパフォーマンスを検証する"
date: "2020-12-18"
hero: "../images/javascript.jpg"
category: "tech"
tags: ["javascript"]
---

JavaScriptを使用していると、実現したい方法がいく通りが存在します。  
少ない処理はあまり変わらないですが、多くのデータを使用するとなればパフォーマンスに大きく影響してきます。

そのパフォーマンスを確かめるためにBenchmark.jsを使用してみます。

[ドキュメントはこちらから。](https://benchmarkjs.com/)

## インストール
今回はディープコピーについて、３つの方法を比べてみましょう。

まずは必要パッケージをインストールします。
```shell
npm install benchmark lodash
```

## コード
nodeを使用して実行します。  
この例ではオブジェクト配列をコピーする前提です。

```javascript:title=index.js
const Benchmark = require('benchmark')
const clonedeep = require('lodash/cloneDeep')
const suite = new Benchmark.Suite

const samples = [
  {
    name: 'test',
    age: 26,
    gender: 'male'
  },
  {
    name: 'suite',
    age: 30,
    gender: 'female'
  },
]

suite
  .add('json', {
    fn: () => {
        const jsonDeep = JSON.parse(JSON.stringify(samples))
    }
  })
  .add('map', {
    fn: () => {
        const mapDeep = samples.map(sample => ({...sample}) )
    }
  })
  .add('lodash', {
    fn: () => {
        const loDeep = clonedeep(samples)
    }
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`)
  })
  .run({ async: true })
```

addメソッドでテストを追加します。  
cycleイベントで詳細を出力し、completeイベントでテストの最速を表示するようにしています。

では結果はどうなんでしょうか。
```shell
json x 339,283 ops/sec ±4.38% (83 runs sampled)
map x 15,391,325 ops/sec ±3.14% (79 runs sampled)
lodash x 532,430 ops/sec ±2.88% (78 runs sampled)
Fastest is map
```
mapを使用した方法が一番早いですね。  
といった具合に比較して結果を出力してくれます。

<adsense></adsense>

## P.S
単なるオブジェクトのコピーだったらmapは使用できません。  
lodashとJSONを使用した方法の比較を載せておきます。

```javascript:title=index.js
const obj = {
  name: 'Tom',
  male: 'male',
  family: {
    sister: 'Henry',
    father: 'Lee',
    mother: 'Mary'
  }
}

suite
  .add('json', {
      fn: () => {
          const jsonDeep = JSON.parse(JSON.stringify(samples))
      }
    })
    .add('lodash', {
      fn: () => {
          const loDeep = clonedeep(samples)
      }
    })
  ...
```

```shell
json x 332,315 ops/sec ±8.37% (78 runs sampled)
lodash x 673,675 ops/sec ±1.46% (88 runs sampled)
Fastest is lodash
```
lodashの勝利。
