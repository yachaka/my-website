
import React, { PureComponent } from 'react'
import cx from 'classnames'

import s from './index.module.scss'
import i18n from '../../i18n';
import translations from './index.translations.json'

import burger from '../../img/burger.svg'
import close from '../../img/close.svg'
import doubleDash from '../../img/double-dash.svg'
import download from '../../img/download.svg'
import externalLink from '../../img/external-link.svg'
import messenger from '../../img/messenger.svg'
import ok from '../../img/ok.svg'
import quoteLeft from '../../img/quote-left.svg'
import quoteRight from '../../img/quote-right.svg'
import send from '../../img/send.svg'

const icons = [
  { icon: burger, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: close },
  { icon: download, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: externalLink, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: messenger, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: ok, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: quoteLeft, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: quoteRight, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
  { icon: send, author: 'Andrea Greco', link: 'https://thenounproject.com/tipografico' },
]

export default class Credits extends PureComponent {
  render() {
    const { lang } = this.context
    const t = i18n(lang, translations)

    return (
      <div class={cx(s.creditsPage, 'container')}>
        <h1>{t('credits')}</h1>

        <ul>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
          <li>Icon messenger.svg by Thomas Sanders</li>
        </ul>
      </div>
    )
  }
}
