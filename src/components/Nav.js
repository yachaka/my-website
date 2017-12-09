
import React, { PureComponent } from 'react';
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from './Link';

import messengerSVG from './messenger.svg';
import sendSVG from './send.svg';

import s from './Nav.module.scss';
import i18n from '../i18n';
import specificTranslations from './Nav.translations.json';
import commonTranslations from '../common.translations.json';
import pageProjectsUrls from '../pages/projects/index.urls.json';
import pageSaasUrls from '../pages/saas/index.urls.json';
import pageRateAndProcessUrls from '../pages/rate-and-process/index.urls.json';

const translations = merge(commonTranslations, specificTranslations);

export default class Nav extends PureComponent {
  state = {
    contactMenuExpanded: false,
  };

  componentDidMount() {
    window.openContact = () => this.setState({ contactMenuExpanded: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.contactMenuExpanded
      && this.state.contactMenuExpanded) {
      this.refs.name.focus();
    }
  }

  toggleContactMenu = () => this.setState({ contactMenuExpanded: !this.state.contactMenuExpanded })

  render() {
    const { contactMenuExpanded } = this.state;
    const { lang } = this.context;
    const t = i18n(lang, translations);

    return (
      <nav id={s.nav}>
        <div class="container" style="margin: auto;">
          <ul>
            <li class={cx(s.rightmost, s.contact)}>
              <a class={contactMenuExpanded && s.active}>
                <span class={s.inner} onClick={this.toggleContactMenu}><svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17.000002"><path d="M2.5 17a.5.5 0 0 1-.5-.5l-.4-4A7.34 7.34 0 0 1 0 8c0-4.41 4-8 9-8s9 3.59 9 8-4 8-9 8a10 10 0 0 1-2.67-.36l-3.66 1.33a.49.49 0 0 1-.17.03zM9 1C4.59 1 1 4.14 1 8a6.37 6.37 0 0 0 1.47 4 .5.5 0 0 1 .11.26l.35 3.51 3.21-1.17a.5.5 0 0 1 .31 0A9 9 0 0 0 9 15c4.41 0 8-3.14 8-7s-3.59-7-8-7z"/><path d="M9.5 10a.5.5 0 0 1-.47-.33l-.81-2.32-3.5 1.74a.5.5 0 1 1-.45-.89l4-2a.5.5 0 0 1 .73.3l.82 2.34 3.5-1.62a.50112374.50112374 0 0 1 .42.91l-4 1.86a.5.5 0 0 1-.24.01z"/></svg></span>
                <span class={cx(s.border, s.topLeftBorder)} />
                <span class={cx(s.border, s.topRightBorder)} />
                <div class={s.contactForm}>
                  <div class={s.inner}>
                    <span class={cx(s.border, s.subTopLeftBorder)} />
                    <span class={cx(s.border, s.subBottomLeftBorder)} />
                    <span class={cx(s.border, s.subLeftBottomBorder)} />
                    <span class={cx(s.border, s.subBottomRightBorder)} />
                    <div class={s.content}>
                      <h5 class={s.title} dangerouslySetInnerHTML={{ __html: t('contact-form.title') }} />

                      <form>
                        <div class={cx(s.inputGroup, s.required)}>
                          <label htmlFor="name">{t('contact-form.your-name-label')}</label>
                          <input ref="name" type="text" name="name" placeholder={t('contact-form.your-name-placeholder')} />
                        </div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class={cx(s.inputGroup, s.required)}>
                              <label htmlFor="email">{t('contact-form.your-email-label')}</label>
                              <input type="text" name="email" placeholder={t('contact-form.your-email-placeholder')} />
                            </div>
                          </div>
                          <div class="col-xs-6">
                            <div class={s.inputGroup}>
                              <label htmlFor="phone">{t('contact-form.your-phone-label')}</label>
                              <input type="text" name="phone" placeholder={t('contact-form.your-phone-placeholder')} />
                            </div>
                          </div>
                        </div>

                        <div class={cx(s.inputGroup, s.required)}>
                          <label htmlFor="message">{t('contact-form.your-message-label')}</label>
                          <textarea name="message" placeholder={t('contact-form.your-message-placeholder')} />
                        </div>

                        <button type="submit" class={s.send}>
                          <img src={sendSVG} />
                          {t('contact-form.send-button')}
                        </button>
                        <p class={cx(s.helpText, 'muted')}>{t('contact-form.help-text')}</p>

                      </form>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <script> </script>
            {/*<li>
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
            </li>*/}
            <li><Link to={pageRateAndProcessUrls[lang]}>{t('rate-and-more')}</Link></li>
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