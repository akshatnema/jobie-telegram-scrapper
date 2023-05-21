import express, { Router, Request, Response } from 'express'
import protectRouter from '../lib/protectRouter'


const router: Router = express.Router()

router.get('/', protectRouter, (req: Request, res: Response) => {
  console.log(req.session)
  res.status(200).send('Welcome to /channels route of JobIE Telegram Scrapper')
})

export default router
