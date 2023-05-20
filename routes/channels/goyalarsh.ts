import express, { Router, Request, Response } from 'express'
import Logger from '../../lib/winston'
import protectRouter from '../../lib/protectRouter'

const router: Router = express.Router()

router.get('/', protectRouter, (req: Request, res: Response) => {
  res.status(200).send('Welcome to /channels route of JobIE Telegram Scrapper')
})

export default router
