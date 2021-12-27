import * as supertest from 'supertest'
import { app } from '../src/app'

describe('Express server /users', () => {
  it('should response the GET method /users ', async () => {
    const response = await supertest(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.text).toBe('[{"id":1,"name":"太郎","age":20}]')
  })

  it('should response the GET method /users/1', async () => {
    const response = await supertest(app).get('/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"id":1,"name":"太郎","age":20}')
  })

  it('should response the POST method /users ', async () => {
    const user = {
      category: 'Private',
      name: '太郎',
      done: false,
    }
    const response = await supertest(app).post('/users').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('"user added"')
  })

  it('should response the PUT method /users/1 ', async () => {
    const user = {
      category: 'Private',
      name: '花子',
      done: false,
    }
    const response = await supertest(app).put('/users/1').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('"user modifyed"')
  })

  it('should response the DELETE method /users/1', async () => {
    const response = await supertest(app).delete('/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe('"user deleted"')
  })
})
