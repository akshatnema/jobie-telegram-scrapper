import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import Logger from '../../lib/winston'
import input from 'input'
import dotenv from 'dotenv'

dotenv.config()

const apiId: number = parseInt(process.env.TELEGRAM_API_ID || '0')
const apiHash: string = process.env.TELEGRAM_API_HASH || ''
const stringSession = new StringSession(process.env.SESSION_ID) // fill this later with the value from session.save()

const telegramAuth = async () => {
  try {
    Logger.info('Loading interactive example...')
    const client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    })
    await client.start({
      phoneNumber: async () => await input.text('number ?'),
      password: async () => await input.text('password?'),
      phoneCode: async () => await input.text('Code ?'),
      onError: (err) => console.log(err),
    })
    Logger.info('You should now be connected.')
    Logger.info(client.session.save()) // Save this string to avoid logging in again
  } catch (err) {
    Logger.error('Error occured')
    Logger.error(err)
  }
}

export default telegramAuth
