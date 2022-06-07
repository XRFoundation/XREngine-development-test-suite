import assert from 'assert'
import { XREngineBot } from 'XREngine-bot/bot'

import { BotHooks } from 'XREngine-bot/src/enums/BotHooks'

import { clickAnotherScene, enterEditor } from '../utils/editor'

const domain = process.env.APP_HOST || 'localhost:3000'
const editorUrl = `https://${domain}/editor`

describe('Editor Scene Tests', () => {
  const bot = new XREngineBot({ name: 'bot', verbose: true })
  before(async () => {
    await bot.launchBrowser()
  })

  after(async () => {
    await bot.quit()
  })

  it('should load scene', async () => {
    await enterEditor(editorUrl, bot)
    assert(await bot.runHook(BotHooks.SceneLoaded))
  })

  it('should unload scene and load second scene', async () => {
    await clickAnotherScene(bot)
    assert(await bot.runHook(BotHooks.SceneLoaded))
  })
})
