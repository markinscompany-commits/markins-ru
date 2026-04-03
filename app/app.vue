<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { init, destroy } = useLenis()

onMounted(() => {
  if (import.meta.client) init()
})

onBeforeUnmount(() => {
  destroy()
})
</script>
