import { app } from './app'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 5050
app.listen(port, () => {
  console.log(`API Server listening on port ${port}!`)
})
