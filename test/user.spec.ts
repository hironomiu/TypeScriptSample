import * as supertest from 'supertest'
import { app } from '../src/app'

describe('Express server GET /users', () => {
  it('should response the GET method /users ', async () => {
    const response = await supertest(app).get('/api/v1/users')
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","users":[{"id":1,"name":"太郎","age":20}]}'
    )
  })
})

describe('Express server GET /users/:id', () => {
  it('should response the GET method /users/1', async () => {
    const response = await supertest(app).get('/api/v1/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","user":{"id":1,"name":"太郎","age":20}}'
    )
  })
})

describe('Express server POST /users/', () => {
  it('should response the POST method /users ', async () => {
    const user = {
      name: '二郎',
      age: 20,
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":2}')
  })

  it('should response the POST method /users name length 1', async () => {
    const user = {
      name: '二',
      age: 20,
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":3}')
  })

  it('should response the POST method /users name length 20', async () => {
    const user = {
      name: '１２３４５６７８９０１２３４５６７８９０',
      age: 20,
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":4}')
  })

  it('should response the POST method /users validation error. responsed status code 400. age string', async () => {
    const user = {
      name: 'Mike',
      age: 'aa',
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(400)
  })

  it('should response the POST method /users validation error. responsed status code 400. name length 0', async () => {
    const user = {
      name: '',
      age: 20,
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(400)
  })

  it('should response the POST method /users validation error. responsed status code 400. name length 21', async () => {
    const user = {
      name: '123456789012345678901',
      age: 20,
    }
    const response = await supertest(app).post('/api/v1/users').send(user)
    expect(response.status).toBe(400)
  })
})

describe('Express server PUT /users/:id', () => {
  it('should response the PUT method /users/1 ', async () => {
    const user = {
      id: 1,
      name: '花子',
      age: 25,
    }
    const response = await supertest(app).put('/api/v1/users/1').send(user)
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      '{"message":"success","user":{"id":1,"name":"花子","age":25}}'
    )
  })

  it('should response the PUT method /users/1 validation error. responsed status code 400', async () => {
    const user = {
      id: 'a',
      name: '花子',
      age: 25,
    }
    const response = await supertest(app).put('/api/v1/users/1').send(user)
    expect(response.status).toBe(400)
    // expect(response.text).toBe(
    //   '{"message":"success","user":{"id":1,"name":"花子","age":25}}'
    // )
  })
})

describe('Express server DELETE /users/:id', () => {
  it('should response the DELETE method /users/1', async () => {
    const response = await supertest(app).delete('/api/v1/users/1')
    expect(response.status).toBe(200)
    expect(response.text).toBe('{"message":"success","id":1}')
  })
})
