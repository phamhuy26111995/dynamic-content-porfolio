const {
  VITE_SERVICE_ID_EMAIL_JS,
  VITE_TEMPLATE_ID_EMAIL_JS,
  VITE_USER_PUBLIC_KEY,
} = import.meta.env;

export const SERVICE_ID = VITE_SERVICE_ID_EMAIL_JS;

export const TEMPLATE_ID = VITE_TEMPLATE_ID_EMAIL_JS;

export const PUBLIC_KEY = VITE_USER_PUBLIC_KEY;
