<template>
  <div ref="mainContent">
    <!-- Contact Modal -->
    <UiContactModal v-model="contactOpen" />

    <!-- Cookie Banner -->
    <UiCookieBanner />

    <!-- ===== BLOCK 1: Hero (BLACK bg) ===== -->
    <section class="relative min-h-screen flex flex-col bg-mk-black overflow-hidden">
      <!-- Animated grid background -->
      <div class="absolute inset-0 hero-grid-bg"></div>
      <!-- Floating star particles — blurred light points -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          v-for="i in 8"
          :key="i"
          class="hero-star absolute"
          :style="{
            top: starPositions[i-1].top,
            left: starPositions[i-1].left,
            width: starPositions[i-1].size + 'px',
            height: starPositions[i-1].size + 'px',
          }"
          :class="'hero-star-' + i"
        />
      </div>

      <div class="container relative z-10 flex-1 flex flex-col justify-end pb-10 md:pb-12">
        <div class="max-w-5xl mx-auto w-full">
          <!-- Subtitle pills — ABOVE heading -->
          <div class="flex flex-row flex-wrap items-center gap-3 mb-8">
            <span
              v-for="(word, i) in subtitleWords"
              :key="i"
              class="font-body text-[11px] sm:text-xs font-500 text-[#E8E0D2]/35 tracking-[0.2em] uppercase border border-[#E8E0D2]/12 px-3 py-1 inline-block"
            >{{ word }}</span>
          </div>

          <!-- H1 — split into 2 lines, red comma -->
          <h1 class="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-600 leading-[1.0] tracking-tight text-[#E8E0D2]/85">
            Айтишники<span class="text-mk-rust">,</span><br>которым не нужно<br>объяснять дважды
          </h1>
        </div>
      </div>

      <!-- Client logos marquee with fade edges -->
      <div class="relative pb-10 pt-6">
        <div class="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-mk-black to-transparent z-10 pointer-events-none" />
        <div class="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-mk-black to-transparent z-10 pointer-events-none" />
        <UiClientLogos />
      </div>
    </section>

    <!-- ===== BLOCK 2: Cases (beige bg) ===== -->
    <section id="cases" class="py-24 md:py-32 bg-mk-bg">
      <div class="container">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-600 text-mk-black mb-14 md:mb-20">
          Проекты
        </h2>

        <!-- Bento Grid: 5 cases only -->
        <div class="bento-grid">
          <!-- Row 1: Featured (2col) + Medium -->
          <div class="bento-featured">
            <UiCaseCard
              :title="cases[0].title"
              :description="cases[0].description"
              :metrics="cases[0].metrics"
              :tags="cases[0].tags"
              :link="cases[0].link"
              :badge="cases[0].badge"
              size="featured"
            />
          </div>
          <div class="bento-r1-right">
            <UiCaseCard
              :title="cases[1].title"
              :description="cases[1].description"
              :metrics="cases[1].metrics"
              :tags="cases[1].tags"
              :link="cases[1].link"
              size="medium"
            />
          </div>

          <!-- Row 2: 3 small cards -->
          <div class="bento-r2-left">
            <UiCaseCard
              :title="cases[2].title"
              :description="cases[2].description"
              :metrics="cases[2].metrics"
              :tags="cases[2].tags"
              size="small"
            />
          </div>
          <div class="bento-r2-mid">
            <UiCaseCard
              :title="cases[3].title"
              :description="cases[3].description"
              :metrics="cases[3].metrics"
              :tags="cases[3].tags"
              :link="cases[3].link"
              size="small"
            />
          </div>
          <div class="bento-r2-right">
            <UiCaseCard
              :title="cases[4].title"
              :description="cases[4].description"
              :metrics="cases[4].metrics"
              :tags="cases[4].tags"
              size="small"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BLOCK 3: CTA (BLACK section bg + rust card inside) ===== -->
    <section class="bg-mk-black py-16 md:py-24">
      <div class="container">
        <div
          class="flex flex-col items-center text-center gap-6 px-8 md:px-12 py-16 md:py-20"
          style="background: linear-gradient(135deg, #1A1814 0%, #2A2622 50%, #3D352B 100%); border: 1px solid rgba(245,240,235,0.12);"
        >
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-600 text-[#E8E0D2]/90">
            Расскажите вашу ситуацию
          </h2>
          <p class="font-body text-base text-[#E8E0D2]/60 max-w-xl">
            Если у вас есть задача, которую сложно описать в двух словах — заполните бриф, и мы всё разберём
          </p>
          <a
            href="#contacts"
            class="cta-fill-btn inline-block font-body text-base font-500 px-8 py-4 transition-all duration-300 shrink-0 relative overflow-hidden mt-2"
          >
            <span class="relative z-10">Заполнить бриф</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== BLOCK 4: Markiz (dedicated section) ===== -->
    <section id="markiz" class="py-24 md:py-32 bg-mk-bg">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <!-- Left: Text -->
          <div>
            <!-- Markiz "profile card" header: avatar + name + role -->
            <div class="flex items-center gap-5 mb-8">
              <!-- Markiz avatar — real image from markiz repo -->
              <img
                src="/markiz-avatar.png"
                alt="Маркиз"
                class="w-20 h-20 md:w-24 md:h-24 shrink-0 object-cover rounded-full"
              />
              <div>
                <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-600 text-mk-black leading-none">
                  {{ markiz.title }}
                </h2>
                <p class="font-body text-sm text-mk-gray-500 mt-2">
                  Разработано в markins
                </p>
              </div>
            </div>
            <p class="font-body text-base text-mk-gray-500 leading-relaxed mb-8">
              {{ markiz.description }}
            </p>

            <!-- Integration logos -->
            <div class="flex flex-wrap gap-3 mb-10">
              <span
                v-for="integration in markiz.integrations"
                :key="integration"
                class="font-body text-sm font-500 text-mk-gray-500 bg-mk-gray-100 px-4 py-2"
              >
                {{ integration }}
              </span>
            </div>

            <!-- CTAs — text links only -->
            <div class="flex flex-wrap gap-8">
              <a href="#" class="font-body text-base font-500 text-mk-gray-500 hover:text-mk-black transition-colors duration-200">
                {{ markiz.ctaPrimary }}
              </a>
              <button
                class="font-body text-base font-500 text-mk-rust hover:text-mk-rust-dark transition-colors duration-200"
                @click="contactOpen = true"
              >
                {{ markiz.ctaSecondary }}
              </button>
            </div>
          </div>

          <!-- Right: Screenshot placeholder (4:3 aspect ratio) -->
          <div class="bg-mk-gray-100 aspect-[4/3] flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-mk-gray-300 mx-auto mb-3" viewBox="0 0 444 444" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M222.21 442C222.21 320.511 322.868 222 444 222C322.932 222 222.21 123.47 222.21 2C222.21 123.47 122.074 222.025 1 222.025C122.081 222.025 222.21 320.511 222.21 442Z" />
              </svg>
              <span class="font-body text-base text-mk-gray-400">Скриншот платформы</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BLOCK 5: Services (BLACK bg) ===== -->
    <section id="services" class="py-24 md:py-32 bg-mk-black">
      <div class="container">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-600 text-[#E8E0D2]/90 mb-14 md:mb-20">
          Услуги
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UiServiceCard
            v-for="(s, i) in services"
            :key="i"
            :title="s.title"
            :description="s.description"
            :price="s.price"
          />

          <!-- Non-standard requests block — spans 2 remaining cells, clickable -->
          <div
            class="md:col-span-2 flex flex-col justify-between px-8 py-8 cursor-pointer transition-all duration-300"
            style="background: linear-gradient(135deg, #161310 0%, #28231D 50%, #3D3528 100%); border: 1px solid rgba(232,224,210,0.15);"
            @click="contactOpen = true"
          >
            <div>
              <h3 class="font-display text-xl md:text-2xl font-600 text-[#E8E0D2]/90 mb-3">
                Работаем с нестандартными запросами
              </h3>
              <p class="font-body text-base text-[#E8E0D2]/50 leading-relaxed">
                Если вашу задачу нет в списке — это не значит, что мы не можем помочь. Расскажите, и мы предложим решение.
              </p>
            </div>
            <span class="cta-fill-btn mt-6 inline-block font-body text-base font-500 px-6 py-3 self-start relative overflow-hidden transition-all duration-300">
              <span class="relative z-10">Оставить заявку</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BLOCK 6: How We Work — Horizontal BPMN flowchart (beige bg) ===== -->
    <section id="process" class="py-24 md:py-32 bg-mk-bg">
      <div class="container">
        <div class="flex items-center justify-between mb-14 md:mb-20">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-600 text-mk-black">
            Как мы работаем
          </h2>
          <!-- Swipe hint — hand gesture -->
          <span class="hidden md:inline-flex items-center gap-2 font-body text-sm text-mk-gray-400">
            <span class="swipe-hand inline-block">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V5a2 2 0 0 0-4 0v5M10 10V6a2 2 0 0 0-4 0v8c0 4 3 7 7 7h1a5 5 0 0 0 5-5v-4a2 2 0 0 0-4 0" />
              </svg>
            </span>
          </span>
        </div>
      </div>

      <!-- Horizontal scroll container with drag support -->
      <div
        class="bpmn-scroll-container bg-mk-gray-100"
        ref="bpmnContainer"
        @mousedown="onBpmnDragStart"
        @mousemove="onBpmnDragMove"
        @mouseup="onBpmnDragEnd"
        @mouseleave="onBpmnDragEnd"
      >
        <div class="bpmn-track">
          <!-- SVG connector lines behind elements -->
          <svg class="bpmn-line-svg" :viewBox="`0 0 ${bpmnTrackWidth} ${bpmnTrackHeight}`" preserveAspectRatio="none">
            <!-- Main horizontal path -->
            <path
              :d="bpmnMainPath"
              fill="none"
              stroke="#D4CFC9"
              stroke-width="2"
              stroke-dasharray="8 6"
              class="bpmn-animated-path"
            />
            <!-- NO branch from "Подходит?" up to red end circle -->
            <path
              :d="bpmnNoBranchPath"
              fill="none"
              stroke="#D4CFC9"
              stroke-width="2"
              stroke-dasharray="8 6"
              class="bpmn-animated-path"
            />
            <!-- Loop: Тестирование → Корректировки → Разработка -->
            <path
              :d="bpmnLoopPath"
              fill="none"
              stroke="#D4CFC9"
              stroke-width="2"
              stroke-dasharray="8 6"
              class="bpmn-animated-path"
            />
            <!-- NO branch from "Поддержка?" down to end -->
            <path
              :d="bpmnSupportNoBranchPath"
              fill="none"
              stroke="#D4CFC9"
              stroke-width="2"
              stroke-dasharray="8 6"
              class="bpmn-animated-path"
            />
            <!-- No arrowheads — dashed line is enough -->
          </svg>

          <!-- BPMN nodes on main row -->
          <div
            v-for="(node, i) in bpmnNodes"
            :key="node.id"
            class="bpmn-node-wrapper"
            :style="{ left: `${node.x}px`, top: `${node.y}px` }"
            @click="openStepDetail(node.stepIndex)"
          >
            <div
              class="bpmn-shape transition-all duration-200 cursor-pointer"
              :class="[
                node.shape === 'circle-start' ? 'bpmn-circle bpmn-start' : '',
                node.shape === 'circle-end' ? 'bpmn-circle bpmn-end' : '',
                node.shape === 'diamond' ? 'bpmn-diamond' : '',
                node.shape === 'rectangle' ? 'bpmn-rect' : '',
                hoveredStep === node.stepIndex ? 'bpmn-hover' : '',
              ]"
              @mouseenter="hoveredStep = node.stepIndex"
              @mouseleave="hoveredStep = null"
            >
              <span class="bpmn-shape-label">{{ node.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step detail popup -->
      <Teleport to="body">
        <Transition name="step-popup">
          <div
            v-if="activeStep !== null"
            class="fixed inset-0 z-100 flex items-center justify-center p-4"
            @click.self="activeStep = null"
            @keydown.esc="activeStep = null"
          >
            <div class="absolute inset-0 bg-mk-black/30 backdrop-blur-sm" @click="activeStep = null" />
            <div class="relative bg-[#F5F0EB] border border-mk-gray-200 w-full max-w-sm p-6 md:p-8 shadow-2xl">
              <button
                class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-mk-gray-400 hover:text-mk-black transition-colors"
                @click="activeStep = null"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M2 2L14 14M14 2L2 14" />
                </svg>
              </button>
              <div class="flex items-center gap-3 mb-4">
                <span class="font-display text-3xl font-700 text-mk-gray-300">{{ allStepDescriptions[activeStep].number }}</span>
              </div>
              <h3 class="font-display text-xl font-600 text-mk-black mb-3">{{ allStepDescriptions[activeStep].title }}</h3>
              <p class="font-body text-base text-mk-gray-500 leading-relaxed">{{ allStepDescriptions[activeStep].description }}</p>
            </div>
          </div>
        </Transition>
      </Teleport>
    </section>

    <!-- ===== BLOCK 7: Stats (BLACK bg) ===== -->
    <section class="py-20 md:py-28 bg-mk-black">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="flex flex-col gap-3"
          >
            <span class="font-display text-4xl md:text-5xl lg:text-6xl font-700 text-[#E8E0D2]/90">
              {{ stat.value }}
            </span>
            <span class="font-body text-base text-[#E8E0D2]/50 leading-relaxed">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BLOCK 8: Partners (beige bg) ===== -->
    <section class="py-20 md:py-28 bg-mk-bg">
      <div class="container">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-600 text-mk-black mb-14 md:mb-20">
          Партнёры
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <!-- Битрикс24 -->
          <div class="flex items-center justify-center h-16">
            <span class="font-display text-lg md:text-xl font-600 text-mk-gray-400">Битрикс24</span>
          </div>
          <!-- amoCRM -->
          <div class="flex items-center justify-center h-16">
            <span class="font-display text-lg md:text-xl font-600 text-mk-gray-400">amoCRM</span>
          </div>
          <!-- Wazzup24 -->
          <div class="flex items-center justify-center h-16">
            <span class="font-display text-lg md:text-xl font-600 text-mk-gray-400">Wazzup24</span>
          </div>
          <!-- Rocket Sales -->
          <div class="flex items-center justify-center h-16">
            <span class="font-display text-lg md:text-xl font-600 text-mk-gray-400">Rocket Sales</span>
          </div>
          <!-- onlinePBX -->
          <div class="flex items-center justify-center h-16">
            <span class="font-display text-lg md:text-xl font-600 text-mk-gray-400">onlinePBX</span>
          </div>
        </div>

        <p class="font-body text-sm text-mk-gray-400 mt-10 max-w-2xl">
          Мы являемся официальными партнёрами и интеграторами ведущих IT-платформ. Внедряем, настраиваем и сопровождаем.
        </p>
      </div>
    </section>

    <!-- ===== BLOCK 9: Contact Form + Footer (beige bg) ===== -->
    <section id="contacts" class="py-24 md:py-32 bg-mk-bg">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <!-- Left: Contact form -->
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-600 text-mk-black mb-3">
              Давайте обсудим ваш проект
            </h2>
            <p class="font-body text-lg text-mk-gray-500 mb-10">
              Расскажите о задаче — предложим решение и оценим сроки
            </p>

            <form class="flex flex-col gap-4" @submit.prevent="finalSubmitted = true">
              <input
                v-model="finalForm.company"
                type="text"
                placeholder="Компания"
                class="contact-input"
              />
              <input
                v-model="finalForm.name"
                type="text"
                placeholder="Имя"
                required
                class="contact-input"
              />
              <input
                v-model="finalForm.position"
                type="text"
                placeholder="Должность"
                class="contact-input"
              />
              <input
                v-model="finalForm.phone"
                type="tel"
                placeholder="+7 ___ ___ __ __"
                required
                class="contact-input"
                @input="onFinalPhoneInput"
              />
              <textarea
                v-model="finalForm.task"
                placeholder="Расскажите о задаче"
                rows="4"
                class="contact-input resize-none"
              />

              <label class="flex items-start gap-2.5 cursor-pointer">
                <input
                  v-model="finalForm.privacy"
                  type="checkbox"
                  required
                  class="mt-1 w-4 h-4 border-mk-gray-300 accent-mk-rust shrink-0"
                />
                <span class="font-body text-sm text-mk-gray-400 leading-relaxed">
                  Даю согласие на обработку
                  <NuxtLink to="/privacy" class="underline hover:text-mk-gray-600">персональных данных</NuxtLink>
                </span>
              </label>

              <button
                v-if="!finalSubmitted"
                type="submit"
                :disabled="!finalForm.privacy"
                class="bg-mk-rust hover:bg-mk-rust-dark disabled:opacity-40 disabled:cursor-not-allowed text-[#F5F0EB] font-body font-500 text-base py-3.5 transition-colors duration-200 w-full md:w-auto md:px-10 mt-2"
              >
                Отправить
              </button>
              <div v-else class="flex items-center gap-2 text-green-600 font-body text-base mt-2">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Заявка отправлена. Свяжемся в течение часа.
              </div>
            </form>
          </div>

          <!-- Right: Founders + contacts (aligned with form first input) -->
          <div class="flex flex-col gap-12 lg:pt-[210px]">
            <div>
              <h3 class="font-display text-xl font-600 text-mk-black mb-8">Напрямую</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div
                  v-for="(f, i) in founders"
                  :key="i"
                  class="flex flex-col gap-1"
                >
                  <h4 class="font-display text-base font-600 text-mk-black">{{ f.name }}</h4>
                  <span class="font-body text-sm text-mk-gray-500">{{ f.role }}</span>
                  <a :href="f.phoneHref" class="font-body text-base text-mk-gray-600 hover:text-mk-black transition-colors mt-1">
                    {{ f.phone }}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <a href="mailto:info@markins.ru" class="font-body text-base text-mk-gray-600 hover:text-mk-black transition-colors block mb-4">
                info@markins.ru
              </a>
              <div class="flex items-center gap-5">
                <a href="https://t.me/markins_co" target="_blank" rel="noopener" class="font-body text-base text-mk-gray-400 hover:text-mk-black transition-colors">
                  Telegram
                </a>
                <a href="https://wa.me/79898966950" target="_blank" rel="noopener" class="font-body text-base text-mk-gray-400 hover:text-mk-black transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>

            <!-- Invite to speak -->
            <button
              class="font-body text-base font-500 text-mk-rust hover:text-mk-rust-dark transition-colors duration-200 text-left self-start"
              @click="contactOpen = true"
            >
              Пригласить выступить
            </button>

            <!-- Copyright + Privacy — aligned with bottom of submit button -->
            <div class="mt-auto pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style="transform: translateY(4px)">
              <span class="font-body text-xs text-mk-gray-400">© 2026 markins. Все права защищены.</span>
              <NuxtLink to="/privacy" class="font-body text-xs text-mk-gray-400 hover:text-mk-gray-600 transition-colors">
                Политика конфиденциальности
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  hero,
  cases,
  markiz,
  services,
  workSteps,
  stats,
  founders,
} from '~/data/site'

// Contact modal state
const contactOpen = ref(false)

// Register with layout so header CTA opens our modal
const registerOpenContact = inject<((cb: () => void) => void) | undefined>('registerOpenContact', undefined)
if (registerOpenContact) {
  registerOpenContact(() => { contactOpen.value = true })
}

// Subtitle words for tagline treatment
const subtitleWords = ['Нейросети', 'Автоматизация', 'Разработка']

// Hero star positions
const starPositions = [
  { top: '12%', left: '8%', size: 8 },
  { top: '22%', left: '72%', size: 6 },
  { top: '55%', left: '88%', size: 10 },
  { top: '68%', left: '15%', size: 6 },
  { top: '35%', left: '55%', size: 8 },
  { top: '78%', left: '65%', size: 5 },
  { top: '18%', left: '42%', size: 6 },
  { top: '48%', left: '28%', size: 8 },
]

// ── BPMN flowchart with branching ──────────────────────
const bpmnContainer = ref<HTMLElement>()
const hoveredStep = ref<number | null>(null)
const activeStep = ref<number | null>(null)



// BPMN drag-to-scroll
const isDragging = ref(false)
const dragStartX = ref(0)
const dragScrollLeft = ref(0)

function onBpmnDragStart(e: MouseEvent) {
  if (!bpmnContainer.value) return
  isDragging.value = true
  dragStartX.value = e.pageX - bpmnContainer.value.offsetLeft
  dragScrollLeft.value = bpmnContainer.value.scrollLeft
  bpmnContainer.value.style.cursor = 'grabbing'
}
function onBpmnDragMove(e: MouseEvent) {
  if (!isDragging.value || !bpmnContainer.value) return
  e.preventDefault()
  const x = e.pageX - bpmnContainer.value.offsetLeft
  const walk = (x - dragStartX.value) * 1.5
  bpmnContainer.value.scrollLeft = dragScrollLeft.value - walk
}
function onBpmnDragEnd() {
  isDragging.value = false
  if (bpmnContainer.value) bpmnContainer.value.style.cursor = 'grab'
}

// All step descriptions for the popup (includes extra branching nodes)
const allStepDescriptions = [
  ...workSteps,
  {
    number: 'X',
    title: 'Не можем помочь',
    description: 'Честно говорим, что задача не в нашей компетенции, и рекомендуем специалистов',
    shape: 'circle' as const,
  },
  {
    number: 'C',
    title: 'Корректировки',
    description: 'Вносим правки по результатам тестирования и возвращаемся к разработке',
    shape: 'rectangle' as const,
  },
]

// BPMN layout
const NODE_W = 140 // must match .bpmn-node-wrapper width in CSS
const NODE_H_RECT = 80
const NODE_H_CIRC = 100
const GAP = 110
const FIRST_X = 60
const MAIN_Y = 240 // main row y (center of nodes)
const BRANCH_UP_Y = 80 // "no" branches go up — enough room to not clip
const BRANCH_DOWN_Y = 400 // loop branch goes down

interface BpmnNode {
  id: string
  title: string
  shape: 'circle-start' | 'circle-end' | 'rectangle' | 'diamond'
  x: number
  y: number
  stepIndex: number
}

// Build node positions on main row
// Main flow: 0-Запрос, 1-Анализ, 2-Подходит?, 3-ТЗ, 4-Согласование, 5-Разработка, 6-Тестирование, 7-Поддержка?, 8-Сопровождение, 9-Результат
const mainNodes: BpmnNode[] = workSteps.map((step, i) => ({
  id: `main-${i}`,
  title: step.title,
  shape: step.shape === 'circle'
    ? (i === 0 ? 'circle-start' : 'circle-end')
    : step.shape === 'diamond' ? 'diamond' : 'rectangle',
  x: FIRST_X + i * (NODE_W + GAP),
  y: MAIN_Y - (step.shape === 'circle' ? NODE_H_CIRC / 2 : step.shape === 'diamond' ? NODE_H_CIRC / 2 : NODE_H_RECT / 2),
  stepIndex: i,
}))

// Extra branching nodes
// "Не можем помочь" — above "Подходит?" (index 2), centered with it
const podhoditCenterX = mainNodes[2].x + NODE_W / 2
const noHelpNode: BpmnNode = {
  id: 'no-help',
  title: 'Не можем помочь',
  shape: 'circle-end',
  x: podhoditCenterX - NODE_W / 2, // position so cx() returns podhoditCenterX
  y: BRANCH_UP_Y - NODE_H_CIRC / 2,
  stepIndex: 10,
}

// "Корректировки" — below between Разработка(5) and Тестирование(6)
const correctionsNode: BpmnNode = {
  id: 'corrections',
  title: 'Корректировки',
  shape: 'rectangle',
  x: (mainNodes[5].x + mainNodes[6].x) / 2,
  y: BRANCH_DOWN_Y - NODE_H_RECT / 2,
  stepIndex: 11,
}

// "End no support" — below Поддержка?(7), centered with it
const podderzhkaCenterX = mainNodes[7].x + NODE_W / 2
const endNoSupportNode: BpmnNode = {
  id: 'end-no-support',
  title: 'Завершение',
  shape: 'circle-end',
  x: podderzhkaCenterX - NODE_W / 2,
  y: BRANCH_DOWN_Y - NODE_H_CIRC / 2,
  stepIndex: 9,
}

const bpmnNodes = [...mainNodes, noHelpNode, correctionsNode, endNoSupportNode]

const bpmnTrackWidth = mainNodes[mainNodes.length - 1].x + NODE_W + FIRST_X
// Top padding = BRANCH_UP_Y - NODE_H_CIRC/2 = 80-50 = 30
// Bottom node ends at: BRANCH_DOWN_Y + max(NODE_H_RECT, NODE_H_CIRC)/2 = 400+50 = 450
// Need same 30px bottom = 450 + 30 = 480
const bpmnTrackHeight = 480

// Center helper
function cx(node: BpmnNode) { return node.x + NODE_W / 2 }
function cy(node: BpmnNode) {
  const step = workSteps[node.stepIndex] || allStepDescriptions[node.stepIndex]
  const h = step?.shape === 'rectangle' ? NODE_H_RECT : NODE_H_CIRC
  return node.y + h / 2
}

// Main horizontal path (skips "Подходит?" NO → connects Подходит? YES → ТЗ as normal)
const bpmnMainPath = computed(() => {
  const pts = mainNodes.map(n => `${cx(n)},${MAIN_Y}`)
  return `M ${pts.join(' L ')}`
})

// "Подходит?" NO branch — goes UP to "Не можем помочь"
const bpmnNoBranchPath = computed(() => {
  const from = mainNodes[2] // Подходит?
  const to = noHelpNode
  return `M ${cx(from)},${MAIN_Y - NODE_H_CIRC / 2} L ${cx(to)},${cy(to) + NODE_H_CIRC / 2}`
})

// Loop: Тестирование → down → Корректировки → down-left → Разработка
const bpmnLoopPath = computed(() => {
  const test = mainNodes[6]
  const corr = correctionsNode
  const dev = mainNodes[5]
  return `M ${cx(test)},${MAIN_Y + NODE_H_RECT / 2} L ${cx(test)},${cy(corr)} L ${cx(corr)},${cy(corr)} L ${cx(dev)},${cy(corr)} L ${cx(dev)},${MAIN_Y + NODE_H_RECT / 2}`
})

// "Поддержка?" NO branch — goes down to end circle
const bpmnSupportNoBranchPath = computed(() => {
  const from = mainNodes[7] // Поддержка?
  const to = endNoSupportNode
  return `M ${cx(from)},${MAIN_Y + NODE_H_CIRC / 2} L ${cx(to)},${cy(to) - NODE_H_CIRC / 2}`
})

// Arrow points on main path between consecutive main nodes
const mainArrows = computed(() => {
  const arrows: string[] = []
  for (let i = 0; i < mainNodes.length - 1; i++) {
    const x1 = cx(mainNodes[i])
    const x2 = cx(mainNodes[i + 1])
    const midX = (x1 + x2) / 2
    arrows.push(`${midX - 5},${MAIN_Y - 5} ${midX + 5},${MAIN_Y} ${midX - 5},${MAIN_Y + 5}`)
  }
  return arrows
})

function openStepDetail(i: number) {
  activeStep.value = i
}

// Final form (Contact section)
const finalForm = reactive({
  company: '',
  name: '',
  position: '',
  phone: '',
  task: '',
  privacy: false,
})
const finalSubmitted = ref(false)

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''
  let formatted = '+7'
  const rest = digits.startsWith('7') ? digits.slice(1) : digits.startsWith('8') ? digits.slice(1) : digits
  if (rest.length > 0) formatted += ' ' + rest.slice(0, 3)
  if (rest.length > 3) formatted += ' ' + rest.slice(3, 6)
  if (rest.length > 6) formatted += ' ' + rest.slice(6, 8)
  if (rest.length > 8) formatted += ' ' + rest.slice(8, 10)
  return formatted
}

function onFinalPhoneInput(e: Event) {
  finalForm.phone = formatPhone((e.target as HTMLInputElement).value)
}

// Refs (no GSAP animations — everything visible immediately)
const mainContent = ref<HTMLElement>()

onMounted(() => {
  if (!import.meta.client) return

  // Apply typograf
  if (mainContent.value) {
    const { applyToElement } = useTypograf()
    applyToElement(mainContent.value)
  }

  // Stop Lenis when step popup is open
  watch(activeStep, (val) => {
    const lenis = useLenis().instance()
    if (val !== null) lenis?.stop()
    else lenis?.start()
  })
})
</script>

<style scoped>
/* ── Hero background ──────────────────────────────── */
.hero-grid-bg {
  background-image:
    linear-gradient(rgba(213, 205, 186, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(213, 205, 186, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%);
}

.hero-star {
  will-change: transform, opacity;
  border-radius: 50%;
  background: rgba(213,205,186,0.5);
  filter: blur(3px);
}

@keyframes hero-drift {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  25% { transform: translate(8px, -6px); opacity: 0.45; }
  50% { transform: translate(-4px, 10px); opacity: 0.25; }
  75% { transform: translate(12px, 4px); opacity: 0.4; }
}

/* Each star gets unique animation duration + delay for organic feel */
.hero-star-1 { animation: hero-drift 45s ease-in-out infinite; animation-delay: 0s; }
.hero-star-2 { animation: hero-drift 52s ease-in-out infinite; animation-delay: 4s; }
.hero-star-3 { animation: hero-drift 38s ease-in-out infinite; animation-delay: 8s; }
.hero-star-4 { animation: hero-drift 60s ease-in-out infinite; animation-delay: 2s; }
.hero-star-5 { animation: hero-drift 48s ease-in-out infinite; animation-delay: 6s; }
.hero-star-6 { animation: hero-drift 55s ease-in-out infinite; animation-delay: 10s; }
.hero-star-7 { animation: hero-drift 42s ease-in-out infinite; animation-delay: 3s; }
.hero-star-8 { animation: hero-drift 50s ease-in-out infinite; animation-delay: 7s; }

/* ── Bento Grid ───────────────────────────────────── */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .bento-featured {
    grid-column: span 2;
  }
  .bento-r1-right {
    grid-column: span 1;
  }
  .bento-r2-left {
    grid-column: span 1;
  }
  .bento-r2-mid {
    grid-column: span 1;
  }
  .bento-r2-right {
    grid-column: span 1;
  }
}

/* Make cards fill their grid cells */
.bento-grid > div {
  display: flex;
}
.bento-grid > div > * {
  width: 100%;
}

/* ── Markiz avatar (gradient orb) ─────────────────── */
.markiz-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 45%, #FFA041 0%, #F76A3A 25%, #C73D5A 55%, #5B2A6F 80%, transparent 100%);
  filter: blur(0.5px);
  box-shadow:
    0 0 20px rgba(247, 106, 58, 0.3),
    0 0 40px rgba(199, 61, 90, 0.2);
  animation: markiz-pulse 6s ease-in-out infinite;
}
@keyframes markiz-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
}

