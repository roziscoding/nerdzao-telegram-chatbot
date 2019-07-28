import Telegraf from 'telegraf'
import { commands } from './commands'
import { AppConfig } from '../app.config'

export function start (config: AppConfig) {
  const telegraf = new Telegraf(config.telegram.apiToken, { telegram: { webhookReply: true } })

  telegraf.use(async (ctx, next: any) => {
    const start = Date.now()
    await next()
    const elapsed = Date.now() - start
    if (ctx.from && ctx.message) console.log(`New message from ${ctx.from.username || ctx.from.first_name}: ${ctx.message.text}; took ${elapsed} ms`)
  })

  telegraf.start(commands.start.factory())

  return telegraf
}

export default {
  factory: start
}
