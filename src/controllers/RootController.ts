import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from 'routing-controllers'

@JsonController('/')
export class RootController {
  @Get('/')
  getAll() {
    return { message: 'こんにちは！世界！' }
  }
}
