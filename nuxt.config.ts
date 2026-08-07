import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

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
      'agents/mcp': path.resolve(__dirname, 'server/mcp/noop.ts')
    },
    prerender: {
      routes: ['/', '/en', '/id'],
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
    title: 'Nuxt GSheet Documentation',
    description: 'Use Google Sheets as a lightweight CMS or database in Nuxt applications.',
    full: {
      title: 'Nuxt GSheet - Full Documentation',
      description: 'Complete documentation for nuxt-gsheet module, including composables, 5 authentication modes, and AI integrations.'
    },
    sections: [
      // English Sections
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
        title: 'Authentication Modes (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/auth-modes%' }
        ]
      },
      {
        title: 'AI Integrations (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/ai%' }
        ]
      },
      {
        title: 'Demos (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/demos%' }
        ]
      },
      {
        title: 'Tutorials (EN)',
        contentCollection: 'docs_en',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/en/tutorials%' }
        ]
      },

      // Indonesian Sections
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
      },
      {
        title: 'Mode Autentikasi (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/auth-modes%' }
        ]
      },
      {
        title: 'Integrasi AI (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/ai%' }
        ]
      },
      {
        title: 'Demo (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/demos%' }
        ]
      },
      {
        title: 'Tutorial (ID)',
        contentCollection: 'docs_id',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/id/tutorials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Nuxt GSheet Documentation MCP'
  },
  // mcp: {
  //   enabled: false
  // },

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
