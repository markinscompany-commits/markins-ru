<template>
  <article
    class="case-card group flex flex-col overflow-hidden transition-all duration-300 rounded-none"
    style="transform: translateZ(0); box-shadow: 0 0 0 transparent; transition: box-shadow 0.3s ease;"
    @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'"
    @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent'"
  >
    <!-- Screenshot placeholder -->
    <div
      class="w-full bg-mk-gray-100 flex items-center justify-center relative overflow-hidden"
      :class="size === 'featured' ? 'aspect-[16/9]' : 'aspect-[4/3]'"
    >
      <span class="font-body text-lg text-mk-gray-300 select-none">
        {{ link ? link.replace(/^https?:\/\//, '').replace(/\/$/, '') : title }}
      </span>
      <!-- Badge -->
      <span
        v-if="badge"
        class="absolute top-3 left-3 bg-mk-black text-[#F5F0EB] font-body text-xs font-500 px-3 py-1.5"
      >
        {{ badge }}
      </span>
      <!-- Tags in bottom-right corner of image -->
      <div v-if="tags && tags.length" class="absolute bottom-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
        <span
          v-for="(t, i) in tags"
          :key="i"
          class="font-body text-[10px] font-500 text-[#F5F0EB]/90 bg-mk-black/60 backdrop-blur-sm px-2 py-0.5"
        >{{ t }}</span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-3 p-6 md:p-8 flex-1">
      <!-- Title -->
      <h3
        class="font-display font-600 text-mk-black"
        :class="size === 'featured' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="font-body text-base text-mk-gray-500 leading-relaxed flex-1">
        {{ description }}
      </p>

      <!-- Metrics -->
      <div v-if="metrics.length" class="flex flex-wrap gap-6 pt-3">
        <div v-for="(m, i) in metrics" :key="i" class="flex flex-col gap-0.5">
          <span class="font-display text-lg font-600 text-mk-black">{{ m.value }}</span>
          <span v-if="m.label" class="font-body text-xs text-mk-gray-400">{{ m.label }}</span>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="mt-auto pt-3">
        <div v-if="cta || demoCta" class="flex flex-wrap gap-3">
          <button
            v-if="cta"
            class="bg-mk-rust hover:bg-mk-rust-dark text-[#F5F0EB] font-body text-base font-500 px-6 py-3 transition-colors duration-200"
          >
            {{ cta }}
          </button>
          <button
            v-if="demoCta"
            class="border border-mk-rust text-mk-rust hover:bg-mk-rust hover:text-[#F5F0EB] font-body text-base font-500 px-6 py-3 transition-all duration-200"
          >
            {{ demoCta }}
          </button>
        </div>
        <span
          v-else
          class="font-body text-base text-mk-rust opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center"
        >
          Читать кейс
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  metrics: { value: string; label: string }[]
  tags?: string[]
  image?: string
  link?: string
  badge?: string
  cta?: string
  demoCta?: string
  size?: 'featured' | 'medium' | 'small'
}

withDefaults(defineProps<Props>(), {
  size: 'small',
})
</script>
