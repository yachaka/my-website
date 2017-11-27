
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Link from './Link';

import s from './Footer.module.scss';
import i18n from '../i18n';
import translations from './Footer.translations.json';

export default class Footer extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    // const pathWithoutLang = window.location.pathname.substr(3);

    return (
      <div class="container">
        <hr style="margin-bottom: 5px; border-color: #aaa;" />
        <footer class={s.footer}>
          <ul>
            <li class={s.rightmost}><Link to="/credits">{t('icon-credits')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/faq">{t('q-and-a')}</Link></li>
            <li><Link to="/a-propos-de-moi">{t('about')}</Link></li>
            <li class={cx(s.left, s.leftmost)}><Link lang="en" to="/">English</Link></li>
            <li class={s.left}><Link lang="fr" to="/">Français</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}