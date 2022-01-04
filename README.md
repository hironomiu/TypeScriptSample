# TypeScript Sample

TypeScript + Express + routing-controllers

## 動作環境

Node.js、npm がインストールされてること

```
$ node -v
v16.2.0
$ npm -v
7.19.1
```

## Install Memo

### TypeScript

```
npm install -D typescript @types/node ts-node
```

### App

[routing-controllers Installation](https://github.com/typestack/routing-controllers) を参照

```
npm install express mysql2 routing-controllers cors
npm install class-transformer class-validator
npm install -D @types/express types/mysql2# @types/cors
```

### dotenv

```
npm install dotenv
```

`.env`は`process.env.PORT`,`process.env.ALLOWED_ORIGINS`で利用(以下例)

```
PORT=5050
ALLOWED_ORIGINS='http://localhost:3000 http://localhost:4000'
```

### JEST

```
npm install -D jest ts-jest @types/jest supertest @types/supertest
```

## Tasting

`--coverage`でカバレッジを取得

`./test`配下に記述

## REST Client

VSCode の[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)を利用

利用方法は`./client`配下内の各ファイルで CMD + ALT + R で実行

## CORS

curl での CORS の確認 OK(Access-Control-Allow-Origin が返る)

```
curl -H "Origin: http://localhost:3000" --head http://localhost:5050
```

curl での CORS の確認 NG(Access-Control-Allow-Origin が返らない)

```
curl -H "Origin: http://localhost:4000" --head http://localhost:5050
```

---

開発は[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)などを利用するため[VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)を使用

## set up

アプリケーションフレームワークは[Express](https://expressjs.com/)を利用  
DB(MySQL)は[mysql2](https://github.com/types/mysql2)を利用  
コントローラルーティングは[routing-controllers](https://github.com/typestack/routing-controllers)を利用

```
$ make setup
```

## サーバ

start

```
$ make server
```

watch & auto reload

```
$ npm run watch
```

## ビルド

```
$ npm run build
```

## リクエスト

`client/`は VSCode の[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)のリクエストファイル用のディレクトリ

## テスト環境

```
$ npm i jest ts-jest supertest @types/jest @types/supertest
```

テストコード

```
./test/app.spec.ts
```
