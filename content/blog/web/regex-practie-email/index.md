---
title: "正規表現をがんばるお(email編)"
date: "2021-01-11"
hero: "../../images/javascript.jpg"
category: "tech"
tags: ["javascript", "regex"]
---
下記のメールアドレスに一致させます。
```shell
test1234@gmail.com
sample_01@ezweb.ne.jp
nekomanma-dog_cat@i.softbank.jp
A@test.co.jp
```

下記のような正規表現にする。
```js
const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/gm
```

1. 先頭は`A-Z or a-z or 0-9`にマッチする。  
2. 以降@までは`A-Z or a-z or 0-9 or _ or . or -`にマッチする。0もしくはそれ以上の繰り返しにマッチするため`*`を。  
3. @から初めは`A-Z or a-z or 0-9 or _ or . or -`が1回以上続く。  
4. . 以降は`A-Z or a-z or 0-9`が1回以上。

一つずつ読み解いていくと割と簡単なことがわかります。
