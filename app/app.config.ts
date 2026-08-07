export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'gray'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Nuxt GSheet'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/narr07/nuxt-gsheet',
      'target': '_blank',
      'aria-label': 'GitHub'
    }

    ]
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()} Nuxt GSheet`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/narr07/docs-gsheet',
      'target': '_blank',
      'aria-label': 'Nuxt GSheet on GitHub'
    }, {
      'icon': 'i-lucide-user',
      'to': 'https://permadi.dev/',
      'target': '_blank',
      'aria-label': 'Dinar Permadi Yusup'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/narr07/docs-gsheet/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/narr07/nuxt-gsheet',
        target: '_blank'
      }]
    }
  }
})
