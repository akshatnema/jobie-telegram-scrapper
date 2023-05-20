import express, { Express } from 'express'
import dotenv from 'dotenv'
import Logger from './lib/winston/index'
import morganMiddleware from './lib/morgan'
import home from './routes/home'
import auth from './routes/auth'
dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000

app.use('/', home)
app.use('/auth', auth)
app.use(morganMiddleware)

app.listen(port, () => {
  Logger.debug(`⚡️[server]: Server is running at http://localhost:${port}`)
})
