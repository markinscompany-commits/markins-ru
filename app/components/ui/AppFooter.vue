<template>
  <footer class="bg-mk-black text-mk-white">
    <div class="container py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <!-- Left: Logo + description -->
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="flex items-center gap-2 w-fit" aria-label="Markins">
            <svg class="w-6 h-6 text-mk-white" viewBox="0 0 444 444" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M222.21 442C222.21 320.511 322.868 222 444 222C322.932 222 222.21 123.47 222.21 2C222.21 123.47 122.074 222.025 1 222.025C122.081 222.025 222.21 320.511 222.21 442Z" />
            </svg>
            <span class="font-display text-base font-600 text-mk-white">МАРКИНС</span>
          </NuxtLink>
          <p class="font-body text-base text-white/40 leading-relaxed max-w-xs">
            Технологическая компания. Внедряем цифровые решения и нейросети для бизнеса.
          </p>
        </div>

        <!-- Center: Navigation -->
        <div class="flex flex-col gap-3">
          <span class="font-display text-sm font-500 text-white/30 uppercase tracking-wider mb-1">Навигация</span>
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="font-body text-base text-white/50 hover:text-white transition-colors w-fit"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right: Contacts -->
        <div class="flex flex-col gap-3">
          <span class="font-display text-sm font-500 text-white/30 uppercase tracking-wider mb-1">Контакты</span>
          <a href="mailto:info@markins.ru" class="font-body text-base text-white/50 hover:text-white transition-colors">
            info@markins.ru
          </a>
          <a href="tel:+79898966950" class="font-body text-base text-white/50 hover:text-white transition-colors">
            +7 989 896 69 50
          </a>
          <div class="flex items-center gap-5 mt-2">
            <a href="https://t.me/markins_co" target="_blank" rel="noopener" class="text-white/30 hover:text-white transition-colors text-base font-body">
              Telegram
            </a>
            <a href="https://wa.me/79898966950" target="_blank" rel="noopener" class="text-white/30 hover:text-white transition-colors text-base font-body">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span class="font-body text-sm text-white/25">&copy; 2026 Markins. Все права защищены.</span>
        <NuxtLink to="/privacy" class="font-body text-sm text-white/25 hover:text-white/50 transition-colors">
          Политика конфиденциальности
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Кейсы', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]
</script>
