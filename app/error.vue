<script setup lang="ts">
import type { NuxtError } from '#app'
import type { Collections, ContentNavigationItem } from '@nuxt/content'

defineProps<{
  error: NuxtError
}>()

const { locale } = useI18n()
const collectionName = computed(() => `docs_${locale.value}` as keyof Collections)

useHead({
  htmlAttrs: {
    lang: locale
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const { data: rawNavigation } = await useAsyncData(() => `navigation-${locale.value}`, () => queryCollectionNavigation(collectionName.value), { watch: [locale] })

const navigation = computed<ContentNavigationItem[]>(() => {
  if (!rawNavigation.value?.length) return []
  const first = rawNavigation.value[0]
  if (
    first
    && first.children
    && (['en', 'id'].includes(first.title?.toLowerCase() || '')
      || ['en', 'id'].includes(first.stem?.toLowerCase() || ''))
  ) {
    return first.children
  }
  return rawNavigation.value
})

const { data: files } = useLazyAsyncData(() => `search-${locale.value}`, () => queryCollectionSearchSections(collectionName.value), {
  server: false,
  watch: [locale]
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
