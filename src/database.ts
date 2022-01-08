import * as mysql from 'mysql2'
import * as dotenv from 'dotenv'

dotenv.config()

let dbPort = 3306
if (typeof process.env.DB_PORT === 'number') {
  dbPort = process.env.DB_PORT
}
const pool = mysql.createPool({
  connectionLimit: 5,
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'mysql',
  database: process.env.DB_NAME || 'test',
  // port: process.env.DB_PORT || 3306,
  port: dbPort,
})

const promisePool = pool.promise()
export default promisePool