/* ── CTA fill button (hover slide-up fill) ───────── */
.cta-fill-btn {
  border: 1px solid rgba(245, 240, 235, 0.5);
  background: transparent;
  color: #F5F0EB;
}
.cta-fill-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #F5F0EB;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}
.cta-fill-btn:hover {
  color: #101010;
}
.cta-fill-btn:hover::before {
  transform: translateY(0);
}

/* ── Swipe hand animation ────────────────────────── */
.swipe-hand {
  animation: swipe-hint 2.5s ease-in-out infinite;
}
@keyframes swipe-hint {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-12px); }
}

/* ── BPMN Horizontal Flowchart ────────────────────── */
.bpmn-scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  cursor: grab;
  user-select: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.bpmn-scroll-container::-webkit-scrollbar {
  display: none;
}

.bpmn-track {
  position: relative;
  min-width: v-bind("bpmnTrackWidth + 'px'");
  height: v-bind("bpmnTrackHeight + 'px'");
}

.bpmn-line-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Nodes above lines */
.bpmn-node-wrapper {
  z-index: 1;
}

/* Animated dashed line */
.bpmn-animated-path {
  animation: dash-flow 1.5s linear infinite;
}
@keyframes dash-flow {
  to {
    stroke-dashoffset: -28;
  }
}

