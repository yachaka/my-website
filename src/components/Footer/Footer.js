
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Link from '../Link';

import s from './Footer.module.scss';
import i18n from '../../lib/i18n/i18n';
import translations from './Footer.translations.json';
import githubSVG from '../../img/github.svg'
import linkedinSVG from '../../img/linkedin.svg'
import stackoverflowSVG from '../../img/so-icon.svg'

export default class Footer extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    // const pathWithoutLang = window.location.pathname.substr(3);

    return (
      <footer class={s.footer}>
        <div class="container">
          <ul>
            <li class={cx(s.github, s.rightmost)}><a href="https://github.com/yachaka" target="_blank"><img src={githubSVG} alt="yachaka's profile on github" /></a></li>
            <li class={cx(s.linkedin, s.rightmost)}><a href="https://www.linkedin.com/in/ilyeshermellin/" target="_blank"><img src={linkedinSVG} alt="Ilyes Hermellin profile on LinkedIn" /></a></li>
            <li class={cx(s.stackoverflow, s.rightmost)}><a href="https://stackoverflow.com/users/3076424/yachaka" target="_blank"><img src={stackoverflowSVG} alt="yachaka's profile on StackOverflow" /></a></li>
            <li class={cx(s.left, s.leftmost)}><Link lang="en" to="/">English</Link></li>
            <li class={s.left}><Link lang="fr" to="/">Français</Link></li>
          </ul>
        </div>
      </footer>
    )
  }
}