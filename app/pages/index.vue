<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const collectionName = computed(() => `landing_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  () => `index-${locale.value}`,
  async () => {
    let doc = await queryCollection(collectionName.value).first()
    if (!doc && locale.value !== 'en') {
      doc = await queryCollection('landing_en').first()
    }
    return doc
  },
  { watch: [locale] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Docs', {
  title,
  description
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
