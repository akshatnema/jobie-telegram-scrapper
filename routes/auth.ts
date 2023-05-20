import express, { Router, Request, Response } from 'express'
import Logger from '../lib/winston'
import telegramAuth from '../controllers/auth/telegram'
import protectRouter from '../lib/protectRouter'
const router: Router = express.Router()

router.get('/', protectRouter, (req: Request, res: Response) => {
    res.status(200).send('Welcome to authentication route.')
})

router.get('/telegram', async (req: Request, res: Response) => {
  try {
    await telegramAuth()
    Logger.http('Telegram Authentication successful. Status 200')
    res.status(200).send('Telegram Authentication successful')
  } catch (err) {
    Logger.error('Error occured in Telegram Authentication. Error log:\n')
    Logger.error(err)
    res.status(400).send('Telegram Authentication failed')
  }
})

export default router
