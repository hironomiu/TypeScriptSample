import * as Express from 'express'
import * as cors from 'cors'
import 'reflect-metadata'
import { useExpressServer } from 'routing-controllers'
import { RootController } from './controllers/RootController'
import { ApiV1UserController } from './controllers/api/v1/UserController'
import * as dotenv from 'dotenv'

dotenv.config()
const app = Express()
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(' ') || [
  'http://localhost:3000',
]
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(options))
app.use(Express.json())

useExpressServer(app, {
  controllers: [RootController, ApiV1UserController],
  validation: true,
})

export { app }
