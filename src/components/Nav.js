
import React, { PureComponent } from 'react';
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from './Link';

import saasSVG from '../img/saas.svg';
import mobileSVG from '../img/mobile.svg';
import learnSVG from '../img/learn.svg';

import s from './Nav.module.scss';
import i18n from '../i18n';
import specificTranslations from './Nav.translations.json';
import commonTranslations from '../common.translations.json';
import pageProjectsUrls from '../pages/projects/index.urls.json';
import pageSaasUrls from '../pages/saas/index.urls.json';

const translations = merge(commonTranslations, specificTranslations);

export default class Nav extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    return (
      <nav id={s.nav}>
        <div class="container" style="margin: auto;">
          <ul>
            <li class={s.rightmost}><Link to="/tarif-et-comment-je-collabore">{t('rate-and-more')}</Link></li>
            <li>
              <Link to="/services" class={s.withSubmenu}>
                <span class={cx(s.hider, s.topLeftHider)}></span>
                <span class={cx(s.hider, s.topRightHider)}></span>

                {t('services')}
                <div class={s.submenu}>
                  <div class={s.inner}>
                    <span class={cx(s.hider, s.subTopLeftHider)}></span>
                    <span class={cx(s.hider, s.subTopRightHider)}></span>
                    <span class={cx(s.hider, s.subLeftBottomHider)}></span>
                    <span class={cx(s.hider, s.subBottomLeftHider)}></span>
                    <span class={cx(s.hider, s.subBottomRightHider)}></span>
                    <ul>
                      <li>
                        <Link to={pageSaasUrls[lang]}>
                          {t('cta-saas-text')}
                        </Link>
                      </li>
                      <li>
                        <Link to="/developpement-d-application-mobile">
                          {t('cta-mobile-text')}
                        </Link>
                      </li>
                      <li>
                        <Link to="/cours-de-javascript-moderne">
                          {t('cta-learn-text')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
            <li><Link to={pageProjectsUrls[lang]}>{t('projects')}</Link></li>
            <li class={cx(s.home, s.leftmost)}><Link to="/">{t('home')}</Link></li>
          </ul>
          <span style="clear: both; display: block;"></span>
        </div>
      </nav>
    );
  }
}

function prefetchImg(src) {
  const i = new Image();
  i.src = src;
}