import * as supertest from 'supertest'
import { app } from '../src/app'

describe('Express server /', () => {
  it('should response the GET method / ', async () => {
    const response = await supertest(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toEqual('{"message":"こんにちは！世界！"}')
  })
})
