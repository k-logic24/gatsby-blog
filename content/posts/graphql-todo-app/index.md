---
title: "GraphQLとReactでTODOアプリを作成する。"
date: "2020-12-18"
hero: "../images/graphql.jpg"
category: "tech"
tags: ["graphql", "javascript", "react"]
---

GraphQLを使用したTODOアプリの作成をしてみます。  
なお、私も初心者ですので、今後深堀していく予定です。

先にソースコードを載せておきます。
[graphql-todo-app](https://github.com/k-logic24/graphql-todo-app)

今回使用するパッケージバージョンは以下の通りです。
```json:title=package.json
"@apollo/client": "^3.2.7",
"@apollo/react-hooks": "^4.0.0",
"apollo-server": "^2.19.0",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
"uuid": "^8.3.1"
```

また、cssフレームワークのtailwindのcdnを使用しています。

## Reactアプリを作成
今回はReactを使用して実装していきます。  
フロント部分はReact、バックエンドはGraphQLServerといった形です。
```shell
npx create-react-app graphql-todo-app
```

## スキーマを定義
GraphQLを使用するにあたり、スキーマを定義する必要があります。APIの仕様ですね。

また、クエリに対するリゾルバも定義します。
```js:title=src/server/index.js
const { ApolloServer, gql, UserInputError } = require('apollo-server')
const { v4: uuidv4 } = require('uuid')

let filter = 'ALL'
const todos = [
  { id: '8rjijr9j9-9', text: 'shopping', completed: false }
]
const typeDefs = gql`
  enum FILTER {
    ALL
    COMPLETED
    ACTIVE
  }
  
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }
  
  type Query {
    allTodos: [Todo!]!
  }
  
  type Mutation {
    addTodo(text: String!): Todo!
    toggleCompleted(id: ID!): Todo!
    setFilter(filter: FILTER!): FILTER!
  }
`

const resolvers = {
  Query: {
    allTodos: () => {
      if (filter === 'ALL') {
        return todos
      }
      return todos.filter(todo => filter === 'COMPLETED' ? todo.completed : !todo.completed)
    }
  },
  Mutation: {
    addTodo: (root, args) => {
      const todo = { ...args, id: uuidv4(), completed: false }
      todos.push(todo)
      return todo
    },
    toggleCompleted: (root, args) => {
      const todo = todos.find(todo => todo.id === args.id)
      if (!todo) {
        throw new UserInputError('id not found', {
          invalidArgs: args.id,
        })
      }

      todo.completed = !todo.completed
      todos.map(t => t.id === todo.id ? todo : t)
      return todo
    },
    setFilter: (root, args) => {
      return filter = args.filter
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`server ready is ${url}`)
})
```
これでnodeで起動させると`localhost:4000`が立ち上がります。デフォルトが4000番なので、変更も可能です。
```js:title=src/server/index.js
server.listen({ port:8080 })...
```

<adsense></adsense>

## フロント実装
フロント側はReactで実装していきます。  
Apollo Clientを使用し、GraphQL APIをシンプルにクライアント側で操作できるようにしていきます。
```js:title=src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```
apiエンドポイントを指定、クエリの結果のオブジェクトをキャッシュするために`InMemoryCache`を指定します。
```jsx:title=src/App.jsx
import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/react-hooks'
import Form from "./components/Form";
import List from "./components/List";
import DisplayBtn from "./components/DisplayBtn";

export const ALL_TODOS = gql`
  query {
    allTodos {
      id
      text
      completed
    }
  }
`
const ADD_TODOS = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`
const SET_FILTER = gql`
  mutation setFilter($filter: FILTER!) {
    setFilter(filter: $filter)
  }
`

const App = () => {
  const { loading, data } = useQuery(ALL_TODOS)
  const [addTodo] = useMutation(ADD_TODOS, {
    refetchQueries: [{ query: ALL_TODOS }]
  })
  const [setFilter] = useMutation(SET_FILTER, {
    refetchQueries: [{ query: ALL_TODOS }]
  })

  return (
    <>
      <header className='py-2 px-4 bg-purple-400'>
        <h1 className='text-white text-2xl'>React-todo with GraphQL</h1>
      </header>
      <main className="flex flex-col items-center my-12">
        <Form addTodo={addTodo} />
        <div className="py-12">
          <List {...{ loading, data }} />
        </div>
        <div className="flex gap-4">
          <DisplayBtn setFilter={setFilter}/>
        </div>
      </main>
    </>
  );
};

export default App
```
hooksでApolloClientを使用するために、`@apollo/react-hooks`が必要です。

`useQuery`で発行したクエリからデータとローディング状態を受け取っています。  
状態更新のためのmutationを`useMutation`にて定義しています。`refetchQueries`は更新された値をviewに再描画するために`ALL_TODO`クエリを設定しています。

ではコンポーネントをみていきます。  
細かい説明は省きます。
```jsx:title=src/components/Form.jsx
import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo({
      variables: { text }
    })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='px-2 border border-gray-400 rounded'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className='px-2 ml-4 border border-gray-400 rounded'>ADD</button>
    </form>
  );
};

export default Form
```

```jsx:title=src/components/List.jsx
import React from 'react';
import { useApolloClient, gql } from '@apollo/react-hooks'
import {ALL_TODOS} from "../App";
const TOGGLE_COMPLETED = gql`
  mutation toggleCompleted($id: ID!) {
    toggleCompleted(id: $id) {
      id
      text
      completed
    }
  }
`

const List = ({ data, loading }) => {
  const client = useApolloClient()

  if (loading) {
    return <div className='font-bold text-lg'>Loading...</div>
  }

  const toggleCompleted = (id) => {
    client.mutate({
      mutation: TOGGLE_COMPLETED,
      variables: { id },
      refetchQueries: [{ query: ALL_TODOS }]
    })
  }

  return (
    <ul>
      {data && data.allTodos.map(({id, text, completed}) => (
        <li
          className='mb-4'
          key={id}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
          {text}
          <button
            type='button'
            className='px-2 ml-4 border border-gray-400 rounded'
            onClick={() => toggleCompleted(id)}
          >
            DONE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List
```

```jsx:title=src/components/DisplayBtn.jsx
import React from 'react';

const DisplayBtn = ({ setFilter }) => {
  return (
    <>
      <button
        className="px-2 border rounded"
        type="button"
        onClick={() => setFilter({ variables: { filter: 'ALL' }})}
      >SHOW_ALL</button>
      <button
        className="px-2 border rounded"
        type="button"
        onClick={() => setFilter({ variables: { filter: 'COMPLETED' }})}
      >
        SHOW_COMPLETED
      </button>
      <button
        className="px-2 border rounded"
        type="button"
        onClick={() => setFilter({ variables: { filter: 'ACTIVE' }})}
      >
        SHOW_ACTIVE
      </button>
    </>
  );
};

export default DisplayBtn
```
Mutation関数にvariablesを設定し、スキーマのmutationに応じた処理をします。スキーマ側にはargs引数として渡されています。

## 感想
初めてのGraphQL、入門にはいい勉強になりました。
