---
seo:
  title: Nuxt Gsheet - Integrasi Google Sheets Zero-Config untuk Nuxt
  description: Integrasi Google Sheets yang super cepat, zero-config, dan aman untuk Nuxt 3, 4, dan 5 dengan perlindungan stampede lock, auto-detection 5 mode auth, dan dashboard DevTools.
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
[Google Sheets]{.text-primary} untuk Nuxt.

#description
Gunakan Google Sheets sebagai CMS ringan atau database dengan keamanan server-side proxy, stampede-proof caching, 5 mode autentikasi, dan tab khusus Nuxt DevTools.

#links
  :::u-button
  ---
  to: /id/getting-started/introduction
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Mulai Sekarang
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
  Gunakan Modul Ini
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
Fitur Utama

#description
Menjaga Spreadsheet ID, API Key, dan token Service Account JWT tetap aman di sisi server tanpa pernah mengeksposnya ke client browser.

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
    Menjaga Spreadsheet ID, API Key, dan token Service Account JWT tetap aman di sisi server, tersembunyi dari client browser.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-bolt
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    5 Mode Autentikasi

    #description
    Auto-detect Google Apps Script Web App, query GViz SQL, feed CSV, API Key, dan Service Account.
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
    Mencegah error quota HTTP 429 dan tetap menyajikan stale cache saat terjadi gangguan jaringan upstream.
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
    Vue composable yang ter-auto-import (`useGSheet`, `useGSheetAsObject`, `useGSheetRow`, `useGSheetWrite`).
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-table
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Tabel di Markdown

    #description
    Tampilkan range sheet sebagai tabel dengan satu baris, `::gsheet-table`, di Nuxt Content maupun Comark.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-panel-top
    spotlight: true
    spotlightColor: primary
    variant: outline
    ---
    #title
    Integrasi Nuxt DevTools

    #description
    Tab DevTools khusus untuk memantau request API yang ter-intercept, rasio cache hit/miss, dan estimasi penggunaan kuota.
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
    Implementasi Agent Skills RFC bawaan dan endpoint live Model Context Protocol (MCP) server.
    ::::
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Mode Autentikasi Fleksibel

#description
Deteksi otomatis untuk spreadsheet publik, privat, maupun arsitektur serverless.

#default
  :::u-page-grid
    ::::u-page-feature
    ---
    icon: i-lucide-globe
    to: /id/auth-modes/gviz
    ---
    #title
    GViz SQL Query

    #description
    Query spreadsheet publik dengan sintaks SQL Google Visualization API untuk akses cepat berbasis read-only.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-file-text
    to: /id/auth-modes/csv
    ---
    #title
    CSV Feeds

    #description
    Fetch data CSV mentah dari spreadsheet publik tanpa perlu konfigurasi rumit dengan overhead minimal.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-code
    to: /id/auth-modes/appscript
    ---
    #title
    Apps Script Web Apps

    #description
    Deploy endpoint Google Apps Script untuk operasi read dan write data privat dengan kontrol penuh.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-key-round
    to: /id/auth-modes/apikey
    ---
    #title
    API Key Access

    #description
    Gunakan Google API Key untuk request server-side dengan jaminan API Key tetap tersembunyi dari browser.
    ::::

    ::::u-page-feature
    ---
    icon: i-lucide-lock
    to: /id/auth-modes/service-account
    ---
    #title
    Service Account

    #description
    Autentikasi menggunakan kredensial Service Account JWT untuk akses spreadsheet privat secara aman.
    ::::

  :::
::


::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Mulai Membangun
      to: '/id/getting-started/introduction'
      trailingIcon: i-lucide-arrow-right
    - label: Lihat di GitHub
      to: 'https://github.com/narr07/narr07/nuxt-gsheet'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Siap membangun aplikasi dengan Google Sheets?
  description: Bergabunglah dengan para developer yang membangun aplikasi Nuxt menggunakan nuxt-gsheet. Install modulnya dan kirim karya terbaikmu hari ini.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
