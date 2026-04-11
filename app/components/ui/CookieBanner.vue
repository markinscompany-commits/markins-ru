<template>
  <Transition name="cookie-banner">
    <div
      v-if="visible"
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-mk-black/95 backdrop-blur-sm text-[#E8E0D2]/90 px-5 py-4 flex items-center gap-4 shadow-xl"
    >
      <p class="font-body text-sm text-[#E8E0D2]/70 flex-1">
        Мы используем файлы cookie для улучшения работы сайта
      </p>
      <button
        class="bg-mk-rust hover:bg-mk-rust-dark text-[#F5F0EB] font-body text-sm font-500 px-5 py-2 transition-colors duration-200 shrink-0"
        @click="accept"
      >
        Принять
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  if (typeof localStorage !== 'undefined') {
    const accepted = localStorage.getItem('mk-cookies-accepted')
    if (!accepted) {
      visible.value = true
    }
  }
})

function accept() {
  visible.value = false
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('mk-cookies-accepted', '1')
  }
}
</script>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: all 0.3s ease;
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
