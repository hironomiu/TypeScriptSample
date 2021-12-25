# TypeScript Sample

TypeScript + Express

```
npm install -D typescript @types/node ts-node
```

```
npm install express mysql2 routing-controllers
npm install -D @types/express types/mysql2#
```

JEST

```
npm install -D jest ts-jest @types/jest supertest @types/supertest
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
