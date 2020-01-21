import React, { useState, useEffect } from 'react';
import Color from 'color';
import Helmet from 'react-helmet';
import BreeSerifFont from './fonts/BreeSerif-Regular.ttf';
import LatoRegular from './fonts/Lato/Lato-Regular.ttf';
import LatoBold from './fonts/Lato/Lato-Bold.ttf';
import pictureMeFace from './img/picture-me-face-400x-round.png';
import { Page, Text, Image, Link, View, Document, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';

import experiences from '../../data/experiences';
import translations from './cv.translations';
import i18n from '../../lib/i18n/i18n';
import quoteLeft from './icons/quote-left@3x.png';
import quoteRight from './icons/quote-right@3x.png';
import mailIcon from './icons/mail@3x.png';
import quoteCircleIcon from './icons/quote-intro-circle.png';
import locationIcon from './icons/location@3x.png';
import externalLinkIcon from './icons/external-link@3x.png';
import phoneIcon from './icons/phone@3x.png';
import languagesIcon from './icons/languages@3x.png';

const IntenseBlue = '#0414E7';
Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
});
Font.registerHyphenationCallback(word => [word]);

Font.register({
  family: 'BreeSerif',
  src: BreeSerifFont,
  fontStyle: 'normal',
  fontWeight: 400,
});
Font.register({
  family: 'Lato',
  src: LatoBold,
  fontStyle: 'normal',
  fontWeight: 700,
});

Font.register({
  family: 'Lato',
  src: LatoRegular,
  fontStyle: 'normal',
  fontWeight: 400,
});

// Create styles
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Lato',
    lineHeight: 1.4,
  },
  bold: {
    fontWeight: 700,
  },
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontFamily: 'Lato',
    fontSize: 12,
    padding: 45,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  fontSize11: {
    fontSize: 11,
  },
  fontSize12: {
    fontSize: 12,
  },
  h2: {
    marginBottom: 15,
  },

  hero: {
    flex: 1,
    fontSize: 11,
    flexDirection: 'row',
  },
  heroColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heroContactDetail: {
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heroContactDetailIcon: {
    flex: 0,
    width: 14,
    height: 14,
    marginTop: 1,
    marginRight: 6,
  },
  heroContactDetailText: {
    flex: 0,
    width: 110,
  },
  pictureMeColumn: {
    flex: 0,
  },
  pictureMe: {
    width: 80,
    flex: 0,
  },

  intro : {
    fontSize: 11,
    borderTop: 1,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  introIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
  introText: {
    lineHeight: 1.3,
    flex: 1,
    fontFamily: 'Lato',
  },

  highlight: {
    fontSize: 11,
    marginBottom: 15,
  },
  highlightTextBold: {
    fontWeight: 700,
    letterSpacing: '0.2',
  },
  highlightLink: {
  },
  experience: {
    marginBottom: 15,
    fontSize: 11,
  },
  experienceHeader: {
    backgroundColor: 'pink',
    marginLeft: -50,
    marginRight: -50,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  experienceSummary: {
    marginBottom: 8,
    fontSize: 12,
  },
  experienceHeadline: {
    fontSize: 12,
    fontWeight: 700,
  },
  experienceDate: {
    fontSize: 11,
  },

  experienceBullets: {
    marginBottom: 12,
  },
  experienceBulletPointDot: {
    marginLeft: 12,
    marginRight: 12,
    flex: 0,
  },
  experienceBulletPointText: {
    flex: 1,
  },
  experienceBulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
  },

});

