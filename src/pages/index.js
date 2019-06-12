
import React, { PureComponent } from 'react'
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from '../components/Link';
import Img from 'gatsby-image';
import windowSize from 'react-window-size';
import smoothScrollTo from 'smooth-scroll-to'
import withSizes from '../components/withSizesHOC'

import s from './index.module.scss';

import i18n from '../i18n';
import specificTranslations from './index.translations.json';
import projectTranslations from './projects.translations.json';
import commonTranslations from '../common.translations.json';

import meSmallOvalImg from './me-small-oval.png'
import cvFrancais from './CV-2019-avril-Francais-min.pdf'
import cvEnglish from './CV-2019-avril-Anglais-min.pdf'
import DeviceMockup from '../components/DeviceMockup';
import InAppApprovalVideo from '../data/Spendesk/mobileapp/in-app-approval.mp4';
import PaymentEditionVideo from '../data/Spendesk/mobileapp/payment-edition.mp4';
import TopUpVideo from '../data/Spendesk/mobileapp/top-up.mp4';
import LoginVideo from '../data/Spendesk/mobileapp/login.mp4';

import GooglePixelBackground from '../components/DeviceMockup/skins/GooglePixel/GooglePixel.png';
import GooglePixelStats from '../components/DeviceMockup/skins/GooglePixel/dimensions';
import UbuntuLaptopBackground from '../components/DeviceMockup/skins/UbuntuLaptop/Laptop.svg';
import UbuntuLaptopStats from '../components/DeviceMockup/skins/UbuntuLaptop/dimensions.js';

import { getTextForTechno } from '../technosToColors'

const translations = merge(commonTranslations, specificTranslations);

class IndexPage extends PureComponent {
  onContactLinkClick = () => {
    window.openContact();
  }

