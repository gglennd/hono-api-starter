import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import cloudflareAdapter from '@hono/vite-dev-server/cloudflare'
import build from '@hono/vite-build/cloudflare-workers'

export default defineConfig({
  plugins: [
    devServer({
      entry: 'src/index.ts',
      adapter: cloudflareAdapter,
    }),
    build()
  ]
})