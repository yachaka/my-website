
import React, { PureComponent } from 'react';
import cx from 'classnames';
import merge from 'lodash.merge';
import Cookies from 'js-cookie';
import Link from './Link';

import messengerSVG from './messenger.svg';
import sendSVG from './send.svg';
import okSVG from './ok.svg';

import s from './Nav.module.scss';
import i18n from '../i18n';
import specificTranslations from './Nav.translations.json';
import commonTranslations from '../common.translations.json';
import pageProjectsUrls from '../pages/projects/index.urls.json';
import pageSaasUrls from '../pages/saas/index.urls.json';
import pageRateAndProcessUrls from '../pages/rate-and-process/index.urls.json';

const translations = merge(commonTranslations, specificTranslations);

const daysByLang  = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
};

const monthsByLang  = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
};

const formatDateByLang = (time, lang) => {
  const d = new Date(time);

  if (lang === 'en') {
    return `${daysByLang['en'][d.getDay()]} ${d.getDate()} of ${monthsByLang['en'][d.getMonth()]}`;
  }

  if (lang === 'fr') {
    return `${daysByLang['fr'][d.getDay()]} ${d.getDate()} ${monthsByLang['fr'][d.getMonth()]}`;
  }
};

export default class Nav extends PureComponent {
  state = {
    contactMenuExpanded: true,

    data: {
      name: null,
      email: null,
      phone: null,
      message: null,
    },
    errors: null,

    sending: false,
    sent: false,
    errorSending: null,
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

  setData = (e) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }, errors: null })

  toggleContactMenu = () => this.setState({ contactMenuExpanded: !this.state.contactMenuExpanded })

  sendForm = (e) => {
    e.preventDefault();

    const isValid = {
      name: (v) => v && v.length > 0,
      email: (v) => v && v.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
      phone: () => true,
      message: (v) => v && v.length > 10,
    };

    const errors = {};

    for (let key in isValid) {
      if (!isValid[key](this.state.data[key])) {
        errors[key] = true;
      }
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return ;
    }

    this.setState({ sending: true });

    sendForm(this.state.data, (errorStatusText) => {
      if (errorStatusText) {
        this.setState({ sending: false, errorSending: errorStatusText });
      } else {
        this.setState({ sending: false, sent: true });
        Cookies.set('lastMessageSent', (new Date()).getTime(), { expires: 365 });
      }
    });
  }

  render() {
    const {
      contactMenuExpanded,
      data: {
        name,
        email,
        phone,
        message,
      },
      errors,
      sending,
      sent,
    } = this.state;

    const { lang } = this.context;
    const t = i18n(lang, translations);

    const lastMessageSent = Cookies.get('lastMessageSent');

    const shouldDisable = sending || sent;

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
                      {lastMessageSent &&
                      <p class={s.lastMessageSent}>
                        {t('contact-form.last-message-sent').replace('{{date}}', formatDateByLang(parseInt(lastMessageSent, 10), lang))}
                      </p> }

                      <h5 class={s.title} dangerouslySetInnerHTML={{ __html: t('contact-form.title') }} />

                      <form onSubmit={this.sendForm} action="/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />

                        <p class={s.hidden}>Do not fill this: <input type="text" name="bot-field" onChange={this.setData} /></p>

                        <div class={cx(s.inputGroup, s.required, errors && errors.name && s.error)}>
                          <label htmlFor="name">{t('contact-form.your-name-label')}</label>
                          <input ref="name" type="text" name="name" placeholder={t('contact-form.your-name-placeholder')} onChange={this.setData} value={name} disabled={shouldDisable} />
                        </div>

                        <div class="row">
                          <div class="col-xs-6">
                            <div class={cx(s.inputGroup, s.required, errors && errors.email && s.error)}>
                              <label htmlFor="email">{t('contact-form.your-email-label')}</label>
                              <input type="text" name="email" placeholder={t('contact-form.your-email-placeholder')} onChange={this.setData} value={email} disabled={shouldDisable} />
                            </div>
                          </div>
                          <div class="col-xs-6">
                            <div class={s.inputGroup}>
                              <label htmlFor="phone">{t('contact-form.your-phone-label')}</label>
                              <input type="text" name="phone" placeholder={t('contact-form.your-phone-placeholder')} onChange={this.setData} value={phone} disabled={shouldDisable} />
                            </div>
                          </div>
                        </div>

                        <div class={cx(s.inputGroup, s.required, errors && errors.message && s.error)}>
                          <label htmlFor="message">{t('contact-form.your-message-label')}</label>
                          <textarea name="message" placeholder={t('contact-form.your-message-placeholder')} onChange={this.setData} value={message} disabled={shouldDisable} />
                        </div>

                        <button type="submit" class={cx(s.send, sent && s.sent)} disabled={shouldDisable}>
                          {sending &&
                          t('contact-form.send-button-sending')}
                          
                          {sent &&
                          [<img src={okSVG} />, t('contact-form.send-button-sent')]}

                          {!sending && !sent &&
                          [<img src={sendSVG} />, t('contact-form.send-button')]}
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

function sendForm(data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
      callback();
    } else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status !== 200) {
      callback(xhr.statusText);
    }
  };

  const params = Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`);

  xhr.send(params.join('&'));
}

