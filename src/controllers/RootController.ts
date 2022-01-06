import { JsonController, Get } from 'routing-controllers'

@JsonController('/')
export class RootController {
  @Get('/')
  getAll() {
    return { message: 'こんにちは！世界！' }
  }
}
