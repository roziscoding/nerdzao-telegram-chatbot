import env from 'sugar-env'

export type AppConfig = typeof config

const TOKEN = env.get('TELEGRAM_APITOKEN', '')

export const config = {
  name: env.get('APP_NAME', 'nerdzao-chatbot'),
  telegram: {
    apiToken: TOKEN
  },
  server: {
    webhook: {
      url: env.get('SERVER_WEBHOOK_URL', 'localhost:3000'),
      port: env.get.int('SERVER_WEBHOOK_PORT', 3000),
      path: env.get('SERVER_WEBHOOK_PATH', TOKEN)
    }
  }
}

export function getWebhook () {
  return `${config.server.webhook.url.trim()}/${config.server.webhook.path.trim()}`
}

export default {
  config,
  getWebhook
}
