import app from './app'
import debug from 'debug'
import express from 'express'
import { AppConfig } from '../app.config'
import { getWebhook } from '../app.config'

const log = debug('nerdzao-chatbot:server')

export async function start (config: AppConfig) {
  const telegraf = app.factory(config)

  const webhookLocation = getWebhook()

  log('Setting webhook to %s', webhookLocation)
  await telegraf.telegram.setWebhook(`https://${webhookLocation}`)

  log('Starting webhook')
  const server = express()
  server.use(telegraf.webhookCallback(`/${config.telegram.apiToken}`))

  server.listen(config.server.webhook.port, () => {
    console.log(`${config.name} listening on port ${config.server.webhook.port}`)
  })
}

export default {
  start
}
