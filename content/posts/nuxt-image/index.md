---
title: 'Nuxt.jsの@nuxt/imageを使用してみた'
date: 2021-03-16
hero: '../images/nuxt.jpg'
tags: ['nuxtjs', 'js']
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

## 特徴
- ローカル・リモートの画像最適化
- srcのurlを最適化
- widthとheightに基づいた自動リサイズ
- IntersectionObserverを使用したSafariを含む幅広いブラウザのloading = "lazy"をサポート
- サイズオプションによるレスポンシブの生成

## プロパティ
### src
画像までのパスを指定します。staticディレクトリまでの絶対パスが基本になります。  
後述するプロバイダーで指定したパスでも可能です。
```js
<nuxt-img src="/nuxt.png"/>
```
もし外部ファイルを使用するならば[domains](https://image.nuxtjs.org/api/options/#domains) オプションを指定する必要があります。

### width / height
widthとheightを指定できます。アバターなどのアイコンの幅指定で役に立ちます。
```js
<nuxt-img
    src="/nuxt.png"
    width="50"
    height="50"
/>
```

### sizes
レスポンシブ対応のサイズ指定ができます。
```js
<nuxt-img
    src="/nuxt.png"
    sizes="sm:100vw md:50vw lg:400px"
/>
```

### provider
デフォルトのプロバイダー(初期はstatic)の代わりに、他のプロバイダーを定義し使用できます。  
[provider option](https://image.nuxtjs.org/api/options/#provider)
```js:title=index.js
<nuxt-img
    provider="cloudinary"
    src="/remote/nuxt-org/blog/going-full-static/main.png"
    width="250px"
/>
```

```js:title=nuxt.config.js
export default {
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/nuxt/image/upload/",
        },
    },
}
```

<adsense></adsense>

### preset
事前に使用する画像のセットを定義できます。  
今回使用しても反映されなかった(wipだし、まだまだ不具合はありそう)。

[presets](https://image.nuxtjs.org/api/options/#presets)

```js:title=nuxt.config.js
export default {
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    },
  },
}
```

 ```js:title=index.js
<nuxt-img preset="avatar" src="/nuxt.png" />
```

### format
画像形式を指定できます。  
webp, jpeg, jpg, png, gif and svgが該当します。

```js
<nuxt-img format="webp" src="/nuxt.png" />
```

もし指定されない場合は元の画像形式が適応されます。

### quality
画像の質を設定できます。
```js
<nuxt-img quality="80" src="/nuxt.png" />
```

### fit
画像の収まりを定義できます。cssでいう`object-fit`。
デフォルトはcoverです。

[fit option](https://image.nuxtjs.org/components/nuxt-img#fit)

### modifiers
プロバイダーに独自の修飾子を付与できます。  
正直どういった使い方になるかはわかりません。

[modifiers](https://image.nuxtjs.org/components/nuxt-img#modifiers)

## 便利そうだけど
使用するにはまだ早そうです。
まだ改良の余地があり、githubでもissueがでているので、今後の動向に期待しましょう。

とはいえ、画像の状態をプロパティ一つで設定できるのは手軽でいいですね。
