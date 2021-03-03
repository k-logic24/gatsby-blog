---
title: "TypeScriptのUtilityを解剖してみる"
date: "2020-12-17"
hero: "../images/typescript.jpg"
category: "tech"
tags: ["typescript"]
---
TypeScriptにおけるUtilityとは、  
コード内で型変換を容易にする為にTypeScriptが提供する型  
です。

実際、簡単に定義でき使いやすく便利なのですが、一体内部ではどのように変換されて生成しているのかが気になります。

今回は、その中の型変換がどのようになされるのか、解剖していきます。  
常時、更新します。。

とりあえずよく使ってるものからみていきます。

## Partial
`Partial<T>`  
省略プロパティを生成する型です。
```typescript
interface Person {
    firstName: string
    lastName: string
    age: number
}
type Partial<T> = { [P in keyof T]?: T[P] }
type OptionalPerson = Partial<Person>

// result
// type OptionalPerson = {
//   firstName?: string | undefined;
//   lastName?: string | undefined;
//   age?: number | undefined;
// }
```
## Required
`Required<T>`  
省略を取り除く型です。
```typescript
interface Person {
    firstName?: string
    lastName?: string
    age?: number
}
type Required<T> = { [P in keyof T]-?: T[P] }
type OptionalPerson = Required<Person>

// result
// type OptionalPerson = {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
```
## Record
`Record<K, T>`  
Kのプロパティを持つTの型を作成できます。
```typescript
type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Todo = {
    todo: string
    completed: boolean
}
type Record<K extends string | number | symbol, T> = { [P in K]: T }
type DayTodoProps = Records<Day, Todo>

// result
// type DayTodoProps = {
//   Mon: Todo;
//   Tue: Todo;
//   Wed: Todo;
//   Thu: Todo;
//   Fri: Todo;
// }
```
## Pick
`Pick<T, K>`  
Kに指定したプロパティを持ってきて、新しい型を生成します。
```typescript
interface Values {
    a: string
    b: number
    c: boolean
}
type Pick<T, K extends keyof T> = { [ P in K ]: T[P] }
type PickValues = Pick<Values, 'a'|'c'>

// result
// type PickValues = {
//   a: string;
//   c: boolean;
// }
```
## Omit
`Omit<T, K>`
Pickとは逆の動きです。  
`Kのプロパティを除く、新しい型を生成`します。
```typescript
interface Values {
    a: string
    b: number
    c: boolean
}
type Omits<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
type PickValues = Omits<Values, 'a'|'c'>

// result
// type PickValues = {
//   b: number;
// }
```
## Exclude
`Exclude<T, U>`  
TとUは文字列リテラル Union 型で、Tにしかない文字列リテラル (Union) 型を返します。
```typescript
interface Values {
    a: string
    b: number
    c: boolean
}
type Exclude<T, U> = T extends U ? never : T
type ExcludesValues = Exclude<keyof Values, 'a'> 

// result
// type ExcludesValues = "b" | "c"
```
## Extract
`Extract<T>`
先ほどのExcludeとは逆の動きです。  
TとUにある文字列リテラルを返します。
```typescript
interface Values {
    a: string
    b: number
    c: boolean
}
type Extract<T, U> = T extends U ? T : never
type ExtractValues = Extract<keyof Values, 'a'> 

// result
// type ExtractValues = "a"
```
## NonNullable
`NonNullable<T>`  
nullやundefinedを取り除いてくれます。
```typescript
type NonNullables<T> = T extends null | undefined ? never : T
type Result = NonNullables<'iwt' | 10 | true | null | undefined>

// result
// type Result = true | "iwt" | 10
```

## 感想
使うのならば、中身を知っていた方がより知見が広まると感じました。
