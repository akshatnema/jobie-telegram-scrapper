import express, { Router, Request, Response } from 'express'
import protectRouter from '../lib/protectRouter'
import goyalarsh from './channels/goyalarsh'

const router: Router = express.Router()

router.get('/', protectRouter, (req: Request, res: Response) => {
  res.status(200).send('Welcome to /channels route of JobIE Telegram Scrapper')
})

router.use('/goyalarsh', goyalarsh)

export default router
