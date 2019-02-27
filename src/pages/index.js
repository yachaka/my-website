
import React, { PureComponent } from 'react'
import cx from 'classnames';
import merge from 'lodash.merge';
import Link from '../components/Link';
import Img from 'gatsby-image';
import windowSize from 'react-window-size';
import smoothScrollTo from 'smooth-scroll-to'

import saasSVG from '!!raw!../img/saas.svg';
import mobileSVG from '!!raw!../img/mobile.svg';
import learnSVG from '!!raw!../img/learn.svg';
import s from './index.module.scss';

import i18n from '../i18n';
import specificTranslations from './index.translations.json';
import projectTranslations from './projects.translations.json';
import commonTranslations from '../common.translations.json';
import projectsPageUrls from './projects/index.urls.json';

import DeviceMockup from '../components/DeviceMockup';
import InAppApprovalVideo from '../data/Spendesk/mobileapp/in-app-approval.mp4';
import PaymentEditionVideo from '../data/Spendesk/mobileapp/payment-edition.mp4';
import TopUpVideo from '../data/Spendesk/mobileapp/top-up.mp4';
import LoginVideo from '../data/Spendesk/mobileapp/login.mp4';

import GooglePixelBackground from '../components/DeviceMockup/skins/GooglePixel/GooglePixel.png';
import GooglePixelStats from '../components/DeviceMockup/skins/GooglePixel/dimensions';
import UbuntuLaptopBackground from '../components/DeviceMockup/skins/UbuntuLaptop/Laptop.svg';
import UbuntuLaptopStats from '../components/DeviceMockup/skins/UbuntuLaptop/dimensions.js';

const translations = merge(commonTranslations, specificTranslations);

