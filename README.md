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

## テスト環境

```
$ npm i jest ts-jest supertest @types/jest @types/supertest
```

テストコード

```
./test/app.spec.ts
```