/* Node wrapper */
.bpmn-node-wrapper {
  position: absolute;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
}

/* ── Shape styles ── */
.bpmn-shape {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #D4CFC9;
}

.bpmn-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* BPMN standard colors */
.bpmn-start {
  background: #E8E3DE;
  border-color: #91BD57;
}
.bpmn-end {
  background: #E8E3DE;
  border-color: #BC6A56;
}

.bpmn-rect {
  width: 130px;
  height: 80px;
  border-radius: 0;
  background: #E8E3DE;
  border-color: rgba(46, 134, 222, 0.4);
}

.bpmn-diamond {
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
  border-radius: 0;
  background: #E8E3DE;
  border-color: rgba(243, 156, 18, 0.4);
}
.bpmn-diamond .bpmn-shape-label {
  transform: rotate(-45deg);
}

.bpmn-shape-label {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.2;
  padding: 4px;
  max-width: 110px;
}

/* Hover — single darker border, no double border */
.bpmn-hover {
  border-color: #1A1A1A !important;
}

/* ── Step popup transition ──────────────────────── */
.step-popup-enter-active,
.step-popup-leave-active {
  transition: all 0.25s ease;
}
.step-popup-enter-from,
.step-popup-leave-to {
  opacity: 0;
}

/* ── Contact Input ────────────────────────────────── */
.contact-input {
  width: 100%;
  background: #EDE8E3;
  border: 1px solid #E5E0DB;
  border-radius: 0;
  padding: 14px 16px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  color: #1A1A1A;
  transition: border-color 0.2s;
}
.contact-input::placeholder {
  color: #A3A3A2;
}
.contact-input:focus {
  border-color: #BC6A56;
}
</style>
