<script setup lang="ts">
import type { Collections, ContentNavigationItem } from '@nuxt/content'

const { seo } = useAppConfig()
const { locale } = useI18n()

const collectionName = computed(() => `docs_${locale.value}` as keyof Collections)

const { data: rawNavigation } = await useAsyncData(
  () => `navigation-${locale.value}`,
  () => queryCollectionNavigation(collectionName.value),
  { watch: [locale] }
)

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

const { data: files } = useLazyAsyncData(
  () => `search-${locale.value}`,
  () => queryCollectionSearchSections(collectionName.value),
  { server: false, watch: [locale] }
)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="primary" />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
