---
title: "swrを使ってデータフェッチする"
date: 2021-03-14
hero: "../images/react.jpg"
tags: ["react", "typescript"]
category: "tech"
---

[SWR](https://swr.vercel.app/)
はNext.jsを作っているVercel社が開発しているデータフェッチのためのReact Hooksライブラリになります。  
SWRは**stale-while-revalidate**の略称です。

このSWRでは、**キャッシュを使用した非同期通信**が可能になります。

今回はSWRの基本的な使用方法を紹介します。  
興味が出てきた方はドキュメントを参考に深く潜っていくことをお勧めします。

## 検証
今回はdog-apiを使用してデータフェッチを行います。

### サンプルコード
以下、犬種ハウンドの画像を取得し、表示させるというコードになっています。
```tsx
import { FC } from "react";
import useSWR from "swr";

type Props = {
  message: string[];
  status: string;
};

const fetcher = (url: string): Promise<Props> =>
  fetch(url).then((data) => data.json());

const App: FC = () => {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breed/hound/images",
    fetcher
  );

  if (!data) return <p>loading...</p>;
  if (error) return <p>failed.</p>;

  return (
    <div className="App">
      <ul>
        {data?.message.map((src) => (
          <li key={src}>
            <img src={src}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

<adsense></adsense>

swrの基本構文は以下の通り。
```js:title=公式より拝借
const { data, error } = useSWR('/api/user', fetcher)
```
useSWRの第1引数には、キー（通常はAPI URL）が設定され`fetcher`に渡されます。  
第2引数には、データフェッチのための関数が入ります。

因みに、GETリクエストかつfetch APIを使うことが出来るのであれば、useSWR() の第2引数を省略することが出来ます。

### 通信状態のハンドリングが簡単になる
アプリケーションの状態としてデータ取得には以下の状態は必須です。
- データ取得中
- データ取得完了
- エラー発生

それらを`useSWR`を使用すれば簡単に再現できます。

`useSWR`を使用すると`data`と`error`が渡されます。  
今回でいうところの、以下の部分がデータハンドリングに相当します。
```tsx
const { data, error } = useSWR(
  "https://dog.ceo/api/breed/hound/images",
  fetcher
);

if (!data) return <p>loading...</p>;
if (error) return <p>failed.</p>;
```

swrはキャッシュがない、つまり初期通信の場合だと`undefined`が返ります。よって、その間はloading...と表示させることができます。
- data が undefined だと -> ロード中
- data が undefined 以外だと -> 通信終了

エラーが発生した場合はerrorオブジェクトを使用してfailed.を表示させています。

因みに、ローディング状態を表す`isLoading`はありません。

## オプション
この`useSWR`には第3引数にオプションを設定することができます。
下記のドキュメントを参考に設定してみてください。  
https://swr.vercel.app/docs/options

## 注意点
swrを使用する上で、注意点があります。

### React hooksの規約違反
hooksを使用するのはトップレベルと決まっていますので、以下のようには使用できません。
```js
if (shouldFetch) {
  useSWR('/api/data', fetcher)
}
```

### 条件付きフェッチでの設定
条件付きフェッチとは文字通り値によって、フェッチするかしないかを判断して処理する方法です。
```js:title=公式より拝借
// 条件分岐で
const { data } = useSWR(shouldFetch ? '/api/data' : null, fetcher)

// 関数を渡せる
const { data } = useSWR(() => shouldFetch ? '/api/data' : null, fetcher)

// エラーが発生しても検知ができない....
const { data } = useSWR(() => '/api/data?uid=' + user.id, fetcher)
```
第1引数にfalsyな値を持たせることで、fetcherの実行を停止させることができます。  
しかし最後の例のみ、`user.id`がなかったとしてもエラーを検知することができません。falsyだと判断できず、通常の動きになってしまいます。

なるべく、関数での使用は控えた方がいいかもしれません。

## その他
swrはデータフェッチのみでなく、[ページネーション](https://swr.vercel.app/docs/pagination) のような使用方法や、[データの無限スクロールの実装](https://swr.vercel.app/docs/pagination#infinite-loading) ができます。

## 最後に
swrの公式ドキュメントをみた時、できることの多さに驚きました。  
今回あげた例は一握りであり、現場で使用する時には多くの昨日やエラーに出逢います。

さまざまな記事が載っている中、最後に助けてくれるのはやはりドキュメントです。

みなさんのswrライフが快適になるように祈っています。

