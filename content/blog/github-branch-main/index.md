---
title: "なぜGithubブランチはmasterからmainに？"
date: 2020-12-13
hero: "../img/github.jpg"
tags: ["github"]
category: "tech"
---

今日のGitHubのデフォルトブランチは`main`になっています。  
なぜ、このようなことが起きたのでしょうか。

`master`が`main`になった背景とその切り替え方法を共有できたらと思います。

## ある事件が契機になっていた
調べていくとこの事件が見直しのきっかけになっていることがわかりました。

**米国ミネソタ州ミネアポリスで5月25日に発生した、警官が黒人男性を拘束し窒息死に至らしめた事件**  
です。

あの時はとても衝撃的でした。警官が黒人男性を拘束、窒息死に至らせた動画はSNSにアップされ、あっという間に広がりました。

GitHub CEOのナット・フリードマンさんはそのような事件を受け、master(主人)slave(奴隷)といった人種差別を想起させるものは好ましくないと考えていた様子です。  
以下、CEO本人の発表とその他デベロッパーたちの賛否両論の様子です。全ての人が賛成している感じではありませんね。  
[https://twitter.com/natfriedman/status/1271253144442253312](https://twitter.com/natfriedman/status/1271253144442253312)

結果、今日のdefault branchは`master`から`main`に変更されています。

今や社会問題である人種差別、一部のデベロッパーはこのブランチ名で不快に思われたかもしれません。  
私もこの情報を知った時、とても喜ばしい、と感じたのを思い出します。

## masterで作られている場合のmainブランチ設定方法
今までのプロジェクトはmasterブランチがデフォルトでした。  
ではどうすればmainブランチをデフォルトに設定できるのでしょうか？

以下の手順を踏むと変更できます。
```shell
# ローカルのmasterブランチをmainに改名する
git branch -m master main

# GitHubにmainブランチをpushする。
git push -u origin main

# Githubでmainブランチをデフォルトブランチに設定する
これはrepositoryのSettings -> Branchesで変更できます

# GitHubのmasterブランチを削除する。
git push origin :master
```

## これから作るプロジェクトはmainでpushしたい
ではこれから新規プロジェクトを作り、GitHubにinitial commitする時、自動でmainブランチを作成してくれるのでしょうか。答えはNoです。

この場合、gitにはmasterがデフォルトとして設定されていますから、mainに変更する必要があります。

```shell
git config --global init.defaultBranch main

# 確認はgit initしてcommitした後に以下のコマンドで
git branch --show-current
# => main
```

## 影響は受け続けるのか
社会問題がIT業界に与える影響は多少なりともあります。特に今回のGitHubはそうでしたね。

これからも同じように社会の情勢により右往左往していくと考えると、、、  
技術のみでなく、グローバルなニュースもいち早くキャッチできる様になった方がよいかな、と感じました。

英語、少しずつ勉強してみるかなぁ(翻訳は変な日本語になるのであまり使いたくありませんね)。
