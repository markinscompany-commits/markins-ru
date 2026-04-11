<template>
  <div ref="el" class="text-center">
    <div class="font-display text-3xl md:text-4xl font-700 text-mk-beige mb-2">
      {{ displayValue }}
    </div>
    <div class="font-body text-sm text-mk-light/50">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string | number
  label: string
  icon?: string
}

const props = defineProps<Props>()
const el = ref<HTMLElement>()
const displayValue = ref(props.value)

onMounted(() => {
  if (!el.value) return

  const { gsap, ScrollTrigger } = useGsap()

  // Parse numeric part
  const raw = String(props.value)
  const match = raw.match(/^(\d+)(.*)$/)

  if (match) {
    const target = parseInt(match[1])
    const suffix = match[2] || ''
    const counter = { val: 0 }

    displayValue.value = '0' + suffix

    gsap.to(counter, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate() {
        displayValue.value = Math.round(counter.val) + suffix
      },
    })
  }
})
</script>
