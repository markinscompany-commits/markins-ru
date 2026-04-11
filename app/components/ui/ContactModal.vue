<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-100 flex items-center justify-center p-4"
        @keydown.esc="close"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-mk-black/40 backdrop-blur-sm"
          @click="close"
        />

        <!-- Modal -->
        <div
          ref="modalRef"
          class="relative bg-[#F5F0EB] border border-mk-gray-200 w-full max-w-md p-6 md:p-8 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Обсудить задачу"
        >
          <!-- Close button -->
          <button
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-mk-gray-400 hover:text-mk-black transition-colors"
            aria-label="Закрыть"
            @click="close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M2 2L14 14M14 2L2 14" />
            </svg>
          </button>

          <!-- Success state -->
          <div v-if="submitted" class="text-center py-8">
            <div class="w-14 h-14 bg-green-50 flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-600 text-mk-black mb-2">Заявка отправлена</h3>
            <p class="font-body text-base text-mk-gray-500">Свяжемся с вами в течение часа</p>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submit">
            <h3 class="font-display text-xl font-600 text-mk-black mb-6">
              Обсудить задачу
            </h3>

            <div class="flex flex-col gap-4">
              <input
                v-model="form.company"
                type="text"
                placeholder="Компания"
                class="modal-input"
              />

              <input
                v-model="form.name"
                type="text"
                placeholder="Имя"
                required
                class="modal-input"
              />

              <input
                v-model="form.position"
                type="text"
                placeholder="Должность"
                class="modal-input"
              />

              <input
                v-model="form.phone"
                type="tel"
                placeholder="+7 ___ ___ __ __"
                required
                class="modal-input"
                @input="onPhoneInput"
              />

              <textarea
                v-model="form.task"
                placeholder="Расскажите о задаче"
                rows="3"
                class="modal-input resize-none"
              />

              <!-- Privacy checkbox -->
              <label class="flex items-start gap-2.5 cursor-pointer">
                <input
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="mt-1 w-4 h-4 rounded border-mk-gray-300 accent-mk-rust shrink-0"
                />
                <span class="font-body text-sm text-mk-gray-400 leading-relaxed">
                  Даю согласие на обработку
                  <NuxtLink to="/privacy" class="underline hover:text-mk-gray-600" @click.stop>персональных данных</NuxtLink>
                </span>
              </label>

              <button
                type="submit"
                :disabled="!form.privacy"
                class="bg-mk-rust hover:bg-mk-rust-dark disabled:opacity-40 disabled:cursor-not-allowed text-[#F5F0EB] font-body font-500 text-base py-3.5 transition-colors duration-200 mt-1"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalRef = ref<HTMLElement>()
const submitted = ref(false)

const form = reactive({
  company: '',
  name: '',
  position: '',
  phone: '',
  task: '',
  privacy: false,
})

function close() {
  emit('update:modelValue', false)
  setTimeout(() => {
    submitted.value = false
    form.company = ''
    form.name = ''
    form.position = ''
    form.phone = ''
    form.task = ''
    form.privacy = false
  }, 300)
}

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

function onPhoneInput(e: Event) {
  const input = e.target as HTMLInputElement
  form.phone = formatPhone(input.value)
}

function submit() {
  submitted.value = true
}

// Stop/start Lenis on modal toggle
watch(() => props.modelValue, (open) => {
  const lenis = useLenis().instance()
  if (open) lenis?.stop()
  else lenis?.start()
})

// Close on Escape
onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.modelValue) close()
  }
  window.addEventListener('keydown', handleEsc)
  onBeforeUnmount(() => window.removeEventListener('keydown', handleEsc))
})
</script>

<style scoped>
.modal-input {
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
.modal-input::placeholder {
  color: #A3A3A2;
}
.modal-input:focus {
  border-color: #BC6A56;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
}
</style>
