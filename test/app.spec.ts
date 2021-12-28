import * as supertest from 'supertest'
import { app } from '../src/app'

describe('Express server /users', () => {
  it('should response the GET method /users ', async () => {
    const response = await supertest(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","users":[{"id":1,"name":"太郎","age":20}]}'
    )
  })

  it('should response the GET method /users/1', async () => {
    const response = await supertest(app).get('/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","user":{"id":1,"name":"太郎","age":20}}'
    )
  })

  it('should response the POST method /users ', async () => {
    const user = {
      name: 'Mike',
      age: 33,
    }
    const response = await supertest(app).post('/users').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":2}')
  })

  it('should response the PUT method /users/1 ', async () => {
    const user = {
      id: 1,
      name: '花子',
      age: 25,
    }
    const response = await supertest(app).put('/users/1').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","user":{"id":1,"name":"花子","age":25}}'
    )
  })

  it('should response the DELETE method /users/1', async () => {
    const response = await supertest(app).delete('/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":1}')
  })
})
