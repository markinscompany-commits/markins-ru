<template>
  <div class="overflow-hidden py-6" aria-label="Наши клиенты">
    <div class="marquee">
      <div class="marquee-track">
        <span
          v-for="(logo, i) in doubled"
          :key="i"
          class="font-display text-base md:text-lg font-500 text-[#E8E0D2]/30 whitespace-nowrap px-8 md:px-12 select-none"
        >
          {{ logo }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clientLogos } from '~/data/site'

const doubled = [...clientLogos, ...clientLogos]
</script>

<style scoped>
.marquee {
  display: flex;
  width: 100%;
}

.marquee-track {
  display: flex;
  animation: marquee 40s linear infinite;
  width: max-content;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
