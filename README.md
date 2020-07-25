# TypeScript Sample

## 環境

```
$ node -v
v12.14.1
$ npm -v
6.13.6
```

[VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

## set up

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
`client/`はVSCodeの[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)のリクエストファイル用のディレクトリ

## テスト環境

```
$ npm i jest ts-jest supertest @types/jest @types/supertest
```

テストコード

```
./test/app.spec.ts
```