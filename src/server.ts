import { app } from './app'

const port = 5050 || process.env.port
app.listen(port, () => {
  console.log(`API Server listening on port ${port}!`)
})
