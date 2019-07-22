import { ContextMessageUpdate } from 'telegraf'

export function factory () {
  return (ctx: ContextMessageUpdate) => {
    ctx.reply('Hey there :D')
  }
}
