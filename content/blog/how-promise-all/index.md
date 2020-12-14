---
title: 'Promise.allによるストレスフリーUI実現'
description: 'Promise.allメソッドを使用したデータ反映遅延を解消していきます。'
date: 2020-12-06
hero: '../img/javascript.jpg'
tags: ['javascript']
category: 'tech'
---

仰々しく書きましたが、要するに「**API データ取得反映のレイテンシーを無くそう**」ということです。

実際にどういったことなのか、検証してみましょう。

json データを作成するために、以下のサイトを利用して作成しました。  
[JSON GENERATOR](https://www.json-generator.com/)

## 用意する環境

今回はコンポーネントの再利用と自身の馴染みのある React を使用して検証します。  
API データは`light.json`と`fat.json`を使用します(ネーミングセンス皆無)。  
だいたい light は 10, fat は 100000 データを用意してます。極端ですね。

さて、この異なるサイズのデータを取得してリストに反映してみましょう。

### 律儀にいく

とりあえず、`fetch`を利用してデータを取ってきてみましょうか。

```jsx:title=App.jsx
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [lightData, setLightData] = useState([])
  const [fatData, setFatData] = useState([])

  useEffect(() => {
    fetch('/light.json')
      .then(res => res.json())
      .then(data => {
        setLightData(data)
      })
    fetch('/fat.json')
      .then(res => res.json())
      .then(data => {
        setFatData(data)
      })
  }, [])

  return (
    <div className='container'>
      <h1>PromiseAll Test</h1>
      <section>
        <h2>LightData</h2>
        { lightData.length ? <List data={lightData}/> : <Loading />}
      </section>
      <section>
        <h2>FatData</h2>
        { fatData.length ? <List data={fatData}/> : <Loading /> }
      </section>
    </div>
  )
}

const List = ({data}) => {
  return (
    <ul className='list'>
      { data?.map(({ name, _id }) => <li key={_id}>{ name }</li>) }
    </ul>
  )
}

const Loading = () => (<p style={{ textAlign: 'center' }}><img src="/loading.gif" alt=""/></p>)

export default App
```

結果をみてみましょう。`yarn start`。
![](https://storage.googleapis.com/zenn-user-upload/vt41uupxby2dng3jjt4nqkzcqe0b)

反映はされていますが、どうやら取得のデータ量が違うので反映までに差が生まれてしまっています。  
リクエストに対しての応答、つまりレイテンシが大きくなってしまっているのが原因です。

ではどうすれば同時に綺麗に反映できるでしょうか。

### Promise.all 使ってみよう

ここで本題に入ります。

> Promise.all(iterable) メソッドは単一の Promise を返し、これは引数 iterable の中のすべての Promise が解決されるか、引数 iterable の中に Promise がない場合に解決されます。
>
> MDN web docs より [Promise.all()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```jsx:title=App.jsx
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  ...

  useEffect(() => {
    const resL = fetch('/light.json').then(res => res.json()).then(data => data)
    const resF = fetch('/fat.json').then(res => res.json()).then(data => data)
    Promise.all([resL, resF])
      .then(values => {
        setLightData(values[0])
        setFatData(values[1])
      })
  }, [])

  ...
}
```

![](https://storage.googleapis.com/zenn-user-upload/1ik32l1obmdhql0gh8lxbvjo49hj)
同じタイミングでデータを表示させることができました。👏

## 感想

複数データを扱う際は積極的に使用してもよいかなと感じました。

取得からの反映されるまで、感じる違和感があれば方法を考えて解決していくようにしていきたいです。

JavaScript にはデータを使用するために様々なメソッドがありますので、検討してみるのも良いかな、と感じました。
