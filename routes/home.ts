import express, { Router, Request, Response } from 'express'
import Logger from '../config/winston'
const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Jobie Scrapper working perfectly')
})

router.get('/logger', (req: Request, res: Response) => {
  try {
    Logger.error('This is an error log')
    Logger.warn('This is a warn log')
    Logger.info('This is a info log')
    Logger.http('This is a http log')
    Logger.debug('This is a debug log')

    res.status(200).send('Logger Output in Console')
  } catch (err) {
    console.log('Error in Logger')
    console.error(err)
  }
})

export default router
