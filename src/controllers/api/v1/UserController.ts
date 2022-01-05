import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from 'routing-controllers'

import { IsInt, MinLength, IsNotEmpty } from 'class-validator'

type User = { id: number; name: string; age: number }

let users: Array<User> = [
  {
    id: 1,
    name: '太郎',
    age: 20,
  },
]

class PostUser {
  @MinLength(1)
  @IsNotEmpty()
  name!: string

  @IsInt({ message: '数値項目です' })
  @IsNotEmpty({ message: '必須項目です' })
  age!: number
}

@JsonController('/api/v1/users')
export class ApiV1UserController {
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
  post(@Body() user: PostUser) {
    console.log(user.age)
    const id = Math.max(...users.map((user) => user.id)) + 1
    if (user.name && user.age) {
      users = [...users, { id: id, ...user }]
    }
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
