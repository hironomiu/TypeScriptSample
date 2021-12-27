# TypeScript Sample

TypeScript + Express

```
npm install -D typescript @types/node ts-node
```

```
npm install express mysql2 routing-controllers cors
npm install -D @types/express types/mysql2# @types/cors
```

`.env`は`process.env.port`で利用

JEST

```
npm install -D jest ts-jest @types/jest supertest @types/supertest
```

Tasting

`--coverage`でカバレッジを取得

REST Client
`./client/client.http`内で CMD + ALT + R で実行

curl(cors OK)

```
curl -H "Origin: http://localhost:3000" --head http://localhost:5050
```

curl(cors NG)

```
curl -H "Origin: http://localhost:4000" --head http://localhost:5050
```

## 環境

nodejs、npm がインストールされてること

```
$ node -v
v12.14.1
$ npm -v
6.13.6
```

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