const shortMonths = {
  fr: [`Jan`, `Fev`, 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  en: [`Jan`, `Feb`, 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

function getRangeDateString(lang, dates) {
  return `${shortMonths[lang][dates[0].month()]}. ${dates[0].year().toString().substr(2)} -> ${shortMonths[lang][dates[1].month()]} ${dates[1].year().toString().substr(2)}`;
}

const ExternalLink = ({ src, children, iconSize = 12, ...others }) => (
  <Link src={src} {...others}>
    {children}
    <Image src={externalLinkIcon} style={{ width: iconSize, height: iconSize, position: 'absolute', top: 0, right: -iconSize }} />
  </Link>
);

const Hr = ({ style }) => (
  <View style={[style, { borderBottom: 1, borderBottomColor: '#ddd' }]} />
);

const BaseText = ({ style, ...others }) => (
  <Text style={[styles.baseText, style]} {...others} />
);

const MainTitleStyle = {
  color: IntenseBlue,
  fontFamily: 'BreeSerif',
  fontSize: 16,
  textAlign: 'center',
};

const MainTitle = ({ style, children }) => (
  <BaseText style={[MainTitleStyle, style]}>{children}</BaseText>
)

const H2Style = {
  color: IntenseBlue,
  fontFamily: 'BreeSerif',
  fontSize: 15,
};

const H2 = ({ style, children }) => (
  <BaseText style={[H2Style, style]}>{children}</BaseText>
)


const ExperienceRecommendation = ({
  lang,
  name,
  role,
  email,
  shortText,
  color,
  colorFxRatio,
}) => {
  const t = i18n(lang, translations);

  const borderColor = (new Color(color)).lighten(0.70 * colorFxRatio).hex();
  const backgroundColor = (new Color(color)).lighten(0.93 * colorFxRatio).hex();

  return (
    <View wrap={false} style={{ position: 'relative', marginBottom: 5, width: '90%', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', padding: 8, borderWidth: 1, borderRadius: 6, backgroundColor, borderColor }}>
      <Image src={quoteLeft} style={{ position: 'absolute', top: -6, left: -14, width: 25, height: 25 }} />
      <Image src={quoteRight} style={{ position: 'absolute', bottom: -3, right: -12, width: 25, height: 25 }} />
      <View style={{ flexDirection: 'column', fontSize: 11, marginRight: 12, flex: 0 }}>
        <BaseText style={{ fontWeight: 'bold' }}>{name}</BaseText>
        <BaseText>{role[lang]}</BaseText>
        <BaseText>{email}</BaseText>
      </View>

      <View style={{ flex: 1 }}>
        <BaseText>{shortText[lang].replace(/<br ?\/>/g, "\n")}</BaseText>

        <ExternalLink src="https://www.linkedin.com/in/ilyeshermellin/" style={{ fontSize: 9 }}>
          {t('readFullRecommendation')}
        </ExternalLink>
      </View>
    </View>
  );
}

const Experience = ({
  title,
  titleBgColor,
  color,
  colorFxRatio,
  date,
  keyPoints,
  summary,

  experienceRecommendation,
  lang,
}) => (
  <View style={styles.experience}>
    <View style={[styles.experienceHeader, { backgroundColor: titleBgColor }]} wrap={false}>
      <BaseText style={styles.experienceHeadline}>
        {title}
      </BaseText>

      <BaseText style={styles.experienceDate}>
      {date}
      </BaseText>
    </View>

    {summary && (
      <View style={styles.experienceSummary}>
        <BaseText>{summary}</BaseText>
      </View>
    )}

    {keyPoints && (
      <View style={[styles.experienceBullets, !experienceRecommendation && { marginBottom: 0 }]}>
        {keyPoints.map(p => (
          <View style={styles.experienceBulletPoint} wrap={false}>
            <View style={styles.experienceBulletPointDot}><BaseText>•</BaseText></View>
            <BaseText style={styles.experienceBulletPointText}>{p}</BaseText>
          </View>
        ))}
      </View>
    )}

    {experienceRecommendation && (
      <ExperienceRecommendation
        lang={lang}
        color={color}
        colorFxRatio={colorFxRatio}
        {...experienceRecommendation}
      />
    )}
  </View>
)

const Reference = ({
  style,
  personName,
  personRole,
  personPhone,
  personEmail,
  text,
  externalLinkUrl,
  externalLinkText
}) => (
  <View style={[style, { flexDirection: 'row', fontSize: 11 }]}>
    <View style={{ flex: 0, width: 150, marginRight: 15 }}>
      <Text style={[styles.bold, { fontSize: 12 }]}>{personName}</Text>
      <Text>{personRole}</Text>
      {personPhone && <Text>{personPhone}</Text>}
      <Text>{personEmail}</Text>
    </View>

    <View style={{ flex: 1, position: 'relative' }}>
      <Image src={quoteLeft} style={{ position: 'absolute', top: -10, left: -25, width: 25, height: 25 }} />
      <Image src={quoteRight} style={{ position: 'absolute', bottom: -3, right: -12, width: 25, height: 25 }} />
      <Text>{text}</Text>
      <Text><Link src={externalLinkUrl}>{externalLinkText}</Link></Text>
    </View>
  </View>
);

// Create Document Component
const MyDocument = ({
  lang,
}) => {
  const t = i18n(lang, translations);

  const experiencesSorted = Object.values(experiences);

  experiencesSorted.sort((a, b) => {
    const date1 = a.dates[0][0] ? a.dates[0][0] : a.dates[0];
    const date2 = b.dates[0][0] ? b.dates[0][0] : b.dates[0];

    return date2.isBefore(date1) ? -1 : 1;
  });

  return (
    <Document
      title={t('document.title')}
      author="Ilyes Hermellin"
      subject={t('document.subject')}
      keywords={t('document.keywords')}
    >
      <Page size="A4" style={[styles.page]}>
          <MainTitle style={{ marginBottom: 4 }}>Ilyes Hermellin</MainTitle>
          <BaseText style={{ marginBottom: 20, fontSize: 13, color: '#8907e6', textAlign: 'center', fontFamily: 'BreeSerif' }}>
            {t('headline')}
          </BaseText>

          {/********/}
          {/* Hero */}
          <View style={styles.hero}>
            <View style={styles.heroColumn}>
              <View style={[styles.heroContactDetail, styles.fontSize11]}>
                <Image style={styles.heroContactDetailIcon} src={mailIcon} />
                <BaseText style={styles.heroContactDetailText}>{t('hero.email')}</BaseText>
              </View>

              <View style={[styles.heroContactDetail, styles.fontSize11]}>
                <Image style={styles.heroContactDetailIcon} src={locationIcon} />
                <BaseText style={styles.heroContactDetailText}>{t('hero.location')}</BaseText>
              </View>

              <View style={[styles.heroContactDetail, styles.fontSize11]}>
                <Image style={[styles.heroContactDetailIcon]} src={phoneIcon} />
                <BaseText style={styles.heroContactDetailText}>+33 7 81 33 99 46</BaseText>
              </View>

              <View style={[styles.heroContactDetail, { marginBottom: 0 }, styles.fontSize11]}>
                <Image style={[styles.heroContactDetailIcon]} src={languagesIcon} />
                <BaseText style={styles.heroContactDetailText}>{t('hero.languages')}</BaseText>
              </View>
            </View>

            <View style={[styles.heroColumn, styles.pictureMeColumn]}>
              <Image style={styles.pictureMe} src={pictureMeFace} />
            </View>

            <View style={styles.heroColumn}>
              <View style={styles.heroContactDetail}>
                <ExternalLink src="https://ilyeshermellin.com/fr">ilyeshermellin.com</ExternalLink>
              </View>

              <View style={styles.heroContactDetail}>
                <ExternalLink src="https://www.linkedin.com/in/ilyeshermellin/">{t('hero.linkedinText')}</ExternalLink>
              </View>

              <View style={styles.heroContactDetail}>
                <ExternalLink src="https://github.com/yachaka">GitHub @yachaka</ExternalLink>
              </View>

              <View style={[styles.heroContactDetail, { marginBottom: 0 }]}>
                <ExternalLink src="https://stackoverflow.com/users/3076424/yachaka">StackOverflow @yachaka</ExternalLink>
              </View>
            </View>
          </View>

          <View style={styles.intro}>
            <Image src={quoteCircleIcon} style={styles.introIcon} />
            <BaseText style={styles.introText}>
              {t('intro')}
            </BaseText>
          </View>

          <H2 style={styles.h2}>{t('highlights.title')}</H2>

          <View style={{ marginBottom: 5 }}>
            <View style={styles.highlight}>
              <BaseText style={styles.highlightText}>
                <BaseText style={styles.highlightTextBold}>
                  {t('highlights.1')}{"\n"}
                </BaseText>
                <ExternalLink style={styles.highlightLink} src="https://play.google.com/store/apps/details?id=com.spendesk.spendesk">
                  {t('highlights.1-linkText')}
                </ExternalLink>, <ExternalLink style={styles.highlightLink} src="https://apps.apple.com/us/app/spendesk/id1189271166">ou l'Apple Store</ExternalLink>
              </BaseText>
            </View>

            <View style={styles.highlight}>
              <BaseText style={styles.highlightText}>
                <BaseText style={styles.highlightTextBold}>
                  {t('highlights.2')}{"\n"}
                </BaseText>&nbsp;
            
                <ExternalLink style={styles.highlightLink} src="https://stackoverflow.com/a/44568365/3076424">
                  {t('highlights.2-linkText')}
                </ExternalLink>
              </BaseText>
            </View>

            <View style={styles.highlight}>
              <BaseText style={styles.highlightText}>
                <BaseText style={styles.highlightTextBold}>
                  {t('highlights.3')}
                </BaseText>&nbsp;
              </BaseText>
            </View>
          </View>

          <H2 style={styles.h2}>{t('workTitle')}</H2>

          {experiencesSorted.map(exp => {
            let fullDateString = '';
            if (typeof exp.dates[0][0] === 'object') {
              fullDateString = exp.dates.map(dates => {
                return getRangeDateString(lang, dates);
              }).join(', ');
            } else {
              fullDateString = getRangeDateString(lang, exp.dates);
            }

            const colorFxRatio = exp["color-fx-ratio"] || 1;
            return (
              <Experience
                lang={lang}
                title={
                  <Text>{exp.roleTitle[lang]} {t('role-title-at-word')} <ExternalLink src={exp.url}>{exp.name}   </ExternalLink></Text>
                }
                titleBgColor={(new Color(exp.color)).lighten(0.8 * colorFxRatio).hex()}
                summary={exp.productBrief[lang]}
                date={
                  <Text>{fullDateString}</Text>
                }
                keyPoints={
                  exp.keyWork.map(k => k[lang])
                }
                experienceRecommendation={exp.feedback}
                color={exp.color}
                colorFxRatio={colorFxRatio}
              />
            );
          })}
          {/*
          <Experience
            title={
            <Text>Développeur en chef/gestion de projet chez <ExternalLink src="https://www.konbini.com/fr">Konbini   </ExternalLink></Text>
            }
            titleBgColor="#ffeeed"
            summary="Konbini est un média d'info-divertissement. 5 millions de visiteurs visitent leur site web chaque mois."
            date={
              <Text>Juill. 19 -> Déc. 19 (freelance, 5 mois)</Text>
            }
            keyPoints={[
              'Gestion des projets d\'évolution de la publicité, notamment le développement d\'un format publicitaire vidéo fonctionnant avec un tag VAST générique',
              'Développpement de la nouvelle page d\'accueil du site pour PC, avec un nouveau fil d\'actualités infini',
              'Ré-écriture complète de la page d\'accueil mobile, en visant la performance, qui est un carousel permettant de naviguer entre les articles récents',
              'Collaboration avec un prestataire externe pour la gestion et l\'amélioration de l\'infrastructure serveur',
              'Amélioration globale de la performance du site web, notamment via la réduction de la taille totale du code (réduction de 50%)',
            ]}
          />

          <Experience
            title={
              <Text>Développeur fullstack JavaScript chez <ExternalLink src="https://habx.fr">habx.fr   </ExternalLink></Text>
            }
            titleBgColor="#fff3e3"
            summary="Habx propose la customisation et la vente d'appartements sur plan (VEFA)."
            date={
              <Text>Sep. 18 -> Fév. 19 (employé, 6 mois){"\n"}
                Fév. puis Avr. -> Juin 18 (freelancer, 3 mois)</Text>
            }
            keyPoints={[
              'Avec React, Node, GraphQL, Apollo, Webpack, AWS, MongoDB, PostGres, TypeScript',
              'Développement de la plateforme principale et d’un CRM maison',
              'Responsable de fonctionnalités : landings (99/100 PageSpeed, tps affichage < 100ms), indexation des prix de l’immobilier, librairie d’outils SQS, intégration des tierces parties',
            ]}
            experienceRecommendation={{
              name: 'Guillaume Badi',
              position: 'Chef produit chez Habx',
              phone: '+33 7 68 39 68 79',
              email: 'guillaume.badi@gmail.com',
              backgroundColor: '#FFF8EF',
              borderColor: '#FDE9CF',
              content: '[...] Il [Ilyes] maitrise parfaitement les technologies les plus avancées en JavaScript (GraphQL, Relay, React) et sait s\'adapter rapidement à son environnement. [...]',
            }}
          />

          <Experience
            title="Voyage au Chili et en Colombie"
            titleBgColor="#efedf0"
            date="Mars 18, puis Juin - Août 18"
          />

          <Experience
            summary="Dailymotion est une plateforme de lecture de contenu vidéo."
            title={
              <Text>Développeur front-end JavaScript chez <ExternalLink src="https://www.dailymotion.fr">Dailymotion   </ExternalLink></Text>
            }
            titleBgColor="#ebf0ff"
            date={
              <Text>Août 17 - Décembre 17</Text>
            }
            keyPoints={[
              'Avec React, Redux, Webpack. J’ai travaillé en collaboration avec 4 autres développeurs front-end, dans une équipe de 20 personnes.',
            ]}
          />

          <Experience
            summary="Spendesk est une solution de gestion des dépenses professionnelles."
            title={
              <Text>Développeur fullstack JavaScript chez <ExternalLink src="https://www.spendesk.com">Spendesk   </ExternalLink></Text>
            }
            titleBgColor="#fbf5ff"
            date={
              <Text>Octobre 16 - Août 17</Text>
            }
            keyPoints={[
              'Force de proposition technique. Livraison de nouvelles fonctionnalités, côté serveur et côté client. Avec React, Redux et Node.js',
              'Développement de l’application mobile initiale sur iOS et Android, avec React Native, GraphQL et Relay',
              '9ème employé, l’entreprise grandit à 23 collaborateurs en l’espace de 10 mois',
            ]}
            experienceRecommendation={{
              name: 'Guilhem Bellion',
              position: 'CTO chez Spendesk',
              email: 'guilhem@spendesk.com',
              backgroundColor: '#fbf5ff',
              borderColor: '#ebdcf5',
              content: '[...] Ilyes m\'a impressionné par sa forte capacité d\'adaptation et sa faculté à mettre en place des solutions globales, simples et efficaces pour répondre à des problématiques compliquées. [...]',
            }}
          />

          <Experience
            title={
              <BaseText>Développeur front-end freelance chez <Text style={{ textDecoration: 'underline' }}>Speaken</Text></BaseText>
            }
            titleBgColor="#e7f2e6"
            date={
              <BaseText>Juin 16 - Octobre 16</BaseText>
            }
            keyPoints={[
              'Fonctionnalités clés : appel vidéo en direct (WebRTC), messagerie privée, profil, agenda.',
              'Avec React et Redux.',
            ]}
          />

          <Experience
            title={
              <View><BaseText>Étudiant à l'école </BaseText><ExternalLink src="https://42.fr">42   </ExternalLink></View>
            }
            titleBgColor="#efedf0"
            date="Octobre 14 - Juin 16"
          />*/}

          <BaseText style={{ fontSize: 9, position: 'absolute', bottom: 39, left: 150, 'transform:translateX': '-50%' }}>
            {t('cv-generated-at')} {getDate()} {t('with')} <ExternalLink src="https://react-pdf.org/" iconSize={10}>react-pdf</ExternalLink>. {t('more-info-on')} <ExternalLink src="https://ilyeshermellin.com/fr" iconSize={10}>{t('my-website')} !</ExternalLink>
          </BaseText>
          {/*<H2 style={[styles.h2, { marginTop: 5 }]}>Références</H2>

          <Reference
            style={{ marginBottom: 15 }}
            personName="Guillaume Badi"
            personRole="Chef Produit chez habx.fr"
            personPhone="+33 7 68 39 68 79"
            personEmail="guillaume.badi@gmail.com"
            text="Il [Ilyes] maitrise parfaitement les technologies les plus avancées en JavaScript (GraphQL, Relay, React) et sait s'adapter rapidement à son environnement."
            externalLinkText="Lire la recommandation complète sur LinkedIn"
            externalLinkUrl="https://www.google.com"
          />

          <Reference
            style={{ marginBottom: 15 }}
            personName="Guilhem Bellion"
            personRole="CTO chez Spendesk"
            personEmail="guilhem@spendesk.com"
            text="Ilyes impressed me with his strong adaptability and his ability to implement comprehensive, simple and effective solutions to solve complex issues."
            externalLinkText="Lire la recommandation complète sur LinkedIn"
            externalLinkUrl="https://www.google.com"
          />*/}

          {/*<View style={{ marginTop: 5, flexDirection: 'row', fontSize: 11 }}>
            <View style={{ width: 120, flex: 0, marginRight: 15 }}>
              <H2 style={styles.h2}>Langues</H2>

              <Text>
                🇫🇷 Francais - Natif{"\n"}
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais - Courant{"\n"}
                🇪🇸 Espagnol - Pratique
              </Text>
            </View>

            <View style={{ flex: 1, marginRight: 15 }}>
              <H2 style={styles.h2}>Intérêts</H2>

              <Text style={{ flex: 1 }}>Voyages, natation, escalade, sorties sociales, jeux vidéos, danse, aider les autres, communauté open-source, entrepreunariat</Text>
            </View>

            <View style={{ flex: 1 }}>
              <H2 style={styles.h2}>Éducation</H2>
              <BaseText style={{ flex: 1 }}>
                J'ai étudié à l'école 42 de 2014 à 2016. J'ai arrêté mon cursus après 2 ans (normalement 3) pour rentrer dans la vie active, constatant que j'avais les compétences nécessaires.
              </BaseText>
            </View>
          </View>*/}
      </Page>
    </Document>
  );
}

function CVPage({
  pageContext: { lang },
}) {
  const [isClient, setIsClient] = useState(false);
  const t = i18n(lang, translations);

  const genText = {
    fr: `Création du CV en cours...`,
    en: `CV creation ongoing...`,
  };

  useEffect(
    function () {
      setIsClient(true);
    },
    [],
  );

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{t('document.title')}</title>
        <meta name="description" content={t('document.subject')} />
        {lang === 'fr'
          ? <link rel="alternate" href="/en/cv" hreflang="en" />
          : <link rel="alternate" href="/fr/cv" hreflang="fr" />}
      </Helmet>

      <p style={{ zIndex: 1, position: 'absolute', top: '45%', left: 0, right: 0, textAlign: 'center', fontSize: 14, color: '#333' }}>
        {genText[lang]}
      </p>
      {isClient && (
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
          <PDFViewer style={{ width: '100%', height: '100%' }}>
            <MyDocument lang={lang} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}

export default CVPage;

function getDate() {
  const now = new Date();
  const mm = now.getMonth() + 1;
  const dd = now.getDate();

  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    now.getFullYear(),
  ].join('/');
};
