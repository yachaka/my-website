
import React, { PureComponent } from 'react';

import i18n from '../../i18n';
import translations from './index.translations.json';
import s from './index.module.scss';

export default class RateAndProcessPage extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    return (
      <div id={s.page} class="container"><div class="row"><div class="col-xs-12">
        <h1>{t('title')}</h1>
        <h2>{t('rate')}</h2>
        <p class="ms2" dangerouslySetInnerHTML={{ __html: t('introduction') }} />
      </div></div></div>
    );
  }
}
