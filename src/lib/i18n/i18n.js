
function recurse(obj, path) {
  if (path.length === 1) {
    return obj[path[0]] || null;
  }

  return !!obj[path[0]]
    ? recurse(obj[path[0]], path.slice(1))
    : null;
}

export default (lang, translations, defaultLang = 'en') => (key) => {
  const path = key.split('.');

  const langPath = [lang, ...path];
  const defaultLangPath = [defaultLang, ...path];

  return recurse(translations, langPath)
    || recurse(translations, defaultLangPath)
    || key;
}