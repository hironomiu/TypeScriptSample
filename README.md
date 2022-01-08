# TypeScript Sample

TypeScript + Express + routing-controllers + mysql2

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

## Database

MySQL に DB を作成し`.env`に設定

users を作成

```
drop table users;
create table users(
    id int not null auto_increment,
    name varchar(20) not null,
    age int not null,
    created_at datetime default (current_timestamp),
    updated_at datetime default (current_timestamp),
    primary key(id)
);
```

ダミーデータ

```
insert into users(name,age) values('太郎',20);
```

## .env

`.env`には Express 起動 PORT`process.env.PORT`,CORS 許可オリジン`process.env.ALLOWED_ORIGINS`,DB 周りを設定

### Example

```
PORT=5050
ALLOWED_ORIGINS='http://localhost:3000 http://localhost:4000'
DB_HOST='127.0.0.1'
DB_USERNAME='root'
DB_PASSWORD='mysql'
DB_NAME='test'
DB_PORT=3306
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

## Validation Check

name が 20 文字以上のため validation erro(length)

```
curl -X POST -H  "Content-Type: application/json" -d '{"name":"123456789012345678901","age":20}' localhost:5050/api/v1/users
```

age が POST パラメータに存在しないため validation error(isNotEmpty,isInt)

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
