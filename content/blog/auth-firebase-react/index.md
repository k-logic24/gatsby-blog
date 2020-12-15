---
title: 今更ながらのNext.js + TypeScript + Firebaseで認証機能を実装する
date: '2020-12-15'
hero: '../img/react-firebase.jpg'
category: 'tech'
tags: ['react', 'firebase']
---

Firebaseは、**Web アプリケーションのバックエンドサービス**です。  
画像のアップロード、ホスティング、認証機能など様々なサービスを簡単に導入できる素晴らしいサービスです。

フロントエンド実装だけで認証機能はできません。バックエンド処理が必要になってきます。  
サービスには認証機能は必須であり、避けて通れません。

そこで、波に乗っているNext.jsとTypeScriptを使用してFirebase authenticationを実装してみます。

[リポジトリを載せておきます](https://github.com/k-logic24/auth-firebase-react-template)

uiはtailwindcssを使用しています。

## 何を認証に使用するか
今回はEmail + PassWordの組み合わせで進めていきます。

## Firebaseにアプリ登録する
[Firebaseコンソール](https://console.firebase.google.com/) からプロジェクトを追加します。

追加して管理画面をみると、サイドバーにAuthenticationがありますので、そこをクリック。  
Sign-in method というタブがありますので、選び、メール/パスワードを有効にしてください。

そして、サイドバーの歯車からプロジェクト設定へと進みます。

全般タブ下にマイアプリがありますので、新規にアプリを追加してください。  
追加されるとSDK snippetが表示されます（のちに使用します）。

## フロント側の実装
冒頭で述べた通り、Next(React)+TSといった組み合わせです。

### SDK snippetを環境変数に格納する
`.env`を作成、ルートに置いてください。  
先ほどマイアプリで作成したSDK snippetがありました。それを環境変数に入れていきましょう。  
内容は以下の通りです。

```shell:title=.env
FIREBASE_KEY="xxxxxx"
FIREBASE_DOMAIN="xxxxxx"
FIREBASE_DATABASE="xxxxxx"
FIREBASE_PROJECT_ID="xxxxxx"
FIREBASE_STORAGE_BUCKET="xxxxxx"
FIREBASE_SENDER_ID="xxxxxx"
FIREBASE_APPID="xxxxxx"
```
各ページで使用できるように`next.config.js`に登録します。
```js:title=next.config.js
module.exports = {
  env: {
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
    FIREBASE_DATABASE: process.env.FIREBASE_DATABASE,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID,
    FIREBASE_APPID: process.env.FIREBASE_APPID
  }
}
```

### user情報を取得、各ページに渡す
次は認証情報を共有するためのProviderを作成します。

```ts:title=src/utils/firebase.ts
import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  databeseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
}
// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}
const auth = firebase.auth()
export { auth }
```
Firebaseアプリ情報をイニシャライズします。


```tsx:title=src/auth/AuthProvider.tsx
import { User } from 'firebase'
import { FC, createContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
```
useContextを使用し、children(各ページ)で使用できるようにします。  
authの`onAuthStateChanged`メソッドでuserの情報を取得し、ローカルステートの`currentUser`に格納します。

### 各ページ(login, signup, top)
```tsx:title=login.tsx
import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../utils/firebase'

const Login: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      router.push('/')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="wrapper">
      <form className="auth" onSubmit={logIn}>
        <div>
          <label htmlFor="email" className="auth-label">
            Email:{' '}
          </label>
          <input
            id="email"
            className="auth-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="auth-label">
            Password:{' '}
          </label>
          <input
            id="password"
            className="auth-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="auth-btn" type="submit">
          Login
        </button>
      </form>
      <Link href="/signup">
        <a className="auth-link">signup</a>
      </Link>
    </div>
  )
}

export default Login
```

```tsx:title=signup.tsx
import { FC, useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

import { auth } from '../utils/firebase'
import { AuthContext } from '../auth/AuthProvider'

const SignUp: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])

  const createUser = async (e) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      router.push('/login')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="wrapper">
      <form className="auth" onSubmit={createUser}>
        <div>
          <label htmlFor="email" className="auth-label">
            Email:{' '}
          </label>
          <input
            id="email"
            className="auth-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="auth-label">
            Password:{' '}
          </label>
          <input
            id="password"
            className="auth-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="auth-btn" type="submit">
          SignUp
        </button>
      </form>
      <Link href="/login">
        <a className="auth-link">Login</a>
      </Link>
    </div>
  )
}

export default SignUp
```

```tsx:title=index.tsx
import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { auth } from '../utils/firebase'

const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | object>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push('/login')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home
```

トップページで、user情報があるかチェックします。なければログインページへ遷移します。

ログイン、サインアップ共にフォームを入力し、照合します。  
`try{}catch{}`で成功・失敗したときの処理を記述しています。

## 感想
とても簡単にauth認証が実現できました。  
Firebase万歳。
