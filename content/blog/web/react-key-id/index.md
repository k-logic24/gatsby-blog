---
title: "Reactのkeyにindexを入れたくない理由"
date: 2020-12-19
hero: "../../images/react.jpg"
tags: ["react"]
category: "tech"
---

Reactを使用していると、ループしてkeyを設定することが多々あります。

ところで、keyには何を指定していますか？index?  
簡単ですよね。

ですが、indexを指定すると罠にはまります。

## さっそくご覧いただこう
[https://jsbin.com/wohima/edit?js,output](https://jsbin.com/wohima/edit?js,output)

これはとても良い例です。  
やっていることはTodoリストみたいなもので、Add itemボタンを押すとアイテムが増える、という仕様です。

実際にやってみて気づくと思います。

**keyにidを指定すると、正確にアイテムが追加されます。が、indexだと前のアイテムのvalue値が上書きされてしまう。**

どうしてこのようなことが起きてしまったのでしょうか。

## ドキュメントに答えがある
> [https://ja.reactjs.org/docs/lists-and-keys.html](https://ja.reactjs.org/docs/lists-and-keys.html)
> React公式より

keyには要素の識別をするための情報を与えなければなりません。  
keyを指定しなければindexになります。

> コンポーネントのインスタンスは key に基づいて更新、再利用されます。インデックスが key の場合、要素の移動はインデックスの変更を伴います。結果として、非制御の入力などに対するコンポーネントの状態が混乱し、予期せぬ形で更新されてしまうことがあります。  
> React公式 [https://ja.reactjs.org/docs/reconciliation.html](https://ja.reactjs.org/docs/reconciliation.html)

つまり、keyにindexでは特定要素として判別するために不十分となります。

一方、id(被らない任意な文字列or数値)であれば、識別が可能です。

## まとめ
keyにはなるべく固有識別を与えてください。
