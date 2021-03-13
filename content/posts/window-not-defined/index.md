---
title: 'Next.jsで"Window is not defined"を解決する'
date: 2021-03-01
hero: '../images/nextjs.jpg'
tags: ['nextjs']
category: 'tech'
---
Next.jsでライブラリを使用しているときに以下のエラーが出ました。

**window is not defined**

これは一体なんなのでしょうか。

## 原因
SSRが原因です。Next.jsのサーバーサイド処理ではwindowオブジェクトがありません。クライアントサイドでないと、windowは使用できない、と結論づけられます。

## 対処
**Dynamic Import**を使用しましょう。動的にモジュールを読み込む手法です。

Next.jsでは`dynamic`といったモジュールがあり、コンポーネントを動的にインポートできます。

使用方法は以下の通りです。

```tsx
import React from 'react'
import dynamic from 'next/dynamic'

const ClientDependComponent = dynamic(() => {
  import('client-depend-module'), { ssr: false }
})

export default App() {
  return (
    <ClientDependComponent/>
  )
}
```

`{ssr: false}`で、サーバーサイドレンダリングをしないように指定します。

<adsense></adsense>

## このエラーで学んだこと
まず、ライブラリがクライアントサイドに依存しているのか見極めることが必要です。そしてよくエラー文をみることです。  
もちろん、エラー文をコピぺしてググるのも大切です。その際はgithubのissueを参考にすると勉強になります。  
英語は、気合いでどうにかなります。

これはNext.jsに限らずNuxt.jsやその他、SSRを使用するフレームワークでは起こりうるエラーなので、対応できるようにしておきたいですね。
