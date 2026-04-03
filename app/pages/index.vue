<template>
  <div class="min-h-screen bg-mk-black relative overflow-hidden">

    <!-- Animated background grid -->
    <div class="absolute inset-0 grid-bg opacity-0" ref="gridRef"></div>

    <!-- Floating particles -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        v-for="i in 6"
        :key="i"
        class="particle absolute rounded-full bg-mk-beige"
        :ref="(el) => { if (el) particleRefs[i - 1] = el as HTMLElement }"
      ></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-5">

      <!-- Star logo -->
      <div ref="logoRef" class="mb-6 opacity-0">
        <svg class="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 444 444" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M222.21 442C222.21 320.511 322.868 222 444 222C322.932 222 222.21 123.47 222.21 2C222.21 123.47 122.074 222.025 1 222.025C122.081 222.025 222.21 320.511 222.21 442Z"
            fill="rgba(213,205,186,0.35)" />
        </svg>
      </div>

      <!-- Wordmark (text only, no icon) -->
      <div ref="wordmarkRef" class="opacity-0 mb-4">
        <svg class="h-5 md:h-6 w-auto" viewBox="128 29 450 43" fill="none" style="opacity: 0.4">
          <path d="M457.698 69.5985C457.698 70.3159 457.118 70.8973 456.4 70.8973H438.116C437.398 70.8973 436.818 70.3159 436.818 69.5985V67.5455C436.818 66.3429 435.323 65.7864 434.537 66.6959L431.289 70.4484C431.043 70.7334 430.685 70.8973 430.308 70.8973H398.093C397.375 70.8973 396.793 70.3159 396.793 69.5985V62.1954V58.6214V55.203V31.0175C396.793 30.3004 397.375 29.7188 398.093 29.7188H416.378C417.096 29.7188 417.675 30.3004 417.675 31.0175V54.0594C417.675 54.7768 418.258 55.3582 418.976 55.3582H429.891C430.268 55.3582 430.625 55.1949 430.872 54.9104L436.499 48.4211C436.705 48.1848 436.818 47.8828 436.818 47.5701V31.0175C436.818 30.3004 437.398 29.7188 438.116 29.7188H456.4C457.118 29.7188 457.698 30.3004 457.698 31.0175V69.5985Z" fill="#D5CDBA"/>
          <path d="M522.681 69.5985C522.681 70.3159 522.101 70.8973 521.383 70.8973H503.099C502.381 70.8973 501.798 70.3159 501.798 69.5985V64.9179C501.798 64.2007 501.218 63.6193 500.501 63.6193H483.955C483.24 63.6193 482.658 64.2007 482.658 64.9179V69.5985C482.658 70.3159 482.075 70.8973 481.36 70.8973H463.076C462.358 70.8973 461.775 70.3159 461.775 69.5985V62.1954V58.6214V55.203V31.0175C461.775 30.3004 462.358 29.7188 463.076 29.7188H481.36C482.075 29.7188 482.658 30.3004 482.658 31.0175V52.4767C482.658 53.1938 483.24 53.7755 483.955 53.7755H495.464H500.501C501.218 53.7755 501.798 53.1938 501.798 52.4767V31.0175C501.798 30.3004 502.381 29.7188 503.099 29.7188H521.383C522.101 29.7188 522.681 30.3004 522.681 31.0175V69.5985Z" fill="#D5CDBA"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M164.562 39.7094C165.062 40.1786 165.84 40.1786 166.34 39.7094L176.605 30.0707C176.846 29.8445 177.164 29.7188 177.494 29.7188H201.032C201.749 29.7188 202.331 30.3001 202.331 31.0173V69.5208C202.331 70.2382 201.749 70.8195 201.032 70.8195H182.793C182.076 70.8195 181.495 70.2382 181.495 69.5208V46.5271C181.495 45.81 180.913 45.2286 180.196 45.2286H177.913C177.582 45.2286 177.263 45.3554 177.022 45.5832L166.343 55.676C165.842 56.149 165.059 56.149 164.559 55.676L153.881 45.5832C153.639 45.3554 153.32 45.2286 152.988 45.2286H150.706C149.989 45.2286 149.407 45.81 149.407 46.5271V69.5208C149.407 70.2382 148.826 70.8195 148.109 70.8195H129.87C129.153 70.8195 128.571 70.2382 128.571 69.5208V31.0173C128.571 30.3001 129.153 29.7188 129.87 29.7188H153.407C153.738 29.7188 154.056 29.8445 154.297 30.0707L164.562 39.7094Z" fill="#D5CDBA"/>
          <path d="M328.936 53.5068C328.936 54.2239 328.353 54.8053 327.635 54.8053H292.4C291.682 54.8053 291.099 55.3869 291.099 56.1041V61.2304V69.5985C291.099 70.3159 290.519 70.8973 289.802 70.8973H271.571C270.855 70.8973 270.273 70.3159 270.273 69.5985V31.0175C270.273 30.3004 270.855 29.7188 271.571 29.7188H291.099H296.515H312.689H320.778H322.889C323.317 29.7188 323.718 29.9301 323.962 30.2831L328.708 37.2056C328.854 37.4218 328.936 37.6778 328.936 37.9398V42.262V53.5068ZM293.006 40.3022C292.289 40.3022 291.709 40.8838 291.709 41.601V45.1541C291.709 45.8715 292.289 46.4529 293.006 46.4529H305.653C306.696 46.4529 307.314 45.2857 306.726 44.4237L304.309 40.8703C304.068 40.5149 303.664 40.3022 303.236 40.3022H293.006Z" fill="#D5CDBA"/>
          <path d="M207.118 47.1093C207.118 46.3919 207.7 45.8105 208.417 45.8105H243.654C244.371 45.8105 244.953 45.2291 244.953 44.512V40.6842C244.953 39.9671 244.371 39.3857 243.654 39.3857H208.417C207.7 39.3857 207.118 38.804 207.118 38.0869V31.0173C207.118 30.3001 207.7 29.7188 208.417 29.7188H264.481C265.198 29.7188 265.779 30.3001 265.779 31.0173V69.5985C265.779 70.3156 265.198 70.897 264.481 70.897H246.252C245.534 70.897 244.953 70.3156 244.953 69.5985V67.7471C244.953 66.5128 243.393 65.9747 242.632 66.9465L239.928 70.3991C239.682 70.7133 239.305 70.897 238.905 70.897H207.188C207.149 70.897 207.118 70.8661 207.118 70.8277V47.1093ZM238.069 60.3136C238.43 60.3136 238.775 60.1632 239.021 59.8985L242.319 56.3452C243.09 55.5143 242.501 54.1632 241.367 54.1632H229.243C228.526 54.1632 227.944 54.7446 227.944 55.4617V59.0151C227.944 59.7322 228.526 60.3136 229.243 60.3136H238.069Z" fill="#D5CDBA"/>
          <path d="M332.084 31.2207C332.084 30.5033 332.664 29.9219 333.382 29.9219H351.642C352.36 29.9219 352.942 30.5033 352.942 31.2207V40.7502C352.942 41.4673 353.522 42.0487 354.24 42.0487H368.038C368.428 42.0487 368.796 41.874 369.043 41.5725L371.836 38.1594C372.026 37.9272 372.131 37.6368 372.131 37.3369V31.2207C372.131 30.5033 372.711 29.9219 373.429 29.9219H391.667C392.393 29.9219 392.978 30.5171 392.965 31.2429L392.791 41.3389C392.786 41.7813 392.553 42.1893 392.176 42.4218L381.697 48.8908C380.974 49.3373 380.868 50.3464 381.483 50.934L392.393 61.3739C392.64 61.6118 392.786 61.9388 392.794 62.2826L392.957 69.5315C392.976 70.2603 392.388 70.8598 391.659 70.8598H373.429C372.711 70.8598 372.131 70.2785 372.131 69.5613V62.2091C372.131 61.9092 372.026 61.6185 371.836 61.3866L369.043 57.9733C368.796 57.6721 368.428 57.4971 368.038 57.4971H354.24C353.522 57.4971 352.942 58.0787 352.942 58.7958V69.4838C352.942 70.2012 352.36 70.7826 351.642 70.7826H333.382C332.664 70.7826 332.084 70.2012 332.084 69.4838V31.2207Z" fill="#D5CDBA"/>
          <path d="M532.924 30.0557L525.498 42.176C525.371 42.3803 525.306 42.6149 525.306 42.8547V57.8874C525.306 58.1269 525.371 58.3618 525.498 58.5661L532.924 70.6864C533.16 71.0717 533.58 71.3066 534.032 71.3066H575.22C575.935 71.3066 576.517 70.7249 576.517 70.0078V62.0815C576.517 61.3644 575.935 60.783 575.22 60.783H551.01C550.675 60.783 550.349 60.6524 550.108 60.4189L548.179 58.559C547.927 58.3141 547.784 57.9768 547.784 57.6244V55.3202V45.2049V43.1175C547.784 42.765 547.927 42.4277 548.179 42.1831L550.108 40.3232C550.349 40.0897 550.675 39.9591 551.01 39.9591H575.756C576.474 39.9591 577.057 39.3777 577.057 38.6603V30.7341C577.057 30.0169 576.474 29.4355 575.756 29.4355H534.032C533.58 29.4355 533.16 29.6704 532.924 30.0557Z" fill="#D5CDBA"/>
        </svg>
      </div>

      <!-- Slogan -->
      <p ref="sloganRef" class="font-display font-400 mb-8 opacity-0 text-center leading-snug" style="font-size: clamp(1.6rem, 5vw, 3rem)">
        <span class="text-mk-beige/80">На стыке </span>
        <span class="text-mk-rust font-500">технологий</span>
        <br>
        <span class="text-mk-beige/80">и здравого смысла</span>
      </p>

      <!-- Under construction badge -->
      <div ref="badgeRef" class="opacity-0 mb-8">
        <div class="inline-flex items-center gap-2.5 bg-mk-beige/8 border border-mk-beige/15 rounded-full px-5 py-2.5">
          <span class="w-2 h-2 rounded-full bg-mk-green animate-pulse"></span>
          <span class="font-body text-mk-beige/70 text-3 md:text-3.5 font-500">Сайт в разработке</span>
        </div>
      </div>

      <!-- Contact buttons -->
      <div ref="contactsRef" class="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 opacity-0">
        <a href="https://wa.me/79898966950" target="_blank" rel="noopener"
           class="contact-btn contact-whatsapp">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <a href="https://t.me/kaitmazovmark" target="_blank" rel="noopener"
           class="contact-btn contact-telegram">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span>Telegram</span>
        </a>

        <a href="https://max.ru/u/f9LHodD0cOISzk20IOL2rGz8wi48hOhVtC_ZXmmj3wp02ulnC98uyaQWWsU" target="_blank" rel="noopener"
           class="contact-btn contact-max">
          <svg class="w-5 h-5" viewBox="100 100 800 800" fill="currentColor">
            <path fill-rule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clip-rule="evenodd"/>
          </svg>
          <span>MAX</span>
        </a>

        <a href="tel:+79898966950"
           class="contact-btn contact-phone">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>Позвонить</span>
        </a>

        <!-- Request button (opens modal) -->
        <button @click="showModal = true" class="contact-btn contact-request">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span>Оставить заявку</span>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer ref="footerRef" class="relative z-10 text-center py-8 opacity-0">
      <div class="flex items-center justify-center gap-4 mb-3">
        <NuxtLink to="/privacy" class="font-body text-mk-beige/25 text-2.5 md:text-3 hover:text-mk-beige/50 transition-colors duration-300">
          Политика конфиденциальности
        </NuxtLink>
      </div>
      <p class="font-body text-mk-beige/25 text-2.5 md:text-3">
        &copy; 2026 markins. Все права защищены
      </p>
    </footer>

    <!-- Modal overlay -->
    <Teleport to="body">
      <Transition name="backdrop">
        <div v-if="showModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5" @click.self="showModal = false">
          <Transition name="popup">
            <div v-if="showModal" class="modal-card">
              <!-- Close button -->
              <button @click="showModal = false" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-mk-beige/40 hover:text-mk-beige hover:bg-mk-beige/10 transition-all duration-200">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <h2 class="font-display text-mk-beige text-5 md:text-6 font-600 mb-2">Оставить заявку</h2>
              <p class="font-body text-mk-beige/40 text-3.5 mb-6">Расскажите о вашей задаче — мы свяжемся</p>

              <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
                <input v-model="form.company" type="text" placeholder="Название компании" class="form-input" />
                <input v-model="form.name" type="text" placeholder="Ваше имя" class="form-input" required />
                <input v-model="form.position" type="text" placeholder="Должность" class="form-input" />
                <input v-model="form.phone" type="tel" placeholder="Номер телефона" class="form-input" required />
                <textarea v-model="form.task" placeholder="Опишите задачу" rows="3" class="form-input form-textarea"></textarea>

                <!-- Privacy policy checkbox -->
                <label class="flex items-start gap-2.5 cursor-pointer mt-1">
                  <input v-model="form.privacy" type="checkbox" required class="mt-1 accent-mk-beige w-4 h-4 shrink-0" />
                  <span class="font-body text-mk-beige/40 text-2.8 leading-snug">
                    Нажимая кнопку, вы соглашаетесь с
                    <NuxtLink to="/privacy" target="_blank" class="text-mk-beige/60 underline underline-offset-2 hover:text-mk-beige transition-colors">политикой конфиденциальности</NuxtLink>
                  </span>
                </label>

                <button type="submit" class="form-submit mt-1" :disabled="submitted">
                  <span v-if="!submitted">Отправить</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Отправлено
                  </span>
                </button>
              </form>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const logoRef = ref<HTMLElement>()
