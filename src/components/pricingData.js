// Единый источник данных для калькулятора цены.
// У каждого типа сайта — свой набор функций и своя цена за них
// (одна и та же функция стоит дороже для сложного веб-приложения, чем для лендинга).

export const BASE_TYPES = [
  {
    id: "landing",
    title: "Лендинг",
    desc: "Одна страница под конкретную цель: рассказать о бизнесе или собрать заявки.",
    price: 100000,
  },
  {
    id: "corporate",
    title: "Корпоративный сайт",
    desc: "До 6 разделов: услуги, портфолио, команда, контакты.",
    price: 250000,
  },
  {
    id: "app",
    title: "Веб-приложение / магазин",
    desc: "Личный кабинет, каталог, бронирование, свой бэкенд.",
    price: 450000,
  },
];

export const FEATURES_BY_TYPE = {
  landing: [
    { id: "seo", title: "Расширенная SEO-настройка", price: 25000 },
    { id: "blog", title: "Раздел блога / новостей", price: 45000 },
    { id: "multilang", title: "Дополнительный язык сайта", price: 35000 },
    { id: "crm", title: "Интеграция с CRM (AmoCRM/Bitrix)", price: 40000 },
    { id: "animation", title: "Сложные анимации и эффекты", price: 35000 },
  ],
  corporate: [
    { id: "cms", title: "Админ-панель для контента", price: 60000 },
    { id: "blog", title: "Раздел блога / новостей", price: 40000 },
    { id: "multilang", title: "Дополнительный язык сайта", price: 50000 },
    { id: "crm", title: "Интеграция с CRM / мессенджерами", price: 45000 },
    { id: "chat", title: "Онлайн-чат поддержки", price: 25000 },
    { id: "seo", title: "Расширенная SEO-настройка", price: 35000 },
  ],
  app: [
    { id: "account", title: "Личный кабинет пользователя", price: 90000 },
    { id: "booking", title: "Онлайн-бронирование / календарь", price: 80000 },
    { id: "payment", title: "Приём онлайн-оплаты", price: 70000 },
    { id: "notify", title: "Push / email-уведомления", price: 40000 },
    { id: "admin", title: "Админ-панель управления", price: 70000 },
    { id: "multilang", title: "Дополнительный язык интерфейса", price: 50000 },
  ],
};

export function formatPrice(n) {
  return n.toLocaleString("ru-RU") + " ₸";
}