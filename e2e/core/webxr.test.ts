import { XREngineBot } from 'XREngine-bot/bot'
import { BotHooks } from 'XREngine-bot/src/enums/BotHooks'

import { setupXR, testWebXR } from '../utils/testWebXR'
import { delay } from '@xrengine/engine/src/common/functions/delay'

const domain = process.env.APP_HOST
const locationName = 'test'

describe('WebXR Bot Tests', () => {
  const bot = new XREngineBot({ name: 'bot-' + Date.now(), verbose: true })

  before(async () => {
    await bot.launchBrowser()
    await bot.enterLocation(`https://${domain}/location/${locationName}`)
    await bot.awaitHookPromise(BotHooks.LocationLoaded)
    await setupXR(bot)
  })

  after(async () => {
    await bot.quit()
  })

  testWebXR(bot)
})