class IndexPage extends PureComponent {
  onContactLinkClick = () => {
    window.openContact();
  }

  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);
    const tp = i18n(lang, projectTranslations)

    const presentation2Links = {
      'projects': (text) => (<Link to={projectsPageUrls[lang]}>{text}</Link>),
      'contact': (text) => (<a href="javascript:;" onClick={this.onContactLinkClick}>{text}</a>),
    };

    const presentation2Tokens = t('presentation2')
      .split(/(\{\{[a-zA-Z]+\}\}[a-zA-Z0-9\séè]+\{\{\/[a-zA-Z]+\}\}|<br\/>)/g);

    const presentation2Children = presentation2Tokens.map(tk => {
      if (tk[0] === '{') {
        const name = tk.substring(2, tk.indexOf('}'));
        const text = tk.substr(name.length + 4, tk.length - (2 * name.length + 4 * 2 + 1));

        return (presentation2Links[name](text));
      } else if (tk === '<br/>') {
        return (<br/>);
      }

      return tk;
    });

    return (
      <div id={s.home}>
        <header class={cx('container', s.hero)}>
          <h1 class={cx(s.heroText)}>
            Bonjour 👋 <br/>
            Je suis un développeur Fullstack JavaScript.
          </h1>
          <h2 class={cx(s.heroStatus)}>
            Je cherche une mission (en tant que freelance),<br/>
            ou un poste dans le domaine environnemental ou créatif.
          </h2>
          <div class={s.heroLinks}>
            <a href="#" class={s.workLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" stroke="#0080f7" fill="none" stroke-linecap="round" stroke-width="3"><path d="M6 16.672l9 9m9-9l-9 9m-9-19l9 9m9-9l-9 9"/></svg>
              <span class={s.underline}>Mes réalisations</span>
            </a>
            <a href="#" class={s.cvLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="#0080f7" fill-rule="nonzero"><path d="M29.68 30.6H2.78C1.4 30.6 0 29.125 0 27.733V6.864c0-1.3 1.16-2.226 2.783-2.226h6.03c.37 0 .696.325.696.696s-.325.696-.696.696h-6.03c-.557 0-1.4.232-1.4.835v20.87c0 .65.788 1.484 1.4 1.484h26.9c.5 0 .928-.788.928-1.484V6.864c0-.5-.14-.835-.928-.835H23.2c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h6.493c1.438 0 2.32.835 2.32 2.226v20.87c0 1.4-.88 2.875-2.32 2.875zM16.046 19.85c-.186 0-.37-.046-.5-.186l-5.148-5.194a.67.67 0 0 1 0-.974.67.67 0 0 1 .974 0L16.5 18.7a.67.67 0 0 1 0 .974c-.14.14-.325.186-.464.186z"/><path d="M16.046 19.85c-.186 0-.37-.046-.5-.186a.67.67 0 0 1 0-.974l5.194-5.148a.67.67 0 0 1 .974 0 .67.67 0 0 1 0 .974L16.5 19.664c-.14.14-.325.186-.464.186z"/><path d="M16 19.246c-.37 0-.696-.325-.696-.696V.928c0-.37.325-.696.696-.696s.696.325.696.696V18.55c0 .37-.325.696-.696.696zm6.725 5.334H9.74c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h12.986c.37 0 .696.325.696.696s-.325.696-.696.696z"/></svg>
              <span class={s.underline}>CV.pdf</span>
            </a>
          </div>
        </header>

        <main id={s.projects}>
          <h3 class={cx('container', s.sectionTitle)}>
            Réalisations
          </h3>

          <Project
            id={s.habxWork}
            name="habx"
            url="https://habx.fr"
            monthDuration={9}
            wasFreelanceWork={false}
            technologies={['React', 'Apollo', 'GraphQL', 'AWS', 'Redux', 'Webpack']}
            productBrief={tp('habx.product-brief')}
            role={tp('habx.role')}
            team={tp('habx.team')}
            keyPoints={[
              { text: 'habx.key-developments.configurateur', link: '#desktop#0' },
              { text: 'habx.key-developments.landing'},
              { text: 'habx.key-developments.robot'},
              { text: 'habx.key-developments.crm'},
              { text: 'habx.key-developments.tools', link: 'https://github.com/habx/tools-sns-monitoring'},
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
            id={s.dailymotionWork}
            name="Dailymotion"
            url="https://www.dailymotion.com"
            monthDuration={4}
            wasFreelanceWork={false}
            technologies={['React', 'Redux', 'Webpack']}
            productBrief={tp('dailymotion.product-brief')}
            role={tp('dailymotion.role')}
            team={tp('dailymotion.team')}
          />

          <Project
            id={s.spendeskWork}
            name="Spendesk"
            url="https://www.spendesk.com"
            monthDuration={10}
            wasFreelanceWork={false}
            technologies={['Node.js', 'React', 'React-Native', 'GraphQL', 'Relay', 'Webpack']}
            productBrief={tp('spendesk.product-brief')}
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
              text: `Ilyes a le don de conjuguer parfaitement créativité et pragmatisme !<br/><br/>
  J'ai eu l'occasion de travailler étroitement avec lui pendant 10 mois chez Spendesk, durant lesquels il a participé avec succès à de nombreux projets. Il a notamment été intégralement responsable du développement et de la maintenance de notre application mobile en React Native, et a posé les bases de notre nouvelle API GraphQL. [...]<br/><br/>Son expertise technique et sa bonne humeur sont de vrais atouts dans une équipe !`,
            }}
          />

          <Project
            id={s.speakenWork}
            name="Speaken"
            url="https://speaken.com"
            monthDuration={4}
            wasFreelanceWork={true}
            technologies={['React', 'Redux']}
            productBrief={tp('speaken.product-brief')}
            laptopScreens={['green']}
            role={tp('speaken.role')}
            team={tp('speaken.team')}
          />
        </main>
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
    smoothScrollTo(this.mockupsDivRef.offsetTop - 120, 300)
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
    const t = i18n(lang, projectTranslations);
    console.log('project render', name)
    return (
      <section class={s.workBlock} {...others}>
        <div class="container">
          <h2>
            <a href={url} class="external-link" target="_blank">{name}</a>
             &nbsp;- {monthDuration} {monthDuration > 1 ? t('months') : t('month')}<span class="muted"> - {wasFreelanceWork ? t('as-freelance') : t('as-employee')}</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 30px;">
            {t('techs-used')} {technologies.join(', ')}
          </h3>

          <p class={s.brief} dangerouslySetInnerHTML={{ __html: productBrief }} />

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
                      content = 'Voir en image'
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
            desktopRef={el => {console.log('refff', name, el); this.desktopRef = el}}
            divRef={el => this.mockupsDivRef = el}
          />}

          

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
      isXSmall,
      screens,
      desktopRef,
      divRef,
    } = this.props;

    const width = 880

    return (
      <div ref={divRef} class={s.workMockups}>
        <DeviceMockup
          ref={desktopRef}
          style={{ margin: 'auto' }}
          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          screens={screens}
          width={width}
          screensSpacing={6}
        />
      </div>
    )
  }
}


class MobileAndLaptopMockups extends PureComponent {
  render() {
    const {
      isLarge,
      isMedium,
      isSmall,
      isXSmall,
      mobileRef,
      desktopRef,
      divRef,
    } = this.props;

    if (isLarge || isMedium) {
      const mobileWidth = isLarge
        ? 233
        : 212;
      const mobileMargin = isLarge
        ? 90
        : 80;
      const laptopWidth = isLarge
        ? 789
        : 728;

      const mobileStyle = {
        marginTop: 50,
        marginLeft: mobileMargin,
        marginRight: -mobileMargin,
        float: 'left',
      };

      return (
        <div ref={divRef} class={s.workMockups}>
          <DeviceMockup
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
      <div>
        <div class="row"><div class="col-xs-12">
          <DeviceMockup
            id={s.spendeskMobileMockup}
            style={mobileStyle}
            skinBackground={GooglePixelBackground}
            skinDimensions={GooglePixelStats}
            width={400}
            screens={this.props.mobileScreens}
            screensSpacing={6}
          />
        </div></div>
        <div class="row"><div class="col-xs-12">
          <DeviceMockup
            id={s.spendeskUbuntuMockup}
            style={{ margin: 'auto' }}
            skinBackground={UbuntuLaptopBackground}
            skinDimensions={UbuntuLaptopStats}
            width={700}
            screens={this.props.laptopScreens}
            screensSpacing={6}
          />
        </div></div>
      </div>
    );
  }
}

