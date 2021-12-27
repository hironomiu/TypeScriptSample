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

let users: Array<User> = [
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
    return { message: 'success', users }
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    const index = users.findIndex((user) => user.id === id)
    return { message: 'success', user: users[index] }
  }

  @Post('/')
  post(@Body() user: User) {
    users = [...users, user]
    const id = users.findIndex((data) => (data.name = user.name))
    return { message: 'success', id: id }
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: User) {
    const newUsers: Array<User> = users.filter((user) => user.id !== id)
    users = [...newUsers, user]
    return { message: 'success', user: user }
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    const newUsers: Array<User> = users.filter((user) => user.id !== id)
    users = [...newUsers]
    return { message: 'success', id: id }
  }
}
