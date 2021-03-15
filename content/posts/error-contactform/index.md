---
title: "Contact Form 7 add confirmのボタンが切り替わらない現象について"
date: "2021-03-15"
hero: "../images/php.jpg"
tags: ["php", "wordpress"]
category: "tech"
---
WordPressでフォームを作成する時、Contact Form 7というプラグインがあります。

そのまま使用すると確認画面がありませんが、Contact Form 7 add confirmというプラグインを使用すると、確認画面を再現することが可能です。

ある時、前述した2つのプラグインを導入し、検証をしていたところ、確認画面への遷移ができなくなっていました。

一体何が起きているのか...

## 使用バージョン
```shell
Contact Form 7 - v5.4
Contact Form 7 - add confirm v5.1
```

## 原因
Contact Form 7のバージョンの問題でした。

現在の最新は3週間前にリリースしたv5.4です。

<adsense></adsense>

## 解決策
バージョンダウンをインストールし直しました。  
[こちらから開発バージョンを指定できます](https://ja.wordpress.org/plugins/contact-form-7/advanced)   
今回は5.3.2を選択しました。

無事、不具合が解消されました。

## 対応してくれるのかは未定
[公式のページをみてみると、正式にリリースされている](https://contactform7.com/ja/2021/02/06/contact-form-7-54-beta/)
のでissueを投げるしか方法はありません。

というか、Contact Form 7 add confirmの公式ページにこのように注意書きされていました。
> このプラグインは WordPress の最新3回のメジャーリリースに対してテストされていません。もうメンテナンスやサポートがされていないかもしれず、最新バージョンの WordPress で使用した場合は互換性の問題が発生する可能性があります。

原因ではフォーム自体が悪いみたいに記述してしまいましたが、こちらのアドオンがどうやら対応できていない様子でした。

確かに最終更新日は3年前。現在の最新のフォームに対して対応しているわけありません。

## 結論
Contact Form 7 add confirmを使用する時には自己責任で使用しましょう。
