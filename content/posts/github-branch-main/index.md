---
title: "GitHubのmasterをmainに変える方法"
date: 2020-12-13
hero: "../images/github.jpg"
tags: ["github"]
category: "tech"
---
今までのプロジェクトはmasterブランチがデフォルトでした。  
どうすればmainブランチをデフォルトに設定できるのでしょうか？

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

## 新規プロジェクトはmainブランチで作成する
新規プロジェクトを作り、GitHubにinitial commitする時、自動でmainブランチを作成してくれるのでしょうか。答えはNoです。

この場合、gitにはmasterがデフォルトとして設定されていますから、mainに変更する必要があります。

```shell
git config --global init.defaultBranch main

# 確認はgit initしてcommitした後に以下のコマンドで
git branch --show-current
# => main
```
