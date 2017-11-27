
export default (lang, translations, defaultLang = 'en') => (key) =>
  translations[lang]
    ? translations[lang][key]
    : translations[defaultLang]
      ? translations[defaultLang][key]
      : key;