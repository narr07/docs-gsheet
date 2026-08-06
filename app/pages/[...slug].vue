<script setup lang="ts">
import type { ContentNavigationItem, Collections } from '@nuxt/content'
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc } = useAppConfig()
const { locale } = useI18n()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const collectionName = computed(() => `docs_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  `page-${route.path}`,
  async () => {
    let doc = await queryCollection(collectionName.value).path(route.path).first()
    if (!doc && locale.value !== 'en') {
      const fallbackPath = route.path.replace(/^\/id(\/|$)/, '/en$1')
      doc = await queryCollection('docs_en').path(fallbackPath).first()
    }
    return doc
  },
  { watch: [locale] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  async () => {
    let items = await queryCollectionItemSurroundings(collectionName.value, route.path, {
      fields: ['description']
    })
    if ((!items || !items.length) && locale.value !== 'en') {
      const fallbackPath = route.path.replace(/^\/id(\/|$)/, '/en$1')
      items = await queryCollectionItemSurroundings('docs_en', fallbackPath, {
        fields: ['description']
      })
    }
    return items
  },
  { watch: [locale] }
)

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path))

defineOgImage('Docs', { title, description, headline: headline.value })

const links = computed(() => {
  const links = []
  if (toc?.bottom?.edit) {
    links.push({
      icon: 'i-lucide-external-link',
      label: 'Edit this page',
      to: `${toc.bottom.edit}/${page?.value?.stem}.${page?.value?.extension}`,
      target: '_blank'
    })
  }

  return [...links, ...(toc?.bottom?.links || [])].filter(Boolean)
})
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="headline"
    >
      <template #links>
        <UButton
          v-for="(link, index) in (page as any).links"
          :key="index"
          v-bind="link"
        />

        <PageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
        highlight
        highlight-color="primary"
        highlight-variant="circuit"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
          <div
            class="hidden lg:block space-y-6"
            :class="{ 'mt-6!': page.body?.toc?.links?.length }"
          >
            <USeparator
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              :title="toc.bottom.title"
              :links="links"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
