import app from './app'
import debug from 'debug'
import { AppConfig } from '../app.config'
import { getWebhook } from '../app.config'

const log = debug('nerdzao-chatbot:server')

export async function start (config: AppConfig) {
  const telegraf = app.factory(config)

  const webhookLocation = getWebhook()

  log('Setting webhook to %s', webhookLocation)
  await telegraf.telegram.setWebhook(`https://${webhookLocation}`)

  log('Starting webhook')
  await telegraf.startWebhook(config.server.webhook.path, null, config.server.webhook.port, config.server.webhook.url)
}

export default {
  start
}
