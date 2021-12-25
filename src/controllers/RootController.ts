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
    return 'こんにちは！世界！'
  }
}
