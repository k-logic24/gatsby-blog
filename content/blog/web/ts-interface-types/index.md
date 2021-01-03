---
title: '今更ながらのTypeとInterfaceの違い'
date: '2020-12-03'
hero: '../../images/typescript.jpg'
category: 'tech'
tags: ['typescript']
---

TypeScript を使用することが多くなってきている世の中ですが、ふと思ったことがあります。

「型定義、Type と Interface ってどっち使えばええんや...」

ということで検証してみました。

## 概略

Type(正確には Type Aliases)の定義は以下

> 複数の場所で再利用しようと思っている型に対して 名前をつける

Interface の定義は以下

> オブジェクトや関数、クラスの 仕様を定める

## 検証

### 定義の幅

interface は**オブジェクトと関数の型宣言のみしか使えない**  
type は**オブジェクト、関数以外の型宣言も可能**

概略に示した特徴が出てますね。

### マージについて

```typescript
type BaseProps = {
  x: number
  y: number
}

type BaseProps = {
  z: number
}
// Error!

interface IBaseProps {
  x: number
  y: number
}

interface IBaseProps {
  z: number
}
// Merged!!

const obj: IBaseProps = {
  x: 10,
  y: 100,
}
// Error!
```

type はマージされません。  
interface はマージされます。同じプロパティであれば上書きされます。

### MappedTypes

```typescript
type Fruits = 'banana' | 'apple' | 'berry'

type FruitPrice = {
  [key in Fruits]: number
}
// OK

interface FruitPrice {
  [key in Fruits]: number
}
// Error!
```

interface は MappedTypes は使用できないようです。

## 交差型

```typescript
type Point = {
  x: number
  y: number
}
type SolidPoint = Point & {
  y: string | number
  z: number
}

const obj: SolidPoint = {
  x: 10,
  y: 20,
  z: 30,
}
```

`&`を使用すれば型の制約を増やせます。同じプロパティであれば両方を満たす必要があります。  
ちなみに`interface`を type に交差させても問題ありません。

## 逆に共通点

- class への implements ができる
- index シグネチャが使用可能`[key: string]`

## 結論

ケースによるのかなと感じました。  
アプリ制作であったり、web サイトの作成といった規模によっては、使い分けする必要がありますね。

型の規格を広く定義するときには`interface`、再利用等よく使用するものには`type`っていう認識であってるのかなぁ。。