  scrollToWork = () => {
    smoothScrollTo(this.workTitleRef.offsetTop - 100, 300)
  }

  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);
    const tp = i18n(lang, projectTranslations)

    const cvLink = lang === 'fr'
      ? cvFrancais
      : cvEnglish

    return (
      <div id={s.home}>
        <header class={cx('container', s.hero)}>
          <h1 class={cx(s.heroText)}>
            <img class={cx(s.meSmallOval)} src={meSmallOvalImg} />
            <span dangerouslySetInnerHTML={{ __html: t('hero-text') }} />
          </h1>
          <h2 class={cx(s.heroStatus)} dangerouslySetInnerHTML={{ __html: t('hero-status1') }} />
          <h2 class={cx(s.heroStatus)} dangerouslySetInnerHTML={{ __html: t('hero-status2') }} />
          <div class={s.heroLinks}>
            <a href="#" class={s.workLink} onClick={this.scrollToWork}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" stroke="#0080f7" fill="none" stroke-linecap="round" stroke-width="3"><path d="M6 16.672l9 9m9-9l-9 9m-9-19l9 9m9-9l-9 9"/></svg>
              <span class={s.underline}>{t('hero-work-link')}</span>
            </a>
            <a href={cvLink} class={s.cvLink} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="#0080f7" fill-rule="nonzero"><path d="M29.68 30.6H2.78C1.4 30.6 0 29.125 0 27.733V6.864c0-1.3 1.16-2.226 2.783-2.226h6.03c.37 0 .696.325.696.696s-.325.696-.696.696h-6.03c-.557 0-1.4.232-1.4.835v20.87c0 .65.788 1.484 1.4 1.484h26.9c.5 0 .928-.788.928-1.484V6.864c0-.5-.14-.835-.928-.835H23.2c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h6.493c1.438 0 2.32.835 2.32 2.226v20.87c0 1.4-.88 2.875-2.32 2.875zM16.046 19.85c-.186 0-.37-.046-.5-.186l-5.148-5.194a.67.67 0 0 1 0-.974.67.67 0 0 1 .974 0L16.5 18.7a.67.67 0 0 1 0 .974c-.14.14-.325.186-.464.186z"/><path d="M16.046 19.85c-.186 0-.37-.046-.5-.186a.67.67 0 0 1 0-.974l5.194-5.148a.67.67 0 0 1 .974 0 .67.67 0 0 1 0 .974L16.5 19.664c-.14.14-.325.186-.464.186z"/><path d="M16 19.246c-.37 0-.696-.325-.696-.696V.928c0-.37.325-.696.696-.696s.696.325.696.696V18.55c0 .37-.325.696-.696.696zm6.725 5.334H9.74c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h12.986c.37 0 .696.325.696.696s-.325.696-.696.696z"/></svg>
              <span class={s.underline}>CV.pdf</span>
            </a>
          </div>
        </header>

        <main id={s.projects}>
          <h3 id="projects" class={cx('container', s.sectionTitle)} ref={el => this.workTitleRef = el}>
            {t('work')}
          </h3>

          <Project
            id={s.habxWork}
            name="habx"
            url="https://habx.fr"
            monthDuration={9}
            wasFreelanceWork="both"
            technologies={['React', 'Apollo', 'GraphQL', 'AWS', 'Redux', 'Webpack']}
            productBrief={tp('habx.product-brief')}
            role={tp('habx.role')}
            team={tp('habx.team')}
            keyPoints={[
              { text: 'habx.key-developments.configurateur', link: '#desktop#0' },
              { text: 'habx.key-developments.landing'},
              { text: 'habx.key-developments.robot'},
              { text: 'habx.key-developments.crm'},
              { text: 'habx.key-developments.tools', link: 'https://github.com/habx/tool-sns-monitoring'},
            ]}
            laptopScreens={[
              this.props.data.habxConfigurateur.childImageSharp.sizes,
              this.props.data.habxConfigurateurPanelOuvert.childImageSharp.sizes,
            ]}
            testimonial={{
              picture: this.props.data.guillaume.childImageSharp.sizes,
              name: 'Guillaume Badi',
              external: 'https://www.linkedin.com/in/guillaume-badi-a06008b9/',
              role: tp('habx.testimonial.role'),
              text: tp('habx.testimonial.text'),
            }}
          />

          <Project
            id={s.spendeskWork}
            name="Spendesk"
            url="https://www.spendesk.com"
            monthDuration={10}
            wasFreelanceWork={false}
            technologies={['Node.js', 'React', 'React-Native', 'iOS/Swift', 'Android/Java',  'GraphQL', 'Relay', 'Webpack']}
            productBrief={tp('spendesk.product-brief')}
            keyPoints={[
              { text: 'spendesk.key-developments.mobile-app', link: '#mobile#0', linkText: t('link-see-in-video') },
              { text: 'spendesk.key-developments.dev-and-choice'},
            ]}
            laptopScreens={[
              this.props.data.requestsScreenImg.childImageSharp.sizes,
              this.props.data.paymentsScreenImg.childImageSharp.sizes,
              this.props.data.cardsScreenImg.childImageSharp.sizes,
              this.props.data.cardOrder3ScreenImg.childImageSharp.sizes,
              this.props.data.settingsTeamScreenImg.childImageSharp.sizes,
              this.props.data.branchsMenuScreenImg.childImageSharp.sizes,
            ]}
            mobileScreens={[
              InAppApprovalVideo,
              PaymentEditionVideo,
              TopUpVideo,
              LoginVideo,
            ]}
            role={tp('spendesk.role')}
            team={tp('spendesk.team')}
            testimonial={{
              picture: this.props.data.guilhem.childImageSharp.sizes,
              name: 'Guilhem Bellion',
              external: 'https://www.linkedin.com/in/guilhembellion/',
              role: tp('spendesk.testimonial.role'),
              text: tp('spendesk.testimonial.text'),
            }}
          />

          <Project
            id={s.dailymotionWork}
            name="Dailymotion"
            url="https://www.dailymotion.com"
            monthDuration={4}
            wasFreelanceWork={false}
            technologies={['React', 'Redux', 'Webpack']}
            productBrief={tp('dailymotion.product-brief')}
            role={tp('dailymotion.role')}
            team={tp('dailymotion.team')}
            keyPoints={[
              { text: 'dailymotion.key-developments.dev' },
              { text: 'dailymotion.key-developments.process'},
            ]}
          />

          <Project
            id={s.speakenWork}
            name="Speaken"
            url="https://speaken.com"
            monthDuration={4}
            wasFreelanceWork={true}
            technologies={['React', 'Redux']}
            productBrief={tp('speaken.product-brief')}
            role={tp('speaken.role')}
            team={tp('speaken.team')}
            keyPoints={[
              { text: 'speaken.key-developments.live-video' },
              { text: 'speaken.key-developments.social-features' },
            ]}
          />
        </main>

        <aside id="rate" class={s.rate}>
          <h3 id="rateTitle" class={cx('container', s.sectionTitle)}>{t('rate-title')}</h3>

          <div class="container">
            <p>
              Mon Tarif Journalier est 530€ HT.
            </p>
            <p>
              Je pratique des réductions :
            </p>
            <ul class={s.discountsList}>
              <li><span class={s.discount}>8%</span> (soit 487€ HT) après 30 jours de mission</li>
              <li><span class={s.discount}>16%</span> (soit 445€ HT) après 90 jours de mission</li>
              <li class={s.separator}></li>
              <li><span class={s.discount}>20%</span> (soit 424€ HT) pour les projets environnementaux, sociaux, éducatifs, à but non-lucratif.</li>
            </ul>
          </div>
        </aside>

        <div id={s.contactCTABlock}>
          <p>
            Do we talk the same language?<br/>
          </p>
          <a class={s.button} onClick={() => window.openContact()}>
            Contact <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>messenger</title> <g fill="none" fill-rule="evenodd"> <g transform="translate(-1228 -23)" fill="#fff" fill-rule="nonzero"> <g transform="translate(1138 13)"> <g transform="translate(90 10)"> <path d="m3.3333 24c-0.36819 0-0.66667-0.31603-0.66667-0.70588l-0.53333-5.6471c-1.3601-1.8066-2.111-4.0427-2.1333-6.3529 0-6.2259 5.3333-11.294 12-11.294 6.6667 0 12 5.0682 12 11.294 0 6.2259-5.3333 11.294-12 11.294-1.2029 0.0013954-2.4004-0.16957-3.56-0.50824l-4.88 1.8776c-0.072593 0.028209-0.14934 0.04255-0.22667 0.042353zm8.6667-22.588c-5.88 0-10.667 4.4329-10.667 9.8824 0.021651 2.0648 0.71374 4.0588 1.96 5.6471 0.081174 0.1049 0.13209 0.23233 0.14667 0.36706l0.46667 4.9553 4.28-1.6518c0.1343-0.046366 0.27903-0.046366 0.41333 0 1.1018 0.36023 2.2469 0.55042 3.4 0.56471 5.88 0 10.667-4.4329 10.667-9.8824 0-5.4494-4.7867-9.8824-10.667-9.8824z"/> <path d="m12.667 14.118c-0.28069-1.265e-4 -0.53123-0.18639-0.62667-0.46588l-1.08-3.2753-4.6667 2.4565c-0.21412 0.13642-0.48231 0.13459-0.69476-0.0047323-0.21245-0.13932-0.33346-0.39275-0.3135-0.6565 0.019966-0.26375 0.17756-0.49353 0.40825-0.59524l5.3333-2.8235c0.17853-0.10815 0.39422-0.12298 0.58446-0.040199s0.33375 0.25391 0.38887 0.46373l1.0933 3.3035 4.6667-2.2871c0.33504-0.16369 0.73197-0.0088217 0.8866 0.34591s0.0084088 0.77503-0.3266 0.93879l-5.3333 2.6259c-0.104 0.032168-0.21383 0.037014-0.32 0.014118z"/> </g> </g> </g> </g> </svg>
          </a>
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

    cardsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Cards.png" }) {
      ...ImageForLaptopMockup
    }
    requestsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Requests.png" }) {
      ...ImageForLaptopMockup
    }
    paymentsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Payments.png" }) {
      ...ImageForLaptopMockup
    }
    cardOrder3ScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/CardOrder-Step3.png" }) {
      ...ImageForLaptopMockup
    }
    settingsTeamScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Settings-Team.png" }) {
      ...ImageForLaptopMockup
    }
    branchsMenuScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Branchs-Menu.png" }) {
      ...ImageForLaptopMockup
    }
    guilhem:file(relativePath: { eq: "data/Spendesk/guilhem.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 64, maxHeight: 64) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    guillaume:file(relativePath: { eq: "data/habx/guillaume.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 64, maxHeight: 64) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    habxConfigurateur:file(relativePath: { eq: "data/habx/screenshots/Configurateur-pieces.png" }) {
      ...ImageForLaptopMockup
    }
    habxConfigurateurPanelOuvert:file(relativePath: { eq: "data/habx/screenshots/Configurateur-pieces-panel-ouvert.png" }) {
      ...ImageForLaptopMockup
    }
  }

  fragment ImageForLaptopMockup on File {
    childImageSharp {
      sizes(maxWidth: 800, quality: 35) {
        ...GatsbyImageSharpSizes
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

class Project extends PureComponent {
  showScreen = (device, slide) => {
    smoothScrollTo(this.mockupsDivRef.offsetTop - 100, 300)
    setTimeout(() => this[`${device}Ref`].changeScreen(slide), 200)
  }

  render() {
    const {
      name,
      url,
      monthDuration,
      wasFreelanceWork,
      technologies,

      productBrief,
      mobileScreens,
      laptopScreens,
      keyPoints,
      role,
      team,
      testimonial,

      ...others
    } = this.props;

    const { lang } = this.context;
    const tAll = i18n(lang, translations)
    const t = i18n(lang, projectTranslations);

    return (
      <section class={s.workBlock} {...others}>
        <div class="container">
          <h2>
            <a href={url} class="external-link" target="_blank">{name}</a>
             &nbsp;- {monthDuration} {monthDuration > 1 ? t('months') : t('month')}<span class="muted"> - {wasFreelanceWork === true ? t('as-freelance') : ''}{wasFreelanceWork === false ? t('as-employee') : ''}{wasFreelanceWork === 'both' ? t('as-both') : ''}</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 30px;">
            {t('techs-used')}&nbsp;
            {technologies.reduce((els, current, index) => {
              if (index > 0) {
                els.push(', ')
              }

              els.push(getTextForTechno(current))
              return els
            }, [])}
          </h3>

          <p class={s.brief} dangerouslySetInnerHTML={{ __html: productBrief }} />

          {mobileScreens && laptopScreens &&
          <MobileAndLaptopMockups
            laptopScreens={laptopScreens}
            mobileScreens={mobileScreens}
            mobileRef={el => this.mobileRef = el}
            desktopRef={el => this.desktopRef = el}
            divRef={el => this.mockupsDivRef = el}
          /> }

          {laptopScreens && !mobileScreens &&
          <LaptopMockup
            screens={laptopScreens}
            desktopRef={el => this.desktopRef = el}
            divRef={el => this.mockupsDivRef = el}
          />}


          {keyPoints && keyPoints.length > 0 && (
            <div class={s.keyPoints}>
              <h3>{t('key-developments')}</h3>

              <ul>
                {keyPoints.map(point => {
                  let linkEl

                  if (point.link) {
                    let classNames = [s.keyPointLink]
                    let onClick
                    let href
                    let content

                    if (point.link.startsWith('#')) {
                      const parts = point.link.split('#')
                      const device = parts[1]
                      const slideToGoTo = parseInt(parts[2], 10)
                      onClick = () => this.showScreen(device, slideToGoTo)
                      href = 'javascript:;'
                      content = point.linkText || tAll('link-see-in-image')
                    } else {
                      classNames.push('external-link')
                      href = point.link
                      content = point.link.replace(/(https?:\/\/(www\.)?)/gi, '')
                    }

                    linkEl = <a target="_blank" href={href} onClick={onClick} class={classNames.join(' ')}>{content}</a>
                  }

                  return (
                    <li>
                      {t(point.text)}
                      {linkEl}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          

          <div class={s.columns}>
            <div class={cx(s.columnLeft, s.column)}>
              <h3>{t('role')}</h3>
              <p dangerouslySetInnerHTML={{ __html: role }} />
            </div>
            <div class={cx(s.columnRight, s.column)}>
              <h3>{t('team')}</h3>
              <p dangerouslySetInnerHTML={{ __html: team }} />
            </div>
          </div>

          {testimonial &&
            <div class={s.testimonial}>
              <svg class={cx(s.quote, s.quoteLeft)} viewBox="0 0 90 80" width="90" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 51.791C0 22.982 26.598 5.429 30.729 3.241c2.992-1.63 5.762-2.725 7.66-2.725 1.653 0 2.747.804 2.747 2.189 0 1.384-1.385 3.015-2.747 4.109C34.57 9.561 23.85 23.831 23.85 37.275c0 3.551 1.921 6.834 4.109 7.95 2.479 1.362 14.002 3.841 14.002 18.357 0 8.509-6.856 15.9-16.459 15.9C12.886 79.483 0 69.903 0 51.791zm48.014 0c0-28.809 26.621-46.362 30.73-48.55C81.76 1.611 84.506.516 86.426.516c1.652 0 2.725.804 2.725 2.189 0 1.384-1.361 3.015-2.725 4.109-3.84 2.747-14.537 17.017-14.537 30.461 0 3.551 1.92 6.834 4.109 7.95C78.477 46.588 90 49.066 90 63.583c0 8.509-6.879 15.9-16.482 15.9-12.596 0-25.504-9.58-25.504-27.692z" fill="#000" fill-rule="nonzero"/></svg>
              <svg class={cx(s.quote, s.quoteRight)} viewBox="0 0 90 80" width="90" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M90 51.791c0-28.809-26.598-46.362-30.729-48.55-2.992-1.63-5.762-2.725-7.66-2.725-1.653 0-2.747.804-2.747 2.189 0 1.384 1.385 3.015 2.747 4.109C55.43 9.561 66.15 23.831 66.15 37.275c0 3.551-1.921 6.834-4.109 7.95-2.479 1.362-14.002 3.841-14.002 18.357 0 8.509 6.856 15.9 16.459 15.9C77.114 79.483 90 69.903 90 51.791zm-48.014 0c0-28.809-26.621-46.362-30.73-48.55C8.24 1.611 5.494.516 3.574.516 1.922.516.849 1.32.849 2.705c0 1.384 1.361 3.015 2.725 4.109 3.84 2.747 14.537 17.017 14.537 30.461 0 3.551-1.92 6.834-4.109 7.95C11.523 46.588 0 49.066 0 63.583c0 8.509 6.879 15.9 16.482 15.9 12.596 0 25.504-9.58 25.504-27.692z" fill="#000" fill-rule="nonzero"/></svg>
              <h3>{t('feedback')}</h3>
              <div class={s.content}>
                <div class={s.text}><p class={s.inner} dangerouslySetInnerHTML={{ __html: testimonial.text }} /></div>
                <div class={s.who}>
                  <Img outerWrapperClassName={s.picture} sizes={testimonial.picture} />
                  <div class={s.details}>
                    <p class={s.name}><a href={testimonial.external} class="external-link" target="_blank">{testimonial.name}</a></p>
                    <p class={s.role}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </section>
    );
  }
}

class LaptopMockup extends PureComponent {
  render() {
    const {
      isLarge,
      isMedium,
      isSmall,
      screens,
      desktopRef,
      divRef,
      width,
    } = this.props;

    const finalWidth = width
      ? Math.min(width - 16, 754)
      : 754

    return (
      <div ref={divRef} class={s.workMockups}>
        <DeviceMockup
          key="desktop"
          ref={desktopRef}
          style={{ margin: 'auto' }}
          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          screens={screens}
          width={finalWidth}
          screensSpacing={6}
        />
      </div>
    )
  }
}

const mapSizesToProps = ({ width }) => ({
  isLarge: width >= 1080,
  isMedium: width >= 768 && width < 1080,
  isSmall: width < 768,
  width: width < 768 ? width : undefined,
})

LaptopMockup = withSizes(mapSizesToProps)(LaptopMockup)

class MobileAndLaptopMockups extends PureComponent {
  render() {
    const {
      isLarge,
      isMedium,
      isSmall,
      mobileRef,
      desktopRef,
      divRef,
      width,
    } = this.props;

    if (isLarge || isMedium) {
      const mobileWidth = isLarge
        ? 233
        : 190;
      const mobileMargin = isLarge
        ? 90
        : 57;
      const laptopWidth = isLarge
        ? 789
        : 520;

      const mobileStyle = {
        marginTop: 50,
        marginLeft: mobileMargin,
        marginRight: -mobileMargin,
        float: 'left',
      };

      return (
        <div ref={divRef} class={s.workMockups}>
          <DeviceMockup
            class={s.combinedMockupsMobile}
            ref={mobileRef}
            id={s.spendeskMobileMockup}
            style={mobileStyle}
            skinBackground={GooglePixelBackground}
            skinDimensions={GooglePixelStats}
            width={mobileWidth}
            screens={this.props.mobileScreens}
            screensSpacing={6}
          />
          <DeviceMockup
            class={s.combinedMockupsDesktop}
            ref={desktopRef}
            id={s.spendeskUbuntuMockup}
            skinBackground={UbuntuLaptopBackground}
            skinDimensions={UbuntuLaptopStats}
            width={laptopWidth}
            screens={this.props.laptopScreens}
            screensSpacing={6}
          />
        </div>
      );
    }

    const mobileStyle = {
      margin: 'auto',
      marginBottom: 55,
    };

    return (
      <div ref={divRef} class={s.workMockups}>
        <DeviceMockup
          id={s.spendeskMobileMockup}
          style={mobileStyle}
          skinBackground={GooglePixelBackground}
          skinDimensions={GooglePixelStats}
          width={Math.min(400, width - 16)}
          screens={this.props.mobileScreens}
          screensSpacing={6}
        />
        <DeviceMockup
          id={s.spendeskUbuntuMockup}
          style={{ margin: 'auto' }}
          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          width={Math.min(700, width - 16)}
          screens={this.props.laptopScreens}
          screensSpacing={6}
        />
      </div>
    );
  }
}

MobileAndLaptopMockups = withSizes(mapSizesToProps)(MobileAndLaptopMockups)
