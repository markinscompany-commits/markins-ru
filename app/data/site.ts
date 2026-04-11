export interface CaseItem {
  id: string
  tag: string
  tags: string[]
  title: string
  description: string
  metrics: { value: string; label: string }[]
  image?: string
  link?: string
  badge?: string
  cta?: string
  demoCta?: string
  size: 'featured' | 'medium' | 'small'
}

export interface ServiceItem {
  title: string
  description: string
  price: string
  icon?: string
  link?: string
}

export interface StatItem {
  value: string
  label: string
}

export interface WorkStep {
  number: string
  title: string
  description: string
  shape: 'circle' | 'rectangle' | 'diamond'
}

export interface Founder {
  name: string
  role: string
  phone: string
  phoneHref: string
}

export interface SpeakingItem {
  title: string
  description: string
  type: string
}

// ── Hero ──────────────────────────────────────────────
export const hero = {
  heading: 'Айтишники, которым не нужно объяснять дважды',
  subtitle: 'Нейросети. Автоматизация. Разработка.',
  cta: 'Обсудить задачу',
}

// ── Client logos ──────────────────────────────────────
export const clientLogos = [
  'Мавадда',
  'Лайт',
  'Cargo №1',
  'Salon Interiors',
  'АРСИ',
  'med art',
  'Aistclub',
  'botticelli',
  'Астрамед',
  'Зелёное яблоко',
  'Ellyme',
  'MyRecept',
]

// ── Cases ─────────────────────────────────────────────
// Removed: Comrades Devs, Маркиз (gets own section)
export const cases: CaseItem[] = [
  {
    id: 'zelenoe-yabloko',
    tag: 'Retail / Delivery / Махачкала',
    tags: ['продукты питания', 'экосистема', 'исследования', 'сайт', 'приложение'],
    title: 'Зелёное яблоко',
    description: 'Комплексное исследование для запуска сервиса доставки',
    metrics: [
      { value: 'x3', label: 'рост онлайн-продаж' },
      { value: '100K+', label: 'пользователей' },
      { value: '−40%', label: 'ручной работы' },
    ],
    badge: 'Бронза Tagline 2025',
    link: 'https://zelenoeyabloko.ru',
    size: 'featured',
  },
  {
    id: 'ellyme',
    tag: 'E-commerce / Fashion / Москва',
    tags: ['сайт', 'одежда', 'сопровождение'],
    title: 'Ellyme',
    description: 'С нуля до международного e-commerce',
    metrics: [
      { value: '5 000+', label: 'посетителей/мес' },
      { value: '250 000+', label: 'пользователей за год' },
    ],
    link: 'https://ellyme.ru',
    size: 'medium',
  },
  {
    id: 'sofia',
    tag: 'Healthcare / Cosmetology / Махачкала',
    tags: ['клиника красоты', 'AI-агент', 'соцсети'],
    title: 'AI-админ София',
    description: 'AI заменил 8 лет ручной работы',
    metrics: [
      { value: '7 000+', label: 'диалогов' },
      { value: '400+', label: 'записей' },
    ],
    size: 'small',
  },
  {
    id: 'myrecept',
    tag: 'Food & Restaurants / Москва',
    tags: ['десерты', 'horeca', 'сеть', 'сайт', 'сопровождение'],
    title: 'MyRecept',
    description: 'Из нерабочего сайта в онлайн-экосистему',
    metrics: [
      { value: '4 000+', label: 'посетителей/мес' },
      { value: '0 ₽', label: 'рекламы' },
    ],
    link: 'https://myrecept.ru',
    size: 'small',
  },
  {
    id: 'invoiceman',
    tag: 'AI / Автоматизация',
    tags: ['horeca', 'AI-агент', 'автоматизация'],
    title: 'InvoiceMan',
    description: 'Фото накладной → приёмка в МойСклад',
    metrics: [
      { value: '15 → 2-3 мин', label: 'время обработки' },
    ],
    size: 'small',
  },
]

// ── Markiz (dedicated section) ───────────────────────
export const markiz = {
  title: 'Маркиз',
  description: 'Бизнес-ассистент, который подключается к системам учёта, финансам, аналитике, коммуникациям и выполняет за вас операционную работу',
  integrations: ['Instagram', '1С', 'Битрикс24', 'amoCRM', 'МойСклад', 'Notion'],
  ctaPrimary: 'Подробнее о Маркизе',
  ctaSecondary: 'Записаться на демо',
}

