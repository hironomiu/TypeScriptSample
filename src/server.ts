import { app } from './app'

const port = 3005 || process.env.port
app.listen(port, () => {
  console.log(`API Server listening on port ${port}!`)
})
