
import React, { PureComponent } from 'react'
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from '../components/Link';

import saasSVG from '!!raw!../img/saas.svg';
import mobileSVG from '!!raw!../img/mobile.svg';
import learnSVG from '!!raw!../img/learn.svg';
import s from './index.module.scss';

import i18n from '../i18n';
import specificTranslations from './index.translations.json';
import commonTranslations from '../common.translations.json';

const translations = merge(commonTranslations, specificTranslations);

class IndexPage extends PureComponent {
  componentDidMount() {
    synchronizeHover(this.refs.saasLink, this.refs.saasLinkBox.base, s.active);
    synchronizeHover(this.refs.mobileLink, this.refs.mobileLinkBox.base, s.active);
    synchronizeHover(this.refs.learnLink, this.refs.learnLinkBox.base, s.active);
  }

  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    // const presentationTrad = t('presentation')
    //   .replace('{{saasLink}}', `<a id="${s.saasLinkText}" href="#" class="${s.saasLink}" ref="saasLink">`)
    const presentationTokens = t('presentation')
      .split(/(\{\{[a-zA-Z]+\}\}[a-zA-Z0-9\séè]+\{\{\/[a-zA-Z]+\}\}|<br\/>)/g);

    const presentationsChildren = presentationTokens.map(tk => {
      if (tk[0] === '{') {
        const name = tk.substring(2, tk.indexOf('}'));
        const text = tk.substr(name.length + 4, tk.length - (2 * name.length + 4 * 2 + 1));
        console.log(text);

        return (
          <a id={s[`${name}LinkText`]} href="#" class={s[`${name}Link`]} ref={`${name}Link`}>
            {text}
          </a>
        );
      } else if (tk === '<br/>') {
        return (<br/>);
      }

      return tk;
    });

    return (
      <div id={s.home}>
        <div class="container">
          <div class="row"><div class="col-xs-12">
            <h1 id={s.firstH1}>{t('headline1')}</h1>
            <h1 id={s.secondH1}>{t('headline2')}</h1>

            <h2 id={s.H2Presentation}>
              {presentationsChildren}
            </h2>

            <h4 id={s.getStartedTitle} class={cx('sans-serif')}>{t('ctas-title')}</h4>
          </div></div>

          <div id={s.activities} class="row">
            <div class="col-xs-4">
              <Link to="/developpement-de-saas" id={s.saasLinkBox} class={cx(s.activity, s.saasLink)} ref="saasLinkBox">
                <div class={s.icon} dangerouslySetInnerHTML={{ __html: saasSVG }}>
                </div>
                <div class={s.text}>
                  <p>{t('cta-saas-text')}</p>
                </div>
              </Link>
            </div>
            <div class="col-xs-4">
              <Link to="/developpement-d-application-mobile" id={s.mobileLinkBox} class={cx(s.activity, s.mobileLink)} ref="mobileLinkBox">
                <div class={s.icon} dangerouslySetInnerHTML={{ __html: mobileSVG }}>
                  {mobileSVG}
                </div>
                <div class={s.text}>
                  <p>{t('cta-mobile-text')}</p>
                </div>
              </Link>
            </div>
            <div class="col-xs-4">
              <Link to="/cours-de-javascript-moderne" id={s.learnLinkBox} class={cx(s.activity, s.learnLink)} ref="learnLinkBox">
                <div class={s.icon} dangerouslySetInnerHTML={{ __html: learnSVG }}>
                  {learnSVG}
                </div>
                <div class={s.text}>
                  <p>{t('cta-learn-text')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IndexPage


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
