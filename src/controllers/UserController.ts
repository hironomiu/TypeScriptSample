import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from 'routing-controllers'

type User = { id: number; name: string; age: number }

const users = [
  {
    id: 1,
    name: '太郎',
    age: 20,
  },
]

@JsonController('/users')
export class UserController {
  @Get('/')
  getAll() {
    return users
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return users[id]
  }

  @Post('/')
  post(@Body() user: User) {
    users.push(user)
    return 'user added'
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: User) {
    users[id] = user
    return 'ok'
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    users.splice(id, 1)
    return 'ok'
  }
}
