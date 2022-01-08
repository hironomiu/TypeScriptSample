import { JsonController, Get, Req } from 'routing-controllers'
import { Request } from 'express'
import promisePool from '../database'

@JsonController('/')
export class RootController {
  @Get('/')
  // requestは使用していないがリクエスト内容を都度確認するために一旦宣言し続ける
  async getAll(@Req() request: Request) {
    // 一旦mysql2の呼び出し確認のためここに記述(今後Usersを定義して移行する)
    const [rows, fields] = await promisePool.query('select 1 as num')
    if (rows) {
      console.log(rows)
    }
    return { message: 'こんにちは！世界！' }
  }
}
