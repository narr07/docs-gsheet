import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const docsSchema = z.object({
  icon: z.string().optional(),
  navigation: z.union([
    z.boolean(),
    z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      icon: z.string().optional()
    })
  ]).optional(),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional()
  })).optional()
})

export default defineContentConfig({
  collections: {
    landing_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/index.md',
        prefix: '/en'
      }
    }),
    landing_id: defineCollection({
      type: 'page',
      source: {
        include: 'id/index.md',
        prefix: '/id'
      }
    }),
    docs_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        exclude: ['en/index.md'],
        prefix: '/en'
      },
      schema: docsSchema
    }),
    docs_id: defineCollection({
      type: 'page',
      source: {
        include: 'id/**',
        exclude: ['id/index.md'],
        prefix: '/id'
      },
      schema: docsSchema
    })
  }
})
