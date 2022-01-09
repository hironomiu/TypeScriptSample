import { JsonController, Get } from 'routing-controllers'

type Task = { id: number; user_id: number; title: string; task: string }

let tasks: Array<Task> = [
  {
    id: 1,
    user_id: 1,
    title: 'task 1',
    task: 'task',
  },
]

@JsonController('/api/v1/tasks')
export class ApiV1TaskController {
  @Get('/')
  getAll() {
    return { message: 'success', tasks }
  }
}
