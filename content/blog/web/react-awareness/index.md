---
title: "Reactで見通しの良いコードを書くために"
date: 2021-02-23
hero: "../../images/react.jpg"
tags: ["react"]
category: "tech"
---
Reactで開発している際に、こうするとよりよくコードがまとめられるよ、という指摘を受けます。  
やはり見通しの良いコードは理解するのも早く、チーム内でもよい効果を生むのは間違いないようです。

この記事ではReactを書く上で意識すると良い点をまとめてみました。

参考になれば幸いです。

## 常に意識すること
**KISS(Keep It Simple, Stupid)**  
**簡潔に単純にしろ**

これはアメリカ合衆国の航空技術者、ケリー・ジョンソン氏が提唱した言葉です。

本当にその機能は必要なのか、常に考えます。  
また、この記述でチームが理解できるのか、もっと簡潔にまとめられないか、と自問しています。

もちろん、その思想にとらわれすぎて納期が守れないなんてことはあってはならないので、あくまで心掛けです。

## 本題
今回は4つ事例を取り上げつつ、説明します。

### Conditional rendering on either condition
条件付きレンダリングをする場合、&&で分けても表示されますが、三項演算子を使用するとより簡潔にかけます。

```tsx
const App = () => {
  const [isShow, setShow] = useState(false);
  const handleClick = () => {
    setShow((isShow) => !isShow);
  };
  return (
    <div className="App">
      <h1>isShow??</h1>
      {
        /* It's so tired....
        {isShow && <p>true!!</p>}
        {!isShow && <p>false</p>}
      */
      }
      {isShow ? (
        <p>true!!</p>
      ) : (
        <p>false</p>
      )}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
```

### Boolean props
boolean判定では、trueは明示せずとも問題ありません。

```tsx
interface Props {
  isHungry: boolean
}

const HungryMsg: FC<Props> = ({ isHungry }) => (
  <span>{isHungry ? 'I am hungry' : 'I am full'}</span>
)

const App = () => (
  <div>
    <span>
      <b>This person is hungry: </b>
    </span>
    {/*
    really need true??
    <HungryMsg isHungry={true} />
    */}
    <HungryMsg isHungry />
    <br />
    <span>
      <b>This person is full: </b>
    </span>
    <HungryMsg isHungry={false} />
  </div>
)

export default App
```

### Event handler functions
イベントオブジェクトのみの引数ならば、無名関数を記述する必要はありません。

```tsx
const App = () => {
  const [name, setName] = useState("");
  const handleInputName = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.target instanceof HTMLInputElement) {
      setName(event.target.value);
    }
  };

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        // really need write of anonymus function?
        // onInput={(event) => handleInputName(event)}
        onInput={handleInputName}
      />
      <p>{name}</p>
    </form>
  );
};

export default App;
```

### String props
単純な文字列のみの受け取りならば、{}で囲む必要はありません。
```tsx
interface Props {
  name: string
}

const DisplayName: FC<Props> = ({name}) => <p>{name}</p>

const App = () => {
  return (
    <div>
      {/* well... {} is needed??
      <DisplayName name={"dammy01"}/>
      <DisplayName name={"dammy02"}/>
      */}
      <DisplayName name="dammy01"/>
      <DisplayName name="dammy02"/>
    </div>
  );
};

export default App;
```

### まとめ
いかがでしょうか。

僕自身、指摘されて気づくことが多々あります。  
まずは一呼吸置いて客観的にコードをみるようにしていきたいと思います。