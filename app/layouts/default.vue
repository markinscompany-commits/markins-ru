<template>
  <div class="min-h-screen flex flex-col bg-mk-bg">
    <UiAppHeader @open-contact="openContact" />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { init, destroy } = useLenis()

onMounted(() => {
  if (!import.meta.client) return
  init()

  // Smooth scroll to anchor links via Lenis
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a[href^="#"]')
    if (!link) return
    const href = link.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    const lenis = useLenis().instance()
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 })
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

onBeforeUnmount(() => {
  destroy()
})

// Provide open contact function so pages can respond to header CTA
const openContactCb = ref<(() => void) | null>(null)
provide('registerOpenContact', (cb: () => void) => {
  openContactCb.value = cb
})

function openContact() {
  if (openContactCb.value) openContactCb.value()
}
</script>
