---
title: 'Nuxt.jsの@nuxt/imageを使用してみた'
date: 2021-03-16
hero: '../images/nuxt.jpg'
tags: ['nuxtjs', 'vue']
category: 'tech'
---

Nuxt.jsに画像最適化機能がないかなぁと探していたところ、あったので使用してみました。

## セットアップ
```shell
# nuxtプロジェクトを作成
yarn create-nuxt-app [アプリ名]

# @nuxt/imageモジュールをインストール
yarn add -D @nuxt/image
```

`nuxt.config.js`に以下の記述をします。
```js
// ...省略
buildModules: [
  '@nuxt/image'
]
```

## 使用方法
