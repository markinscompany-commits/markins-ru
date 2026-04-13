<template>
  <div class="overflow-hidden py-6" aria-label="Наши клиенты">
    <div class="marquee">
      <div class="marquee-track">
        <div
          v-for="(logo, i) in doubled"
          :key="i"
          class="flex items-center gap-2.5 px-6 md:px-10 shrink-0 select-none"
        >
          <img
            :src="logo.src"
            :alt="logo.name"
            class="h-9 md:h-10 w-auto max-w-[140px] object-contain logo-bw"
            loading="lazy"
          />
          <span
            v-if="logo.showName"
            class="font-body text-sm text-[#E8E0D2]/40 whitespace-nowrap"
          >{{ logo.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LogoItem {
  name: string
  src: string
  showName?: boolean
}

const logos: LogoItem[] = [
  { name: 'Brabus Russia', src: '/logos/brabus.svg' },
  { name: 'Зелёное яблоко', src: '/logos/zelenoe-yabloko.svg' },
  { name: 'Get Power', src: '/logos/get-power.svg' },
  { name: 'Lampardi', src: '/logos/lampardi.svg' },
  { name: 'Ellyme', src: '/logos/ellyme.svg' },
  { name: 'My Recept', src: '/logos/myrecept.svg' },
  { name: 'Бисмар', src: '/logos/bismar.svg' },
  { name: 'Visage Hall', src: '/logos/visage-hall.svg' },
  { name: 'Мой Бизнес', src: '/logos/moy-biznes.svg' },
  { name: 'ОРТОСИТИ', src: '/logos/ortositi.svg' },
  { name: 'Gachalav Group', src: '/logos/gachalav.svg' },
  { name: 'DELO', src: '/logos/delo.svg' },
  { name: 'med art', src: '/logos/med-art.svg' },
  { name: 'Beauty Clinic', src: '/logos/beauty-clinic.svg', showName: true },
  { name: 'Лайт дизайн', src: '/logos/lait-design.svg' },
  { name: 'АРСИ Групп', src: '/logos/arsi-grupp.svg' },
  { name: 'botticelli', src: '/logos/botticelli.svg' },
  { name: 'Аист Клуб', src: '/logos/aist-club.svg' },
  { name: 'Центр слуха и речи', src: '/logos/centr-sluha.svg' },
  { name: 'Резиденция', src: '/logos/rezidenciya.svg', showName: true },
]

const doubled = [...logos, ...logos]
</script>

<style scoped>
.marquee {
  display: flex;
  width: 100%;
}

.marquee-track {
  display: flex;
  animation: marquee 60s linear infinite;
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

/* Black & white filter for all logos */
.logo-bw {
  filter: grayscale(1) brightness(0.7) invert(1);
  opacity: 0.5;
  transition: opacity 0.3s;
}
</style>
