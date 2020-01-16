
const fs = require('fs');
const path = require('path');

const langs = ['en', 'fr'];

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

exports.onCreatePage = ({ page, boundActionCreators: { createPage, deletePage } }) => {
  if (page.path.match(/404/)) {
    return;
  }

  const pathWithoutExt = page.componentPath.substring(0, page.componentPath.lastIndexOf('.'));
  const urlsForLangPath = `${pathWithoutExt}.urls.json`;
  let urlsForLang;

  if (fs.existsSync(urlsForLangPath)) {
    urlsForLang = require(urlsForLangPath);
  }

  const langPages = langs.map(l => {
    const path = urlsForLang && urlsForLang[l]
      ? urlsForLang[l]
      : page.path;

    return Object.assign({}, page, {
      path: `/${l}${path}`,
      context: Object.assign({}, page.context, {
        lang: l,
      }),
    });
  });

  deletePage(page);
  langPages.forEach(page => createPage(page));
};

// exports.modifyBabelrc = ({ babelrc }) => {
//   babelrc.plugins.push([
//     'external-helpers',
//     // { helpers: true, polyfill: false, regenerator: false, moduleName: 'babel-runtime' },
//   ]);
// };