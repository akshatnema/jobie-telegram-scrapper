import express, { Express } from 'express'
import session from 'express-session'
import dotenv from 'dotenv'
import Logger from './lib/winston/index'
import morganMiddleware from './lib/morgan'
import home from './routes/home'
import auth from './routes/auth'
import channels from './routes/channels'
import firebaseAuth from './controllers/auth/firebase'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000


const firebaseApp = firebaseAuth()
const sessionOptions = { secret: 'asecretkeyforsession', resave: false, saveUninitialized: false }

app.use(session(sessionOptions))
app.use(morganMiddleware)
app.use('/', home)
app.use('/auth', auth)
app.use('/channels', channels)


app.listen(port, () => {
  Logger.debug(`⚡️[server]: Server is running at http://localhost:${port}`)
})
