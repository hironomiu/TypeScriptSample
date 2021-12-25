import * as Express from 'express'
import 'reflect-metadata'
import { useExpressServer } from 'routing-controllers'
// import { createExpressServer } from 'routing-controllers'
import { RootController } from './controllers/RootController'
import { UserController } from './controllers/UserController'

const app = Express()
// app.use(bodyParser.json());

// const app = createExpressServer({
//   controllers: [RootController, UserController],
// })

useExpressServer(app, {
  controllers: [RootController, UserController],
})

export { app }
