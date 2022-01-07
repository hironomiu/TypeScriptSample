import * as supertest from 'supertest'
import { app } from '../src/app'

describe('Express server /', () => {
  it('should response the GET method / ', async () => {
    const response = await supertest(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toEqual('{"message":"こんにちは！世界！"}')
  })
})

describe('Express server / CORS check', () => {
  it('should response the GET method / cors OK', async () => {
    const response = await supertest(app)
      .get('/')
      .set('Origin', 'http://localhost:4000')
    expect(response.status).toBe(200)
    expect(response.text).toEqual('{"message":"こんにちは！世界！"}')
    expect(response.headers['access-control-allow-origin']).toEqual(
      'http://localhost:4000'
    )
  })

  // access-control-allow-originが取れていないのでcorsの設定は効いてるが、response.textが取れている理由については調べる
  it('should response the GET method / cors NG', async () => {
    const response = await supertest(app)
      .get('/')
      .set('Origin', 'http://localhost:6000')
    expect(response.status).toBe(200)
    expect(response.text).toEqual('{"message":"こんにちは！世界！"}')
    expect(response.headers['access-control-allow-origin']).toEqual(undefined)
    // console.log(response.headers)
  })
})
