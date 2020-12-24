import type { Plugin } from 'vite'
import { Options, ResolvedOptions } from './types'
import { createServerPlugin } from './server'
import { createRollupPlugin } from './build'

function VitePluginIcons(options: Options = {}): Plugin {
  const resolved: ResolvedOptions = Object.assign({}, options)

  return {
    configureServer: createServerPlugin(resolved),
    rollupInputOptions: {
      pluginsPreBuild: [createRollupPlugin(resolved)],
    },
  }
}

export { VitePluginIcons as Plugin }
export * from './resolver'

export default VitePluginIcons