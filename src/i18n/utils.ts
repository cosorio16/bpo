// import es from "./es.json";
// import en from "./en.json";

// export const languages = {
//   es,
//   en,
// };

// type Language = keyof typeof languages;
// type TranslationKey = keyof typeof es;

// export function useTranslations(lang: Language) {
//   return function t(key: TranslationKey) {
//     return languages[lang][key] || key;
//   };
// }

import type { Translations } from "../types/types";

const translations = import.meta.glob("./*.json", { eager: true });

export function useTranslations(locale: String | undefined): Translations {
  return translations[`./${locale}.json`] as Translations;
}
