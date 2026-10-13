<script setup lang="ts">
const { data: students } = await useGSheetAsObject('A1:F6', { sheet: 'Class Data' })

const columns = [
  { accessorKey: 'Student Name', header: 'Student Name' },
  { accessorKey: 'Class Level', header: 'Class Level' },
  { accessorKey: 'Major', header: 'Major' }
]
</script>

<template>
  <UTable
    :data="students ?? []"
    :columns="columns"
    class="w-full"
  />
</template>
