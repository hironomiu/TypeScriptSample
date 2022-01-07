import { JsonController, Get, Req } from 'routing-controllers'
import { Request } from 'express'
@JsonController('/')
export class RootController {
  @Get('/')
  getAll(@Req() request: Request) {
    console.log(request)
    return { message: 'こんにちは！世界！' }
  }
}
