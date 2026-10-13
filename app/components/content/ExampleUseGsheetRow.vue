<script setup lang="ts">
const options = { sheet: 'Class Data' }

// Index 0 is the header row, index 3 is the third student
const { data: headers } = await useGSheetRow('A1:F31', 0, options)
const { data: student } = await useGSheetRow('A1:F31', 3, options)

const columns = computed(() => (headers.value ?? []).map((header: string, index: number) => ({
  id: String(index),
  header,
  accessorFn: (row: string[]) => row[index]
})))

const data = computed(() => (student.value ? [student.value] : []))
</script>

<template>
  <UTable
    :data="data"
    :columns="columns"
    class="w-full"
  />
</template>
