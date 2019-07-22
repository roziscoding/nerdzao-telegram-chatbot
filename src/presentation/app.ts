import Telegraf from 'telegraf'
import { commands } from './commands'
import { AppConfig } from '../app.config'

export function start (config: AppConfig) {
  const telegraf = new Telegraf(config.telegram.apiToken, { telegram: { webhookReply: true } })
  telegraf.start(commands.start.factory())

  return telegraf
}

export default {
  factory: start
}
