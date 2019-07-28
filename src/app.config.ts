import env from 'sugar-env'

export type AppConfig = typeof config

const TOKEN = env.get('TELEGRAM_APITOKEN', '').trim()

export const config = {
  name: env.get('APP_NAME', 'nerdzao-chatbot'),
  telegram: {
    apiToken: TOKEN
  },
  server: {
    webhook: {
      url: env.get('SERVER_WEBHOOK_URL', 'localhost:3000').trim(),
      port: env.get.int('SERVER_WEBHOOK_PORT', 3000),
      bindHost: env.get('SERVER_WEBHOOK_BIND_HOST', 'localhost').trim()
    }
  }
}

export function getWebhook () {
  return `${config.server.webhook.url.trim()}/${TOKEN.trim()}`
}

export default {
  config,
  getWebhook
}
