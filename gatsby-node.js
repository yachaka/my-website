
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

exports.onCreateWebpackConfig = ({ config }) => {
  // config.node = Object.assign({}, config, {
  //   node: Object.assign({}, config.node, {
  //     module: 'empty',
  //     dgram: 'empty',
  //     dns: 'mock',
  //     fs: 'empty',
  //     http2: 'empty',
  //     net: 'empty',
  //     tls: 'empty',
  //     child_process: 'empty',
  //   }),
  // });
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
  // // config.merge()
  // // config.plugin(
  // //   'webpack-babel-external-helpers',
  // //   require('webpack-babel-external-helpers-2'),
  // //   []
  // // );
  // switch (stage) {
  //   case 'develop':
  //   case 'develop-html':
  //     config.loader('js', { exclude: /(node_modules|bower_components|babelHelpers)/ })
  //     config.merge((current) => {
  //       console.log(current.entry)
  //       for (let key in current.entry) {
  //         if (Array.isArray(current.entry[key])) {
  //           current.entry[key] = [require.resolve(__dirname + '/babelHelpers.js'), ...current.entry[key]];
  //         } else {
  //           current.entry[key] = [require.resolve(__dirname + '/babelHelpers.js'), current.entry[key]];
  //         }
  //       }
  //       return current;
  //     });
  //     break ;
  // }
  // console.log(config, stage)
  // const conf = config.resolve();
  // console.log('Starting json stats')
  // let i = 0;
  // require('webpack')(conf, (err, stats) => {
  //   console.log('Compilation finished, writing file')
  //   let key
  //   for (var k in conf.entry) {
  //     key = k
  //     break;
  //   }
  //   require('fs').writeFileSync(`stats-${key}.json`, JSON.stringify(stats.toJson('verbose')));
  //   i++;
  // });
// }

// exports.onCreateLayout = ({ layout, boundActionCreators: { createLayout, deleteLayout }}) => {
//   if (layout.pluginCreator___NODE === 'Plugin component-layout-creator') {
//     const langLayouts = langs.map(l => ({
//       id: `${l}---${layout.id}`,
//       componentWrapperPath: `/Users/i.hermellin/my-website/.cache/layouts/index.${l}.js`,
//       isLayout: true,
//       jsonName: `${l}---${layout.jsonName}`,
//       internalComponentName: `${capitalize(l)}${layout.internalComponentName}`,
//       component: layout.component,
//       componentPath: layout.componentPath,
//       componentChunkName: `${l}---${layout.componentChunkName}`,
//       context: {
//         ...layout.context,
//         lang: l,
//       },
//     }));
//     console.log(Object.keys(layout))

//     // deleteLayout(layout);
//     console.log(langLayouts)
//     langLayouts.forEach(l => createLayout(l, { name: 'me'}));
//     console.log('aya', require('gatsby/dist/redux').store.getState().layouts);
//   }
// }