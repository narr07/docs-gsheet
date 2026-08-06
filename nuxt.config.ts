import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function getContentRoutes(dir: string, basePrefix: string): string[] {
  const routes: string[] = []
  if (!fs.existsSync(dir)) return routes

  function scan(currentDir: string, currentRoute: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const cleanName = entry.name.replace(/^\d+\./, '')
        scan(path.join(currentDir, entry.name), `${currentRoute}/${cleanName}`)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const nameWithoutExt = entry.name.replace(/\.md$/, '')
        const cleanName = nameWithoutExt.replace(/^\d+\./, '')
        if (cleanName === 'index') {
          routes.push(currentRoute || basePrefix)
        } else {
          routes.push(`${currentRoute}/${cleanName}`)
        }
      }
    }
  }

  scan(dir, basePrefix)
  return routes
}

const enRoutes = getContentRoutes(path.resolve(__dirname, 'content/en'), '/en')
const idRoutes = getContentRoutes(path.resolve(__dirname, 'content/id'), '/id')
const prerenderRoutes = Array.from(new Set(['/', '/en', '/id', ...enRoutes, ...idRoutes]))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@nuxtjs/i18n',
    'nuxt-gsheet',
    'nuxt-studio'
  ],

  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    preset: 'cloudflare-pages',
    alias: {
      'agents/mcp': 'unenv/runtime/mock/noop'
    },
    prerender: {
      routes: prerenderRoutes,
      crawlLinks: true
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ['/_nuxt/*', '/favicon.ico', '/build/*']
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'id', name: 'Bahasa Indonesia', language: 'id-ID' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix'
  },

  llms: {
    domain: 'https://nuxtgsheet.permadi.dev/',
    title: 'Nuxt Docs Template',
    description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
    full: {
      title: 'Nuxt Docs Template - Full Documentation',
      description: 'This is the full documentation for the Nuxt Docs Template.'
    },
    sections: [
      {
        title: 'Getting Started (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/getting-started%' }
        ]
      },
      {
        title: 'Composables (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/composables%' }
        ]
      },
      {
        title: 'Memulai (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/getting-started%' }
        ]
      },
      {
        title: 'Composables (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/composables%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Docs template'
  },

  ogImage: {
    zeroRuntime: true
  },
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'narr07',
      repo: 'docs-gsheet',
      branch: 'main'
    }
  }
})
