
function recurse(obj, lang, path) {
  if (path.length === 1) {
    return obj[path[0]] && obj[path[0]][lang] || null;
  }

  return !!obj[path[0]]
    ? recurse(obj[path[0]], lang, path.slice(1))
    : null;
}

export default (lang, translations) => (key) => {
  const path = key.split('.');
  return recurse(translations, lang, path) || key;
}