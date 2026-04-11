<template>
  <article
    class="service-card group flex flex-col px-6 md:px-8 py-8 md:py-10 transition-all duration-300 cursor-default bg-[#E8E0D2]/5 border border-[#E8E0D2]/10 hover:border-[#E8E0D2]/20 hover:bg-[#E8E0D2]/8"
    style="box-shadow: 0 0 0 transparent; transition: box-shadow 0.3s ease, border-color 0.3s, background 0.3s;"
    @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'"
    @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent'"
  >
    <!-- Top: Title + Description -->
    <div class="flex-1">
      <h3 class="font-display text-xl md:text-2xl font-600 text-[#E8E0D2]/90 mb-3">
        {{ title }}
      </h3>
      <p class="font-body text-base text-[#E8E0D2]/50 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <!-- Bottom: Price + hover CTA -->
    <div class="mt-auto pt-6 flex items-end justify-between gap-4">
      <span class="font-display text-base font-600 text-mk-rust">{{ price }}</span>
      <span class="font-body text-sm text-[#E8E0D2]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
        Подробнее
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  price: string
  icon?: string
}

defineProps<Props>()
</script>
