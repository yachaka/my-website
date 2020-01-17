
import React, { PureComponent } from 'react'
import cx from 'classnames';
import Helmet from 'react-helmet'
import smoothScrollTo from 'smooth-scroll-to'

import s from './index.module.scss';

import Link from '../../components/Link';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import LangContext from '../../lib/i18n/LangContext';
import i18n from '../../lib/i18n/i18n';
import experiences from '../../data/experiences';
import specificTranslations from './index.translations.json';
import Dropdown from '../../components/Dropdown/Dropdown';

import meSmallOvalImg from '../../img/me-small-oval-2019.png'

import ProjectFold from './ProjectFold';



const translations = specificTranslations;
const freelanceRate = 440

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);

    this.experiencesWebsite = {
      ...experiences,
    };

    /* Habx sharp images */
    this.experiencesWebsite.habx.laptopScreenshots.homeConfigure.data = props.data.habxConfigurateur.childImageSharp.sizes;
    this.experiencesWebsite.habx.laptopScreenshots.homeConfigureOpened.data = props.data.habxConfigurateurPanelOuvert.childImageSharp.sizes;
    this.experiencesWebsite.habx.feedback.picture = props.data.guillaume.childImageSharp.sizes;

    /* Spendesk sharp images */
    this.experiencesWebsite.spendesk.laptopScreenshots.requests.data = props.data.requestsScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.laptopScreenshots.spends.data = props.data.paymentsScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.laptopScreenshots.cards.data = props.data.cardsScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.laptopScreenshots.cardOrder.data = props.data.cardOrder3ScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.laptopScreenshots.members.data = props.data.settingsTeamScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.laptopScreenshots.branches.data = props.data.branchsMenuScreenImg.childImageSharp.sizes;
    this.experiencesWebsite.spendesk.feedback.picture = props.data.guilhem.childImageSharp.sizes;

    const t = i18n(props.pageContext.lang, translations);
    this.sorts = [
      { key: 'recommended', text: t('experiences-sort-recommended') },
      { key: 'date-asc', text: t('experiences-sort-asc') },
      { key: 'date-desc', text: t('experiences-sort-desc') },
    ];

    this.state = {
      experiencesSort: this.sorts[0],
    };
  }

  onContactLinkClick = () => {
    window.openContact();
  }

  scrollToWork = () => {
    smoothScrollTo(this.workTitleRef.offsetTop - 100, 300)
  }

  render() {
    const { pageContext: { lang } } = this.props;
    const t = i18n(lang, translations);
    const { experiencesSort } = this.state;


    let experiencesFinal = Object.values(this.experiencesWebsite);
    if (experiencesSort.key === 'recommended') {
      // no-op
    } else if (experiencesSort.key === 'date-asc') {
      experiencesFinal.sort((a, b) => {
        const date1 = a.dates[0][0] ? a.dates[0][0] : a.dates[0];
        const date2 = b.dates[0][0] ? b.dates[0][0] : b.dates[0];

        return date1.isBefore(date2) ? -1 : 1;
      });
    } else if (experiencesSort.key === 'date-desc') {
      experiencesFinal.sort((a, b) => {
        const date1 = a.dates[0][0] ? a.dates[0][0] : a.dates[0];
        const date2 = b.dates[0][0] ? b.dates[0][0] : b.dates[0];

        return date2.isBefore(date1) ? -1 : 1;
      });
    }

    const page = {
      title: {
        fr: `Chef de projet IT/développeur fullstack freelance sur Paris - Ilyes Hermellin (React, Node.js, GraphQL, React Native, JavaScript, AWS et plus)`,
        en: `Freelance IT Project Manager/Senior Fullstack Developer in London - Ilyes Hermellin (React, Node.js, GraphQL, React Native, JavaScript, AWS and more)`,
      },
      description: {
        fr: 'Je suis freelance, basé à Paris et Londres, soit en tant que chef de projet IT, soit en tant que développeur fullstack senior (principalement en JavaScript). Mes expériences professionnelles/mon CV, ma disponibilité et mon TJM sont sur mon site web !',
        en: `I am a freelance, in Paris or London, either as an IT project manager or a senior fullstack developer (mainly in JavaScript). Work experience/CV, avaibility and rate are on my website!`,
      },
    };

    return (
      <LangContext.Provider value={lang}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{page.title[lang]}</title>
          <meta name="description" content={page.description[lang]} />
          {lang === 'fr'
            ? <link rel="alternate" href="/en" hreflang="en" />
            : <link rel="alternate" href="/fr" hreflang="fr" />}
        </Helmet>

        <Nav />

        <div id={s.home}>
          <header class={cx('container', s.hero)}>
            <h1 class={cx(s.heroText)}>
              <img class={cx(s.meSmallOval)} src={meSmallOvalImg} />
              <span dangerouslySetInnerHTML={{ __html: t('hero-text') }} />
            </h1>
            <h2 class={cx(s.heroStatus)} dangerouslySetInnerHTML={{ __html: t('hero-status') }} />

            <div class={s.heroLinks}>
              <a href="#" class={s.workLink} onClick={this.scrollToWork}>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" stroke="#0080f7" fill="none" stroke-linecap="round" stroke-width="3"><path d="M6 16.672l9 9m9-9l-9 9m-9-19l9 9m9-9l-9 9"/></svg>
                <span class={s.underline}>{t('hero-work-link')}</span>
              </a>
              <Link to="/cv" class={s.cvLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="#0080f7" fill-rule="nonzero"><path d="M29.68 30.6H2.78C1.4 30.6 0 29.125 0 27.733V6.864c0-1.3 1.16-2.226 2.783-2.226h6.03c.37 0 .696.325.696.696s-.325.696-.696.696h-6.03c-.557 0-1.4.232-1.4.835v20.87c0 .65.788 1.484 1.4 1.484h26.9c.5 0 .928-.788.928-1.484V6.864c0-.5-.14-.835-.928-.835H23.2c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h6.493c1.438 0 2.32.835 2.32 2.226v20.87c0 1.4-.88 2.875-2.32 2.875zM16.046 19.85c-.186 0-.37-.046-.5-.186l-5.148-5.194a.67.67 0 0 1 0-.974.67.67 0 0 1 .974 0L16.5 18.7a.67.67 0 0 1 0 .974c-.14.14-.325.186-.464.186z"/><path d="M16.046 19.85c-.186 0-.37-.046-.5-.186a.67.67 0 0 1 0-.974l5.194-5.148a.67.67 0 0 1 .974 0 .67.67 0 0 1 0 .974L16.5 19.664c-.14.14-.325.186-.464.186z"/><path d="M16 19.246c-.37 0-.696-.325-.696-.696V.928c0-.37.325-.696.696-.696s.696.325.696.696V18.55c0 .37-.325.696-.696.696zm6.725 5.334H9.74c-.37 0-.696-.325-.696-.696s.325-.696.696-.696h12.986c.37 0 .696.325.696.696s-.325.696-.696.696z"/></svg>
                <span class={s.underline}>CV.pdf</span>
              </Link>
            </div>
          </header>

          <main id={s.projects}>
            <h3 id="projects" class={cx('container', s.sectionTitle)} ref={el => this.workTitleRef = el}>
              {t('work')}
            </h3>

            <div className="container">
              <span id={s.sortText}>{t('sort')}</span>
              <Dropdown
                id={s.sortExperiencesDropdown}
                options={this.sorts}
                selected={experiencesSort}
                onSelect={(o) => this.setState({ experiencesSort: o })}
              />
            </div>

            {experiencesFinal.map(exp => (
              <ProjectFold
                key={exp.name}
                id={s[`${exp.name.toLowerCase()}Work`]}
                {...exp}
              />
            ))}
          </main>

          <aside id="rate" class={s.rate}>
            <h3 id="rateTitle" class={cx('container', s.sectionTitle)}>{t('rate-title')}</h3>

            <div class="container">
              <p dangerouslySetInnerHTML={{ __html: t('rate-block').replace('{{rate}}', freelanceRate) }} />
            </div>
          </aside>

          <div id={s.contactCTABlock}>
            <p>
              {t('contact-cta-text')}<br/>
            </p>
            <a class={s.button} onClick={() => window.openContact()}>
              Contact <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>messenger</title> <g fill="none" fill-rule="evenodd"> <g transform="translate(-1228 -23)" fill="#fff" fill-rule="nonzero"> <g transform="translate(1138 13)"> <g transform="translate(90 10)"> <path d="m3.3333 24c-0.36819 0-0.66667-0.31603-0.66667-0.70588l-0.53333-5.6471c-1.3601-1.8066-2.111-4.0427-2.1333-6.3529 0-6.2259 5.3333-11.294 12-11.294 6.6667 0 12 5.0682 12 11.294 0 6.2259-5.3333 11.294-12 11.294-1.2029 0.0013954-2.4004-0.16957-3.56-0.50824l-4.88 1.8776c-0.072593 0.028209-0.14934 0.04255-0.22667 0.042353zm8.6667-22.588c-5.88 0-10.667 4.4329-10.667 9.8824 0.021651 2.0648 0.71374 4.0588 1.96 5.6471 0.081174 0.1049 0.13209 0.23233 0.14667 0.36706l0.46667 4.9553 4.28-1.6518c0.1343-0.046366 0.27903-0.046366 0.41333 0 1.1018 0.36023 2.2469 0.55042 3.4 0.56471 5.88 0 10.667-4.4329 10.667-9.8824 0-5.4494-4.7867-9.8824-10.667-9.8824z"/> <path d="m12.667 14.118c-0.28069-1.265e-4 -0.53123-0.18639-0.62667-0.46588l-1.08-3.2753-4.6667 2.4565c-0.21412 0.13642-0.48231 0.13459-0.69476-0.0047323-0.21245-0.13932-0.33346-0.39275-0.3135-0.6565 0.019966-0.26375 0.17756-0.49353 0.40825-0.59524l5.3333-2.8235c0.17853-0.10815 0.39422-0.12298 0.58446-0.040199s0.33375 0.25391 0.38887 0.46373l1.0933 3.3035 4.6667-2.2871c0.33504-0.16369 0.73197-0.0088217 0.8866 0.34591s0.0084088 0.77503-0.3266 0.93879l-5.3333 2.6259c-0.104 0.032168-0.21383 0.037014-0.32 0.014118z"/> </g> </g> </g> </g> </svg>
            </a>
          </div>
        </div>
        <Footer />
      </LangContext.Provider>
    );
  }
};

export default IndexPage;
