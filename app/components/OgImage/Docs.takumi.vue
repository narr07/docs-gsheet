<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="w-full h-full flex bg-neutral-950 relative overflow-hidden"
    data-theme="dark"
  >
    <div class="absolute top-0 left-0 w-1.5 h-full bg-primary-400" />

    <div class="flex flex-col justify-between flex-1 px-20 py-16">
      <div />

      <div class="flex flex-col gap-5">
        <span
          v-if="headline"
          class="text-2xl font-medium text-primary-400"
        >
          {{ headline }}
        </span>

        <h1
          v-if="title"
          class="text-6xl font-bold text-highlighted"
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          class="text-3xl/11 text-muted"
          :style="{ lineClamp: 2, textOverflow: 'ellipsis' }"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex items-center gap-4">
        <svg
          class="size-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >

          <path
            d="M515.46,314.65l-263.82,456.97c-2.95,5.11-8.4,8.26-14.3,8.26H80.78c-12.71,0-20.66-13.76-14.3-24.77L408.59,162.55c6.36-11.01,22.25-11.01,28.61,0l78.27,135.59c2.95,5.11,2.95,11.4,0,16.51Z"
            style="fill: #11c379;"
          />
          <line
            x1="520.31"
            y1="306.53"
            x2="520.23"
            y2="306.4"
            style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"
          />
          <path
            d="M724.82,393.64h-129.28l-45.5-78.81c-2.96-5.1-2.96-11.41,0-16.52l45.57-78.94c6.36-11.02,22.25-11.02,28.6,0l100.61,174.27Z"
            style="fill: #5cdcae;"
          />
          <path
            d="M919.22,779.88h-66.06v-163.96l80.36,139.19c6.36,11.02-1.59,24.77-14.3,24.77Z"
            style="fill: #5cdcae;"
          />
          <g>
            <rect
              x="466.92"
              y="675.91"
              width="103.98"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #00684b;"
            />
            <rect
              x="595.67"
              y="675.91"
              width="103.96"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #00905b;"
            />
            <rect
              x="724.41"
              y="675.91"
              width="103.98"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #00b66f;"
            />
            <rect
              x="724.41"
              y="547.17"
              width="103.98"
              height="103.96"
              rx="8.26"
              ry="8.26"
              style="fill: #2bce8e;"
            />
            <rect
              x="595.67"
              y="547.17"
              width="103.96"
              height="103.96"
              rx="8.26"
              ry="8.26"
              style="fill: #01b66d;"
            />
            <rect
              x="466.92"
              y="547.17"
              width="103.98"
              height="103.96"
              rx="8.26"
              ry="8.26"
              style="fill: #008754;"
            />
            <rect
              x="466.92"
              y="418.42"
              width="103.98"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #09bc73;"
            />
            <rect
              x="595.67"
              y="418.42"
              width="103.96"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #2ece8f;"
            />
            <rect
              x="724.41"
              y="418.42"
              width="103.98"
              height="103.98"
              rx="8.26"
              ry="8.26"
              style="fill: #6be0b5;"
            />
          </g>
        </svg>

        <div class="h-px flex-1 bg-border" />
        <span class="text-xl text-dimmed">nuxtgsheet.permadi.dev</span>
      </div>
    </div>
  </div>
</template>