const wordmarkRef = ref<HTMLElement>()
const sloganRef = ref<HTMLElement>()
const badgeRef = ref<HTMLElement>()
const contactsRef = ref<HTMLElement>()
const footerRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()
const particleRefs = ref<HTMLElement[]>([])

const showModal = ref(false)
const submitted = ref(false)

const form = reactive({
  company: '',
  name: '',
  position: '',
  phone: '',
  task: '',
  privacy: false,
})

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    showModal.value = false
    form.company = ''
    form.name = ''
    form.position = ''
    form.phone = ''
    form.task = ''
    form.privacy = false
  }, 2000)
}

onMounted(() => {
  if (!import.meta.client) return
  const { gsap } = useGsap()

  // Animate background grid
  if (gridRef.value) {
    gsap.to(gridRef.value, { opacity: 1, duration: 2, delay: 0.2, ease: 'power2.out' })
  }

  // Floating particles
  particleRefs.value.forEach((el, i) => {
    const size = 2 + Math.random() * 4
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    gsap.set(el, { width: size, height: size, x, y, opacity: 0.08 + Math.random() * 0.15 })
    gsap.to(el, {
      y: y - 100 - Math.random() * 200,
      x: x + (Math.random() - 0.5) * 100,
      duration: 8 + Math.random() * 12,
      repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.8,
    })
  })

  // Main timeline
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (logoRef.value) {
    tl.fromTo(logoRef.value, { opacity: 0, scale: 0.5, rotation: -180 }, { opacity: 1, scale: 1, rotation: 0, duration: 1.2 })
  }
  if (wordmarkRef.value) {
    tl.fromTo(wordmarkRef.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
  }
  if (sloganRef.value) {
    tl.fromTo(sloganRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
  }
  if (badgeRef.value) {
    tl.fromTo(badgeRef.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
  }
  if (contactsRef.value) {
    tl.fromTo(contactsRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
  }
  if (footerRef.value) {
    tl.fromTo(footerRef.value, { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3')
  }
})
</script>

<style scoped>
/* Animated grid background */
.grid-bg {
  background-image:
    linear-gradient(rgba(213, 205, 186, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(213, 205, 186, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%);
}

/* Contact buttons — base */
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 12px;
  font-family: 'Commissioner', sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-width: 150px;
  justify-content: center;
  border: 1px solid transparent;
  cursor: pointer;
}
.contact-btn:hover {
  transform: translateY(-2px);
}

/* WhatsApp — green */
.contact-whatsapp {
  background: rgba(37, 211, 102, 0.1);
  border-color: rgba(37, 211, 102, 0.2);
  color: #25D366;
}
.contact-whatsapp:hover {
  background: rgba(37, 211, 102, 0.18);
  border-color: rgba(37, 211, 102, 0.35);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.1);
}

/* Telegram — blue */
.contact-telegram {
  background: rgba(38, 165, 227, 0.1);
  border-color: rgba(38, 165, 227, 0.2);
  color: #26A5E4;
}
.contact-telegram:hover {
  background: rgba(38, 165, 227, 0.18);
  border-color: rgba(38, 165, 227, 0.35);
  box-shadow: 0 8px 30px rgba(38, 165, 227, 0.1);
}

/* MAX — violet */
.contact-max {
  background: rgba(119, 87, 189, 0.1);
  border-color: rgba(119, 87, 189, 0.2);
  color: #7757BD;
}
.contact-max:hover {
  background: rgba(119, 87, 189, 0.18);
  border-color: rgba(119, 87, 189, 0.35);
  box-shadow: 0 8px 30px rgba(119, 87, 189, 0.1);
}

/* Phone — beige */
.contact-phone {
  background: rgba(213, 205, 186, 0.06);
  border-color: rgba(213, 205, 186, 0.12);
  color: #D5CDBA;
}
.contact-phone:hover {
  background: rgba(213, 205, 186, 0.12);
  border-color: rgba(213, 205, 186, 0.25);
  box-shadow: 0 8px 30px rgba(213, 205, 186, 0.06);
}

/* Request — rust accent */
.contact-request {
  background: rgba(188, 106, 86, 0.12);
  border-color: rgba(188, 106, 86, 0.25);
  color: #BC6A56;
}
.contact-request:hover {
  background: rgba(188, 106, 86, 0.2);
  border-color: rgba(188, 106, 86, 0.4);
  box-shadow: 0 8px 30px rgba(188, 106, 86, 0.12);
}

/* Modal card */
.modal-card {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: #131316;
  border: 1px solid rgba(213, 205, 186, 0.1);
  border-radius: 16px;
  padding: 32px;
  max-height: 90vh;
  overflow-y: auto;
}

/* Form inputs */
.form-input {
  width: 100%;
  height: 48px;
  padding: 0 18px;
  background: rgba(213, 205, 186, 0.05);
  border: 1px solid rgba(213, 205, 186, 0.12);
  border-radius: 10px;
  font-family: 'Commissioner', sans-serif;
  font-size: 14px;
  color: #ECEBE4;
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
}
.form-input::placeholder {
  color: rgba(213, 205, 186, 0.3);
}
.form-input:focus {
  border-color: rgba(213, 205, 186, 0.35);
  background: rgba(213, 205, 186, 0.08);
  box-shadow: 0 0 0 3px rgba(213, 205, 186, 0.06);
}
.form-textarea {
  height: auto;
  min-height: 80px;
  padding: 14px 18px;
  resize: vertical;
  line-height: 1.5;
}

/* Submit button */
.form-submit {
  width: 100%;
  height: 48px;
  background: #D5CDBA;
  color: #09090B;
  border: none;
  border-radius: 10px;
  font-family: 'Unbounded', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.form-submit:hover:not(:disabled) {
  background: #E5D4AD;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(213, 205, 186, 0.15);
}
.form-submit:disabled {
  background: rgba(145, 189, 87, 0.9);
  color: white;
  cursor: default;
}

/* Transitions */
.backdrop-enter-active { transition: opacity 0.3s ease; }
.backdrop-leave-active { transition: opacity 0.2s ease; }
.backdrop-enter-from, .backdrop-leave-to { opacity: 0; }

.popup-enter-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease; }
.popup-leave-active { transition: transform 0.2s ease, opacity 0.2s ease; }
.popup-enter-from { opacity: 0; transform: scale(0.95) translateY(10px); }
.popup-leave-to { opacity: 0; transform: scale(0.97); }

/* Particle */
.particle { will-change: transform; }
</style>
