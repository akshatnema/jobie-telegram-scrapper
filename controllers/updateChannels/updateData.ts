import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";

const apiId: number = parseInt(process.env.TELEGRAM_API_ID || '0')
const apiHash: string = process.env.TELEGRAM_API_HASH || ''

const session = new StringSession(process.env.SESSION_ID); // You should put your string session here
const client = new TelegramClient(session, apiId, apiHash, {});

const updateData = async (channelName: string, offsetId = 0) => {
  await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.messages.GetHistory({
      peer: channelName,
      limit: 10,
      minId: 0,
    })
  );
  console.log(result); // prints the result
}

export default updateData