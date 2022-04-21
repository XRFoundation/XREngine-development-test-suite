import { ProjectEventHooks } from '@xrengine/projects/ProjectConfigInterface'
import { Application } from '@xrengine/server-core/declarations'
import path from 'path'
import { installAvatarsFromProject } from '@xrengine/server-core/src/user/avatar/avatar-helper'
import packageJson from './package.json'

const avatarsFolder = path.resolve(__dirname, 'avatars')

const config = {
  onInstall: async (app: Application) => {
    await app.service('route-activate').create({ project: packageJson.name, route: 'examples', activate: true })
    return installAvatarsFromProject(app, avatarsFolder)
  },
  onLoad: (app: Application) => {

  }
  // TODO: remove avatars
  // onUninstall: (app: Application) => {
  // }
} as ProjectEventHooks

export default config