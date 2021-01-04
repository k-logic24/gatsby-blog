---
title: "useRefの使い方を復習する"
date: 2021-01-04
hero: "../../images/react.jpg"
tags: ["react"]
category: "tech"
---

React hooksには便利な機能が多くありますが、その中でuseRefに焦点を当てて考えてみます。  

## 用途
- DOMの参照
- 値の保持

## 使用例
フォームに入力した値をdomに反映してみます。

### useRef使用時
```tsx
export default function App() {
  const [text, setText] = React.useState<string>("")
  const inputEl = React.useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`render`)

    if (inputEl.current) {
      setText(inputEl.current.value)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input id="name" type="text" ref={inputEl} />
        <input type="submit" value="送信" />
      </form>
      <p>Your text is {text}</p>
    </div>
  )
}
```
この場合では、`useRef`を使用したことでtextの変化時のみに再描画するようになっています。

### useState使用時
```tsx
export default function App() {
  const [inputElementValue, setInputElementValue] = React.useState("")
  const [text, setText] = React.useState<string>("")
  console.log(`render`)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setText(inputElementValue)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          onChange={(event) => setInputElementValue(event.target.value)} />
        <input type="submit" value="送信" />
      </form>
      <p>Your text is {text}</p>
    </div>
  )
}
```
この場合、text変更時、送信時に再描画が発生します。

### useRef使用の変数は再描画されない
```tsx
const App: React.FC = () => {
  let count: number = 0
  const countRef = React.useRef<number>(0)
  const [state, update] = React.useState<string>('state')
  console.log(countRef.current)

  const handleClick = () => {
    count++
    countRef.current++
    update(`${state}-update`)
  }

  return (
    <>
    <ul>
      <li>count1: {count}</li>
      <li>count2: {countRef.current}</li>
      <li>state: {state}</li>
    </ul>
    <button onClick={() => handleClick()}>ボタン</button>
    </>
  )
}

export default App
```
普通の変数、useRef使用の変数を用意しました。

ボタンを押すごとに、コンポーネントが再描画されます。
普通の変数では、再描画で初期値になるため0のままです。  
useRef使用変数だと、再描画されても値を保持するので望んだ挙動ができています。
