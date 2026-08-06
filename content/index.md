---
seo:
  title: nuxt-gsheet - Zero-Config Google Sheets Integration for Nuxt
  description: Ultra-fast, zero-config, secure Google Sheets integration for Nuxt 3 and 4 with built-in stampede protection, multi-auth detection, and DevTools dashboard.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900  to-neutral-950"}
---
orientation: horizontal
ui:
  container: 'py-12 sm:py-16 lg:py-20'
---
#top
:hero-background

#title
[Google Sheets]{.text-primary} for Nuxt.

#description
Use Google Sheets as a lightweight CMS or database with server-side proxy security, stampede-proof caching, 5 authentication modes, and a dedicated Nuxt DevTools tab. The same system trusted by the entire [Nuxt ecosystem](https://nuxt.com){.text-primary}.

#links
  :::u-button
  ---
  to: /getting-started/introduction
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/narr07/nuxt-gsheet
  target: _blank
  ---
  Use this module
  :::

#default
  :::prose-pre
  ---
  code: |
    export default defineNuxtConfig({
      modules: ['nuxt-gsheet'],

      gsheet: {
        sheets: {
          products: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms'
        },
        cache: {
          enabled: true,
          maxAge: 300
        }
      }
    })
  filename: nuxt.config.ts
  ---

  ```ts [nuxt.config.ts]
  export default defineNuxtConfig({
    modules: ['nuxt-gsheet'],

    gsheet: {
      sheets: {
        product: '1BxiMVs0XRA5nFMd****************************'
      },
      cache: {
        enabled: true,
        maxAge: 300
      }
    }
  })
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Key Features

#description
Keeps Spreadsheet IDs, API Keys, and Service Account JWT tokens strictly on the server side, hiding them from browser clients.

#default
  :::u-page-grid
    ::::u-page-card
    ---
    icon: i-lucide-shield-check
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Secure Server Proxy

    #description
    Keeps Spreadsheet IDs, API Keys, and Service Account JWT tokens strictly on the server side, hiding them from browser clients.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-bolt
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    5 Authentication Modes

    #description
    Auto-detects Google Apps Script Web Apps, GViz SQL queries, CSV feeds, API Keys, and Service Accounts.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-cpu
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Stampede Lock Protection

    #description
    Prevents HTTP 429 quota exhaustion and serves stale cache during network failures.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-braces
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Type-Safe Composables

    #description
    Auto-imported Vue composables (`useGSheet`, `useGSheetAsObject`, `useGSheetRow`, `useGSheetWrite`).
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-panel-top
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Nuxt DevTools Integration

    #description
    Dedicated DevTools tab for tracking intercepted API calls, cache hit/miss ratio, and quota usage.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-sparkles
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    AI-Native Agent Skills & MCP

    #description
    Bundled Agent Skills RFC implementation and live Model Context Protocol (MCP) server endpoint.
    ::::
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Flexible Authentication Modes

#description
Automatic detection for public, private, and serverless Google Sheets setups.

#default
  :::u-page-grid
    ::::u-page-feature
    ---
    icon: i-lucide-globe
    to: /auth-modes/gviz
    ---
    #title
    GViz SQL Queries

    #description
    Query public spreadsheets with Google Visualization API SQL syntax for instant, read-only access.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-file-text
    to: /auth-modes/csv
    ---
    #title
    CSV Feeds

    #description
    Fetch raw CSV data from public sheets with zero configuration and minimal overhead.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-code
    to: /auth-modes/appscript
    ---
    #title
    Apps Script Web Apps

    #description
    Deploy a Google Apps Script endpoint to read and write private data with full control.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-key-round
    to: /auth-modes/apikey
    ---
    #title
    API Key Access

    #description
    Use a Google API Key for server-side requests while keeping the key hidden from the browser.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-lock
    to: /auth-modes/service-account
    ---
    #title
    Service Accounts

    #description
    Authenticate with JWT service account credentials for secure, private spreadsheet access.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-database-zap
    to: /advanced/caching
    ---
    #title
    Stampede-Proof Caching

    #description
    Built-in cache with lock protection and stale-while-revalidate to survive quota limits.
    ::::
  :::
::


::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start building
      to: '/getting-started/introduction'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/narr07/nuxt-gsheet'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to build with Google Sheets?
  description: Join developers building with Nuxt and nuxt-gsheet. Install the module and start shipping today.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::

