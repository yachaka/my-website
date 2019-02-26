
import React, { PureComponent } from 'react'
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from '../components/Link';
import Img from 'gatsby-image';

import saasSVG from '!!raw!../img/saas.svg';
import mobileSVG from '!!raw!../img/mobile.svg';
import learnSVG from '!!raw!../img/learn.svg';
import s from './index.module.scss';

import i18n from '../i18n';
import specificTranslations from './index.translations.json';
import commonTranslations from '../common.translations.json';
import projectsPageUrls from './projects/index.urls.json';

const translations = merge(commonTranslations, specificTranslations);

class IndexPage extends PureComponent {
  onContactLinkClick = () => {
    window.openContact();
  }

  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    const presentation2Links = {
      'projects': (text) => (<Link to={projectsPageUrls[lang]}>{text}</Link>),
      'contact': (text) => (<a href="javascript:;" onClick={this.onContactLinkClick}>{text}</a>),
    };

    const presentation2Tokens = t('presentation2')
      .split(/(\{\{[a-zA-Z]+\}\}[a-zA-Z0-9\séè]+\{\{\/[a-zA-Z]+\}\}|<br\/>)/g);

    const presentation2Children = presentation2Tokens.map(tk => {
      if (tk[0] === '{') {
        const name = tk.substring(2, tk.indexOf('}'));
        const text = tk.substr(name.length + 4, tk.length - (2 * name.length + 4 * 2 + 1));

        return (presentation2Links[name](text));
      } else if (tk === '<br/>') {
        return (<br/>);
      }

      return tk;
    });

    return (
      <div id={s.home}>
        <div class={cx('container', s.hero)}>
          <h1 class={cx(s.heroText)}>
            Bonjour 👋 <br/>
            Je suis un développeur Fullstack JavaScript.
          </h1>
          <h2 class={cx(s.heroStatus)}>
            Je cherche une mission (en tant que freelance),<br/>
            ou un poste dans le domaine environnemental ou créatif.
          </h2>
          <div class={s.heroLinks}>
            <a href="#" class={s.workLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" stroke="#0080f7" fill="none" stroke-linecap="round" stroke-width="3"><path d="M6 16.672l9 9m9-9l-9 9m-9-19l9 9m9-9l-9 9"/></svg>
              <span class={s.underline}>Mes réalisations</span>
            </a>
            <a href="#" class={s.cvLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="#0080f7" fill-rule="nonzero"><path d="M29.68 30.6H2.78C1.4 30.6 0 29.125 0 27.733V6.864c0-1.3 1.16-2.226 2.783-2.226h6.03c.37 0 .696.325.696.696s-.325.696-.696.696h-6.03c-.557 0-1.4.232-1.4.835v20.87c0 .65.788 1.484 1.4 1.484h26.9c.5 0 .928-.788.928-1.484V6.864c0-.5-.14-.835-.928-.835H23.2c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h6.493c1.438 0 2.32.835 2.32 2.226v20.87c0 1.4-.88 2.875-2.32 2.875zM16.046 19.85c-.186 0-.37-.046-.5-.186l-5.148-5.194a.67.67 0 0 1 0-.974.67.67 0 0 1 .974 0L16.5 18.7a.67.67 0 0 1 0 .974c-.14.14-.325.186-.464.186z"/><path d="M16.046 19.85c-.186 0-.37-.046-.5-.186a.67.67 0 0 1 0-.974l5.194-5.148a.67.67 0 0 1 .974 0 .67.67 0 0 1 0 .974L16.5 19.664c-.14.14-.325.186-.464.186z"/><path d="M16 19.246c-.37 0-.696-.325-.696-.696V.928c0-.37.325-.696.696-.696s.696.325.696.696V18.55c0 .37-.325.696-.696.696zm6.725 5.334H9.74c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h12.986c.37 0 .696.325.696.696s-.325.696-.696.696z"/></svg>
              <span class={s.underline}>CV</span>
            </a>
          </div>
        </div>

        <div class="container">
          <h3 class={s.sectionTitle}>
            Réalisations
          </h3>
        </div>
      </div>
    );
  }
};

export default IndexPage

export const query = graphql`
  query HomeQuery {
    meImg:file(
      relativePath: { eq: "pages/me.jpg"}
    ) {
      childImageSharp {
        sizes(maxWidth: 100, maxHeight: 100, quality: 50) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;


function synchronizeHover(el, target, classNameToAdd) {
  el.addEventListener('mouseover', function () {
    var classes = target.className.split(' ');
    classes.push(classNameToAdd);
    classes = classes.filter((c, i) => classes.indexOf(c) === i);
    target.className = classes.join(' ');
  });

  el.addEventListener('mouseout', function () {
    var classes = target.className.split(' ');
    classes = classes.filter((c, i) => c !== classNameToAdd);
    target.className = classes.join(' ');
  });  
}
