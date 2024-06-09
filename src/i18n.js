// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Sử dụng backend để tải các tệp dịch
  .use(LanguageDetector) // Sử dụng bộ phát hiện ngôn ngữ
  .use(initReactI18next) // Kết nối với React
  .init({
    fallbackLng: 'en-US', // Ngôn ngữ dự phòng
    debug: true, // Bật debug cho phát triển
    interpolation: {
      escapeValue: false, // React đã xử lý việc này
    },
    backend: {
      loadPath: '/react-portfolio/locales/{{lng}}/{{ns}}.json', // Đường dẫn đến các tệp dịch
    },
    // ns : ['translation', 'common'], // namespaces
    defaultNS: 'translation',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
