
import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames';
import debounce from 'lodash.debounce'
import merge from 'lodash.merge';
import Cookies from 'js-cookie';
import smoothScrollTo from 'smooth-scroll-to'
import Link from '../Link';
import MobileOverlay from '../MobileOverlay/MobileOverlay'

import logoSVG from './logo.svg'
import messengerSVG from '../../img/messenger.svg';
import sendSVG from '../../img/send.svg';
import okSVG from '../../img/ok.svg';
import closeSVG from '../../img/close.svg';
import githubSVG from '../../img/github.svg'
import linkedinSVG from '../../img/linkedin.svg'
import stackoverflowSVG from '../../img/so-icon.svg'

import s from './Nav.module.scss';
import i18n from '../../i18n';
import specificTranslations from './Nav.translations.json';

const translations = specificTranslations;

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
    contactMenuExpanded: false,
    showOverlayMenu: false,

    data: {
      'form-name': 'contact',
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
    window.addEventListener('scroll', this.onWindowScroll)
    window.addEventListener('resize', this.onWindowResizeDebounced)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowResizeDebounced)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.contactMenuExpanded
      && this.state.contactMenuExpanded) {
      this.refs.name.focus();
    }
  }

  onWindowResize = () => {
    if (this.formContentEl && this.formOuterEl) {
      const maxHeight = window.document.scrollingElement.clientHeight - this.formOuterEl.offsetTop - 20

      if (this.formOuterEl.offsetTop + this.formContentEl.offsetHeight > window.document.scrollingElement.clientHeight
        || (this.formContentOriginalHeight !== undefined && this.formContentEl.offsetHeight < maxHeight && this.formContentEl.offsetHeight < this.formContentOriginalHeight)) {
        if (!this.formContentOriginalHeight) {
          this.formContentOriginalHeight = this.formContentEl.offsetHeight
        }
        this.formContentEl.style.height = Math.min(maxHeight, this.formContentOriginalHeight) + 'px'
      }
    }
    
  }
  onWindowResizeDebounced = debounce(this.onWindowResize, 200)

  onWindowScroll = () => {
    const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)

    if (top !== 0 && !this.state.showShadow) {
      this.setState({ showShadow: true })
    } else if (top === 0 && this.state.showShadow) {
      this.setState({ showShadow: false })
    }
  }

  setData = (e) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value }, errors: null })

  toggleContactMenu = () => this.setState({ contactMenuExpanded: !this.state.contactMenuExpanded })
  toggleOverlayMenu = () => this.setState({ showOverlayMenu: !this.state.showOverlayMenu })

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
        Cookies.set('lastMessageSentData', JSON.stringify(this.state.data), { expires: 365 })
      }
    });
  }

  viewMessageContent = () => {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    const lastMessageSentData = JSON.parse(Cookies.get('lastMessageSentData') || '""')
    window.alert(`
** ${t('contact-form.last-message-popup.details')} **
${t('contact-form.last-message-popup.name')}: ${lastMessageSentData.name}
${t('contact-form.last-message-popup.email')}: ${lastMessageSentData.email}
${lastMessageSentData.phone ? `${t('contact-form.last-message-popup.phone')}: ${lastMessageSentData.phone}` : ''}

** ${t('contact-form.last-message-popup.message')} **
${lastMessageSentData.message}
`)
  }

  render() {
    const {
      showShadow,
      showOverlayMenu,
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

    const lastMessageSent = Cookies.get('lastMessageSent')

    const shouldDisable = sending || sent;

    return (
      <div>
        <nav id={s.nav} class={cx(showShadow && s.shadowy)}>
          <div class={cx('container', s.container)} style={{ margin: 'auto' }}>
            <ul class={cx(s.listMenu)}>
              <li class={cx(s.rightmost, s.contact)}>
                <a class={contactMenuExpanded && s.active}>
                  <span class={s.inner} onClick={this.toggleContactMenu}>
                    <span class={s.contactText}>Contact</span><svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>messenger</title> <g fill="none" fill-rule="evenodd"> <g transform="translate(-1228 -23)" fill="#fff" fill-rule="nonzero"> <g transform="translate(1138 13)"> <g transform="translate(90 10)"> <path d="m3.3333 24c-0.36819 0-0.66667-0.31603-0.66667-0.70588l-0.53333-5.6471c-1.3601-1.8066-2.111-4.0427-2.1333-6.3529 0-6.2259 5.3333-11.294 12-11.294 6.6667 0 12 5.0682 12 11.294 0 6.2259-5.3333 11.294-12 11.294-1.2029 0.0013954-2.4004-0.16957-3.56-0.50824l-4.88 1.8776c-0.072593 0.028209-0.14934 0.04255-0.22667 0.042353zm8.6667-22.588c-5.88 0-10.667 4.4329-10.667 9.8824 0.021651 2.0648 0.71374 4.0588 1.96 5.6471 0.081174 0.1049 0.13209 0.23233 0.14667 0.36706l0.46667 4.9553 4.28-1.6518c0.1343-0.046366 0.27903-0.046366 0.41333 0 1.1018 0.36023 2.2469 0.55042 3.4 0.56471 5.88 0 10.667-4.4329 10.667-9.8824 0-5.4494-4.7867-9.8824-10.667-9.8824z"/> <path d="m12.667 14.118c-0.28069-1.265e-4 -0.53123-0.18639-0.62667-0.46588l-1.08-3.2753-4.6667 2.4565c-0.21412 0.13642-0.48231 0.13459-0.69476-0.0047323-0.21245-0.13932-0.33346-0.39275-0.3135-0.6565 0.019966-0.26375 0.17756-0.49353 0.40825-0.59524l5.3333-2.8235c0.17853-0.10815 0.39422-0.12298 0.58446-0.040199s0.33375 0.25391 0.38887 0.46373l1.0933 3.3035 4.6667-2.2871c0.33504-0.16369 0.73197-0.0088217 0.8866 0.34591s0.0084088 0.77503-0.3266 0.93879l-5.3333 2.6259c-0.104 0.032168-0.21383 0.037014-0.32 0.014118z"/> </g> </g> </g> </g> </svg>
                  </span>
                  <span class={cx(s.border, s.topLeftBorder)} />
                  <span class={cx(s.border, s.topRightBorder)} />
                  <div class={s.contactForm} ref={el => this.formOuterEl = el}>
                    <div class={s.inner}>
                      <span class={cx(s.border, s.subTopLeftBorder)} />
                      <span class={cx(s.border, s.subBottomLeftBorder)} />
                      <span class={cx(s.border, s.subLeftBottomBorder)} />
                      <span class={cx(s.border, s.subBottomRightBorder)} />
                      <div class={s.content} ref={el => this.formContentEl = el}>
                        {lastMessageSent &&
                        <p class={s.lastMessageSent}>
                          {t('contact-form.last-message-sent').replace('{{date}}', formatDateByLang(parseInt(lastMessageSent, 10), lang))}
                          <a class={s.viewSentMessageLink} href="javascript:;" onClick={this.viewMessageContent}>{t('contact-form.view-message-link')}</a>
                        </p> }

                        <h5 class={s.title} dangerouslySetInnerHTML={{ __html: t('contact-form.title') }} />

                        <form onSubmit={this.sendForm} data-netlify="true" data-netlify-honeypot="bot-field" name={this.state.data['form-name']}>

                          <p class={s.hidden}>Do not fill this: <input type="text" name="bot-field" onChange={this.setData} /></p>

                          <div class={cx(s.inputRow)}>
                            <div class={cx(s.inputGroup, s.oneThirdInput, s.required, errors && errors.name && s.error)}>
                              <label htmlFor="name">{t('contact-form.your-name-label')}</label>
                              <input ref="name" type="text" name="name" placeholder={t('contact-form.your-name-placeholder')} onChange={this.setData} value={name} disabled={shouldDisable} />
                            </div>

                            <div class={cx(s.inputGroup, s.oneThirdInput, s.emailInput, s.required, errors && errors.email && s.error)}>
                              <label htmlFor="emailInput">{t('contact-form.your-email-label')}</label>
                              <input id="emailInput "type="text" name="email" placeholder={t('contact-form.your-email-placeholder')} onChange={this.setData} value={email} disabled={shouldDisable} />
                            </div>

                            <div class={cx(s.inputGroup, s.oneThirdInput, s.phoneInput)}>
                              <label htmlFor="phone">{t('contact-form.your-phone-label')}</label>
                              <input type="text" name="phone" placeholder={t('contact-form.your-phone-placeholder')} onChange={this.setData} value={phone} disabled={shouldDisable} />
                            </div>
                          </div>

                          <div class={cx(s.inputGroup, s.required, errors && errors.message && s.error)}>
                            <label htmlFor="message">{t('contact-form.your-message-label')}</label>
                            <textarea
                              name="message"
                              placeholder={t('contact-form.your-message-placeholder')}
                              onChange={this.setData}
                              value={message}
                              disabled={shouldDisable}
                            />
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

              <li class={cx(s.rateLink)}><Link to="/#rate">{t('rate')}</Link></li>
              {/* Only in desktop > */}
              <li class={cx(s.projectLink)}><Link to="/#projects">{t('projects')}</Link></li>

              <li class={cx(s.github, s.social)}><a href="https://github.com/yachaka" target="_blank"><img src={githubSVG} alt="yachaka's profile on github" /></a></li>
              <li class={cx(s.linkedin, s.social)}><a href="https://www.linkedin.com/in/ilyeshermellin/" target="_blank"><img src={linkedinSVG} alt="Ilyes Hermellin profile on LinkedIn" /></a></li>
              <li class={cx(s.stackoverflow, s.social)}><a href="https://stackoverflow.com/users/3076424/yachaka" target="_blank"><img src={stackoverflowSVG} alt="yachaka's profile on StackOverflow" /></a></li>


              <li class={cx(s.home, s.leftmost)}>
                <Link to="/">
                  <svg width="66px" height="30px" viewBox="0 0 66 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                          <linearGradient x1="0%" y1="24.6637714%" x2="100%" y2="79.4397005%" id="linearGradient-1">
                              <stop stop-color="#0E83EF" offset="0%"></stop>
                              <stop stop-color="#C30CB4" offset="51.7837789%"></stop>
                              <stop stop-color="#DA0707" offset="100%"></stop>
                          </linearGradient>
                      </defs>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Chalkboard" font-size="31" font-weight="normal">
                          <g id="Desktop-HD" transform="translate(-181.000000, -23.000000)" fill="url(#linearGradient-1)">
                              <text id="Ilyes">
                                  <tspan x="180" y="45">Ilyes</tspan>
                              </text>
                          </g>
                      </g>
                  </svg>
                </Link>
              </li>

              {/* Only in mobile > */}
              <li class={cx(s.burgerLink, s.leftmost)}>
                <a href="javascript:;" onClick={this.toggleOverlayMenu}>
                  <svg width="33" height="26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="3.335%" y1="3.033%" y2="100%" id="b"><stop stopColor="#0E83EF" offset="0%" /><stop stopColor="#C30CB4" offset="51.547%" /><stop stopColor="#DA0707" offset="100%" /></linearGradient><path d="M2.677 3.355a1.678 1.678 0 0 1 0-3.355H30.63a1.677 1.677 0 1 1 0 3.355H2.677zm.001 11.181a1.677 1.677 0 1 1 0-3.355h27.951a1.677 1.677 0 0 1 0 3.354H2.678v.001zm0 11.18a1.678 1.678 0 1 1 0-3.354h27.951a1.677 1.677 0 0 1 0 3.354H2.678z" id="a" /></defs><g fill="none" fillRule="evenodd"><use fill="#6E6E6E" xlinkHref="#a" /><use fill="url(#b)" xlinkHref="#a" /></g></svg>
                </a>
              </li>
            </ul>
            <span style={{ clear: 'both', display: 'block' }}></span>
          </div>

        </nav>

        <CSSTransition
          in={showOverlayMenu}
          timeout={200}
          classNames="overlay"
        >
          <div class={s.menuOverlay}>
            <a href="javascript:;" class={s.close} onClick={this.toggleOverlayMenu}>
              <img src={closeSVG} alt="Close" />
            </a>

              <ul>
                <li class={s.logo}><img src={logoSVG} alt="Ilyes" width="90" /></li>
                <li><a class={s.underline} href="#projects" onClick={this.toggleOverlayMenu}>{t('projects')}</a></li>
                <li><a class={s.underline} href="#rate" onClick={this.toggleOverlayMenu}>{t('rate')}</a></li>
              </ul>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

function sendForm(data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/fr', true);
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

