<script setup lang="ts">
const { data: rows } = await useGSheet('A1:F6', { sheet: 'Class Data' })

// The first row holds the headers, the rest are the table rows
const columns = computed(() => (rows.value?.[0] ?? []).map((header: string, index: number) => ({
  id: String(index),
  header,
  accessorFn: (row: string[]) => row[index]
})))

const data = computed(() => rows.value?.slice(1) ?? [])
</script>

<template>
  <UTable
    :data="data"
    :columns="columns"
    class="w-full"
  />
</template>
