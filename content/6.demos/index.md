---
title: Live Demos
description: Code examples for all 5 authentication modes in nuxt-gsheet.
---

End-to-end code demonstrations for all 5 authentication modes in `nuxt-gsheet`.

## 1. Apps Script Mode (`appscript`)

```vue [pages/demo/appscript.vue]
<script setup lang="ts">
const { data: items, refresh } = await useGSheetAsObject('A1:C50', { sheet: 'Feedback' })
const { append } = useGSheetWrite({ sheet: 'Feedback' })

const name = ref('')
const message = ref('')

const save = async () => {
  await append('A1:C1', [[String(Date.now()), name.value, message.value]])
  await refresh()
}
</script>

<template>
  <div>
    <form @submit.prevent="save">
      <input v-model="name" placeholder="Name" required>
      <input v-model="message" placeholder="Message" required>
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}: {{ item.message }}</li>
    </ul>
  </div>
</template>
```

## 2. GViz Mode with SQL Filtering (`gviz`)

```vue [pages/demo/gviz.vue]
<script setup lang="ts">
const { data: topSales } = await useGSheetAsObject('A1:C100', {
  sheet: 'sales',
  query: 'SELECT A, B, C WHERE C > 1000 ORDER BY C DESC'
})
</script>
```

## 3. CSV Export Mode (`csv`)

```vue [pages/demo/csv.vue]
<script setup lang="ts">
const { data: catalog } = await useGSheet('A1:Z50', { sheet: 'Catalog' })
</script>
```

## 4. API Key Mode (`apikey`)

```vue [pages/demo/apikey.vue]
<script setup lang="ts">
const { data: inventory } = await useGSheetAsObject('A1:C20', { sheet: 'Inventory' })
</script>
```

## 5. Service Account Mode (`service-account`)

```vue [pages/demo/service-account.vue]
<script setup lang="ts">
const { data: orders, refresh } = await useGSheetAsObject('A1:D50', { sheet: 'Orders' })
const { append } = useGSheetWrite({ sheet: 'Orders' })

const addOrder = async () => {
  await append('A1:D1', [['ORD-99', 'Acme Corp', '499.00', 'Paid']])
  await refresh()
}
</script>
```
