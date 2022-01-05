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

[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)を利用するためエディタは[VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)を推奨

## SetUp

```
npm install
```

or

```
make setup
```

## .env

`.env`には Express 起動 PORT`process.env.PORT`,CORS 許可オリジン`process.env.ALLOWED_ORIGINS`を設定

### Example

```
PORT=5050
ALLOWED_ORIGINS='http://localhost:3000 http://localhost:4000'
```

## Serve

```
npm run serve
```

or

```
make serve
```

## watch & auto reload

```
npm run watch
```

## Build

```
npm run build
```

## Tasting

```
npm test
```

`--coverage`でカバレッジを取得

`./test`配下に記述

## REST Client

VSCode の拡張機能[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)を利用

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

## curl POST

validation error

```
curl -X POST -H  "Content-Type: application/json" -d '{"name":"John"}' localhost:5050/api/v1/users
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
npm install -D @types/express types/mysql2# @types/cors
```

### dotenv

```
npm install dotenv
```

### JEST

```
npm install -D jest ts-jest @types/jest supertest @types/supertest
```