// ── Services ──────────────────────────────────────────
export const services: ServiceItem[] = [
  {
    title: 'IT-сопровождение',
    description: 'Полное управление IT-процессами компании: от выбора решений до контроля подрядчиков',
    price: 'от 80 000 ₽/мес',
  },
  {
    title: 'Внедрение нейросетей',
    description: 'AI-агенты обрабатывают обращения, создают документы, консультируют клиентов',
    price: 'от 100 000 ₽',
  },
  {
    title: 'Разработка сайтов',
    description: 'Лендинги, CMS-сайты, разработка с нуля — под любые задачи',
    price: 'от 120 000 ₽',
  },
  {
    title: 'Автоматизация',
    description: 'Внедрение CRM, ERP, BPM — Битрикс24, amoCRM, 1С и другие',
    price: 'от 250 000 ₽',
  },
  {
    title: 'Исследования',
    description: 'Продуктовые исследования, CustDev, JTBD, анализ конкурентов, UX-аудит',
    price: 'от 150 000 ₽',
  },
  {
    title: 'Консалтинг',
    description: 'Описание бизнес-процессов, архитектуры. Стандартизация, скрипты, процессы',
    price: 'от 500 000 ₽',
  },
  {
    title: 'Обучение нейросетям',
    description: 'Индивидуальные и групповые программы обучения работе с AI-инструментами',
    price: 'от 3 000 ₽/час',
  },
]

// ── How we work ───────────────────────────────────────
export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'Запрос',
    description: 'Вы описываете задачу — мы задаём вопросы и фиксируем требования',
    shape: 'circle',
  },
  {
    number: '02',
    title: 'Анализ задачи',
    description: 'Исследуем предметную область, подбираем оптимальный подход',
    shape: 'rectangle',
  },
  {
    number: '03',
    title: 'Подходит?',
    description: 'Оцениваем реализуемость и соответствие вашим целям',
    shape: 'diamond',
  },
  {
    number: '04',
    title: 'Подготовка ТЗ и сметы',
    description: 'Формируем техническое задание, варианты по бюджету, план работ',
    shape: 'rectangle',
  },
  {
    number: '05',
    title: 'Согласование',
    description: 'Обсуждаем детали, вносим корректировки, подписываем договор',
    shape: 'rectangle',
  },
  {
    number: '06',
    title: 'Разработка',
    description: 'Реализация по этапам с промежуточными демо и отчётами',
    shape: 'rectangle',
  },
  {
    number: '07',
    title: 'Тестирование и сдача',
    description: 'Проверяем качество, исправляем замечания, передаём результат',
    shape: 'rectangle',
  },
  {
    number: '08',
    title: 'Поддержка?',
    description: 'Решаем, нужно ли дальнейшее сопровождение проекта',
    shape: 'diamond',
  },
  {
    number: '09',
    title: 'Сопровождение',
    description: 'Техподдержка, развитие, мониторинг и оптимизация',
    shape: 'rectangle',
  },
  {
    number: '10',
    title: 'Результат',
    description: 'Работающее решение, которое приносит пользу вашему бизнесу',
    shape: 'circle',
  },
]

// ── Stats ─────────────────────────────────────────────
export const stats: StatItem[] = [
  { value: '8 лет', label: 'опыта в IT, продакт-маркетинге и построении бизнес-архитектуры' },
  { value: '56+', label: 'реализованных проектов в автоматизации, разработке и AI-внедрениях' },
  { value: '30+', label: 'подрядчиков: разработка, дизайн, маркетинг — некоторые в топ-3 по России' },
  { value: '7 AI + 2', label: 'нейросетей-сотрудников и 2 основателя — Марк и Магомед' },
]

// ── Speaking / Events ────────────────────────────────
export const speakingItems: SpeakingItem[] = [
  {
    title: 'КАВКАЗ.КОД',
    description: 'Крупнейшая IT-конференция Дагестана',
    type: 'Конференция',
  },
  {
    title: 'Эквиум',
    description: 'Закрытый бизнес-клуб, оборот участников 1+ млрд ₽',
    type: 'Бизнес-клуб',
  },
  {
    title: 'Мой Бизнес',
    description: '2 года — курс по нейросетям для предпринимателей',
    type: 'Образование',
  },
]

export const mediaPresence = ['ГТРК', 'Россия 1/24', 'РГВК']

// ── Founders / Contacts ───────────────────────────────
export const founders: Founder[] = [
  {
    name: 'Марк Кайтмазов',
    role: 'Product & IT',
    phone: '+7 989 896 69 50',
    phoneHref: 'tel:+79898966950',
  },
  {
    name: 'Магомед Ахмедов',
    role: 'Бизнес-архитектор',
    phone: '+7 963 798 4342',
    phoneHref: 'tel:+79637984342',
  },
]

export const contacts = {
  email: 'info@markins.ru',
  telegram: 'https://t.me/markins_co',
  whatsapp: 'https://wa.me/79898966950',
}
