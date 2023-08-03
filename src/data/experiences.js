import dayjs from 'dayjs';

import InAppApprovalVideo from './Spendesk/mobileapp/in-app-approval.mp4';
import InAppApprovalVideoPoster from './Spendesk/mobileapp/in-app-approval.png';
import PaymentEditionVideo from './Spendesk/mobileapp/payment-edition.mp4';
import PaymentEditionVideoPoster from './Spendesk/mobileapp/payment-edition.png';
import TopUpVideo from './Spendesk/mobileapp/top-up.mp4';
import TopUpVideoPoster from './Spendesk/mobileapp/top-up.png';
import LoginVideo from './Spendesk/mobileapp/login.mp4';
import LoginVideoPoster from './Spendesk/mobileapp/login.png';

import konbiniMobileArticleLoad from './konbini/mobile-article-load.mp4';
import konbiniMobileArticleLoadPoster from './konbini/mobile-article-load.png';
import konbiniMobileHomepageLoad from './konbini/mobile-homepage.mp4';
import konbiniMobileHomepageLoadPoster from './konbini/mobile-homepage.png';
import konbiniDesktopArticleLoad from './konbini/desktop-article-load.mp4';
import konbiniDesktopArticleLoadPoster from './konbini/desktop-article-load.png';
import konbiniDesktopHomepageLoad from './konbini/desktop-homepage.mp4';
import konbiniDesktopHomepageLoadPoster from './konbini/desktop-homepage.png';

import shotgunLogin from './shotgun/login.mp4';
import shotgunLoginPoster from './shotgun/login.png';
import shotgunScanTicketHorsLigne from './shotgun/scan-ticket-hors-ligne.mp4';
import shotgunScanTicketHorsLignePoster from './shotgun/scan-ticket-hors-ligne.png';
import shotgunAjoutGuestlistGuest from './shotgun/ajout-guestlist-guest.mp4';
import shotgunAjoutGuestlistGuestPoster from './shotgun/ajout-guestlist-guest.png';
import shotgunRefundTicket from './shotgun/remboursement-ticket.mp4';
import shotgunRefundTicketPoster from './shotgun/remboursement-ticket.png';

import chateauPercheVideo from './chateau-perche/home.mp4';
import chateauPercheVideoPoster from './chateau-perche/home.png';

/*
 * Lists all my professionnal experiences
 */

export default {
  shotgun: {
    color: "#c17aff",
    "color-fx-ratio": 0.70,
    name: "Shotgun",
    url: "https://shotgun.live/",
    dates: [dayjs('2020-01-14'), dayjs('2023-09-01')],
    "freelanceOrEmployee": "freelance",
    "technologiesUsed": ['React-Native', 'React', 'P2P exchanges', 'Bluetooth Low Energy', 'Ruby On Rails', 'Serverless', 'Swift/Objective-C', 'Java', 'SQLite', 'JavaScript', 'PostgreSQL', 'Redis'],
    "roleTitle": {
      "fr": "Développeur fullstack JavaScript senior",
      "en": "Senior fullstack javascript developper",
    },
    "productBrief": {
      "fr": "Shotgun est une billetterie en ligne pour les concerts, les clubs, les festivals. Ils fournissent également des outils aux organisateurs pour les aider à gérer leur évènements.",
      "en": "Shotgun is an online ticketing platform for live music events like, gigs, concerts, festivals. They also provide tools for event creators to help them manage their business.",
    },
    "myWorkSummaryText": {
      "fr": "J'ai débuté ma mission chez Shotgun par l'intégration du site de présentation d'un grand festival français de musique techno (Château Perché).<br/><br/>J'ai travaillé pendant quelques mois sur la plateforme proposée aux organisateurs d'évènements, pour les aider dans leur gestion.<br/><br/>J'ai ensuite été affecté à la refonte de l'application Shotgun Scan, qui est fournie aux organisateurs, pour scanner les codes QR des tickets à l'entrée des évènements. Cette application a la particularité de fonctionner complètement hors-ligne, et synchronise les tickets scannés entre plusieurs téléphones proches via le bluetooth. J'ai enfin construit une application pour vendre des billets à la porte d'entrée, avec l'interface responsive sur tablettes et téléphones.",
      "en": "I started my work with Shotgun with a presentation website for a big, french, techno music festival (Château Perché).<br/><br/>I worked for a few months on the platform provided to event creators, to help them with handling their business. <br/><br/>I then did the rework of the Shotgun Scan application, which is provided to event creators, to scan tickets QR code at event entrances. This application is special in that it works fully offline, and synchronize scanned tickets between nearby devices through Bluetooth.<br/><br/>I finally worked to build an application to sell tickets at the door, with different UI on tablets and phone.",
    },
    "teamText": {
      fr: "J'ai travaillé avec l'équipe Shotgun lors de mon implication sur la plateforme dediée aux organisateurs d'évènements.<br/><br/>J'ai travaillé avec 1 designer pour la réalisation du site de Château Perché, et partiellement avec 1 autre freelance externe pour la réalisation de Shotgun Scan. J'ai travaillé directement avec Lucas, le CTO de Shotgun, qui s'est impliqué en tant que chef de projet.",
      en: "I worked with the Shotgun team when I had to work on the platform provided to event creators.<br/><br/>I worked with a designer for Château Perché's website, and I partially worked with 1 other freelance to develop Shotgun Scan application. I worked directly with Lucas, Shotgun's CTO, that worked on Shotgun Scan as a project manager.",
    },
    "keyWork": [
      {
        fr: "J'ai conçu le protocole de communication P2P via bluetooth, qui synchronise les tickets scannés (et d'autres données) entre les différents téléphones scanners",
        en: "I've created the bluetooth P2P communication protocol, that synchronizes scanned tickets (and other data) between scanning devices",
      },
      {
        fr: "J'étais le seul développeur sur l'application Shotgun Scan, qui a scanné 600 000 billets lors du mois de Juillet 23. C'est une application hors-ligne avec synchronisation P2P, sur iOS et Android - React-native avec modules natifs Swift/Objective-C et Java",
        en: "I was the only developper working on the Shotgun Scan application, which scanned 600 000 entries in July 23. It is an offline-first app with P2P synchronization, on iOS and Android - React-Native with native modules Swift/Objective-C and Java",
      },
      {
        fr: "J'ai construit une application de vente de tickets sur place, au design responsive pour les téléphones et les tablettes, et se connectant à des imprimantes de billets évenementiels, pour imprimer des billets à l'entrée",
        en: "I also built a on-site tickets selling app, responsive on tablets and mobile phones, and connected to industry-specific printers to sell and print tickets at the door",
      },
      {
        fr: `J'ai travaillé sur la plateforme web et d'autres taches, notamment : maintenir les nouvelles fonctionnalités sur une codebase Ruby on Rails historique, travail sur un outil d'administration interne, intégrer une page vitrine pour un festival de musique connu, et plus encore`,
        en: `I worked on the web platform and other tasks, including : adding features on a NodeJS/GraphQL stack, maintaining new features on a legacy Ruby On Rails backend, working on an internal administration backend tool, integrating a landing page for a known music festival, and more`
      }
    ],
    "mobileScreenshots": {
      login: {
        title: {
          "fr": "Connexion",
          "en": "Logging in",
        },
        "data": {
          video: shotgunLogin,
          poster: shotgunLoginPoster,
        }
      },
      scan: {
        title: {
          "fr": "Scan d'un ticket hors-ligne",
          "en": "Scanning a ticket, offline",
        },
        "data": {
          video: shotgunScanTicketHorsLigne,
          poster: shotgunScanTicketHorsLignePoster,
        }
      },
      guestlist: {
        title: {
          "fr": "Ajout d'une liste d'invités et d'un invité",
          "en": "Adding a guestlist and a guest",
        },
        "data": {
          video: shotgunAjoutGuestlistGuest,
          poster: shotgunAjoutGuestlistGuestPoster,
        }
      },
      refund: {
        title: {
          "fr": "Remboursement d'un ticket",
          "en": "Refunding a ticket",
        },
        "data": {
          video: shotgunRefundTicket,
          poster: shotgunRefundTicketPoster,
        }
      },
    },
    // "mobileScreenshots": {},
    "feedback": {
      "name": "Lucas Gérard",
      "external": "https://www.linkedin.com/in/lucas-gerard-71447263/",
      "email": "lucas@shotgun.live",
      "role": {
        "fr": "CTO",
        "en": "CTO",
      },
      "text": {
        "fr": `Ilyes a accompli un excellent travail à Shotgun, en gérant le dévelopment d'une application mobile et en développant la majeure partie. Il possède un très bon ensemble de compétences techniques, est très consciencieux et orienté produit. Il a rapidement intégré nos objectifs business et a délivré un résultat performant et stable.<br /><br />Je suis très statisfait de notre collaboration et je n'hésiterais pas à travailler avec lui dans le futur !`,
        "en": `Ilyes did a great job at Shotgun, managing the development of a mobile application, and developing most of it. He has a very good technical skillset, is very conscientious and product-oriented. He quickly apprehended our business challenges and delivered a reliable and performant result.<br/><br />I'm very happy of our collaboration and would not hesitate to work with him in the future!`,
      },
      "shortText": {
        "fr": `[...] Il a rapidement intégré nos objectifs business et a délivré un résultat performant et stable. [...] et je n'hésiterais pas à travailler avec lui dans le futur!`,
        "en": `He has a very good technical skillset, is very conscientious and product-oriented. He quickly apprehended our business challenges and delivered a reliable and performant result. [...] and would not hesitate to work with him in the future!`,
      },
    },
  },

  konbini: {
    "color": "#F52635",
    "color-fx-ratio": 0.70,
    "name": "Konbini",
    "url": "https://www.konbini.com/",
    "dates": [dayjs('2019-07-10'), dayjs('2019-12-12')],
    "freelanceOrEmployee": "freelance",
    "technologiesUsed": ['Next.js', 'WordPress', 'PWA', 'React', 'Varnish Cache'],
    "roleTitle": {
      "fr": "Développeur en chef/gestion de projet",
      "en": "Lead developper/project manager",
    },
    "productBrief": {
      "fr": "Konbini est un média d'info-divertissement. 5 millions de visiteurs visitent leur site web chaque mois.",
      "en": "Konbini is a fun-news website. 5 million users visit their website each month.",
    },  
    "myWorkSummaryText": {
      "fr": "Après que Konbini ait commencé à transformer leur site en une <br /><a href=\"https://developers.google.com/web/progressive-web-apps\" target=\"_blank\" rel=\"noopener noreferrer\">Progressive Web App</a>, le code a souffert d'une importante dette technique, et l'expérience utilisateur a souffert de nombreux bugs.<br /><br />Pendant ma mission, j'ai pris le poste flexible de chef de projet/développeur en chef. Mon objectif était d'abord de refactoriser le code, éliminer les bugs, améliorer l'expérience utilisateur et développer la nouvelle page d'accueil (un fil d'actualités infini).<br /><br />J'ai aussi géré certains projets d'évolution de la publicité sur le site (besoins, planification, éxécution), ré-écrit la page d'accueil mobile (un carousel), et amélioré les performances globales du site (réduction de la taille du code interne de 50%).",
      "en": `After Konbini started evolving their website into a <a href=\"https://developers.google.com/web/progressive-web-apps\" target=\"_blank\" rel=\"noopener noreferrer\">Progressive Web App</a>, the codebase suffered an important technical debt, et the user experience suffered many bugs/glitches.<br /><br />During my contract, I had the flexible role of project manager/lead developper. My first goal was to refactor the codebase, remove bugs, improve the user experience and code the new homepase (which was an infinite article feed).<br /><br />I also managed some projects, concerning improving ads on the website (defining needs, planning, executing), re-wrote the mobile homepage (a swiper), and improved the website global performances (code size was reduced by 50%).`,
    },
    "teamText": {
      "fr": "J'ai travaillé en collaboration avec 1 chef produit, 1 développeur en interne et 1 développeur externe (prestataire et à distance).<br /><br />J'ai échangé directement avec l'équipe de la publicité afin de résoudre les bugs, recueillir leur besoins, et développer de nouveaux formats publicitaires.",
      "en": `I worked with 1 product manager, 1 internal developper and 1 external developper (from an agency and working remotely).<br /><br />I directly communicated with the ads team so I could fix bugs, gather their needs, and create new ads formats.`,
    },
    "keyWork": [
      {
        "fr": "Gestion des projets d'évolution de la publicité, notamment le développement d'un format publicitaire vidéo fonctionnant avec un tag VAST générique",
        "en": `Ads projects management, in particular a new video ad format that works with a generic VAST tag`,
      },
      {
        "fr": "Développpement de la nouvelle page d'accueil du site pour PC, avec un nouveau fil d'actualités infini",
        "en": `Developped the new desktop homepage, with a new infinite articles feed`,
      },
      {
        "fr": "Ré-écriture complète de la page d'accueil mobile, en visant la performance, qui est un carousel permettant de naviguer entre les articles récents",
        "en": `Full re-writing of the mobile homepage, aiming for performance, which is a swiper showing recent articles`,
      },
      {
        "fr": "Amélioration globale de la performance du site web, notamment via la réduction de la taille totale du code (réduction de 50%)",
        "en": `Global performance improvements of the website, for example thanks to a 50% total codebase size reduction`,
      },
    ],
    "laptopScreenshots": {
      homepageLoad: {
        title: {
          "fr": "Fil d'articles infini'",
          "en": "Infinite scrolling feed",
        },
        "data": {
          video: konbiniDesktopHomepageLoad,
          poster: konbiniDesktopHomepageLoadPoster,
        }
      },
      articleLoad: {
        title: {
          "fr": "Visite d'un article et transition vers l'accueil",
          "en": "Landing on an article and switching to the homepage",
        },
        "data": {
          video: konbiniDesktopArticleLoad,
          poster: konbiniDesktopArticleLoadPoster,
        }
      },
    },
    "mobileScreenshots": {
      homepageLoad: {
        title: {
          "fr": "Revue des nouveaux articles",
          "en": "Exploring new posts",
        },
        "data": {
          video: konbiniMobileHomepageLoad,
          poster: konbiniMobileHomepageLoadPoster,
        }
      },
      articleLoad: {
        title: {
          "fr": "Chargement d'un article mobile",
          "en": "Loading a mobile post",
        },
        "data": {
          video: konbiniMobileArticleLoad,
          poster: konbiniMobileArticleLoadPoster,
        }
      },
    },

    "feedback": {
      "name": "Laurence Colombie",
      "external": "https://www.linkedin.com/in/laurence-colombie-00937721/",
      "email": "laurence.colombie@konbini.com",
      "role": {
        "fr": "Cheffe de la publicité senior",
        "en": "Senior Advertising Manager",
      },
      "text": {
        "fr": `Ilyes a travaillé en tant que développeur fullstack afin de refactoriser le code du site de Konbini. Il est assidu et sur de lui. J'ai collaboré directement avec lui afin d'intégrer la stack technologique publicitaire. Il m'a impressionné par sa capacité à comprendre les différents sujets rapidement. Il a engrangé une connaissance approfondie de la librairie de tagging publicitaire (Google Publisher Tag) pour Google Ad Manager (GAM) et de son intégration à la RGPD.`,
        "en": `Ilyes has worked as a fullstack developer to refactor the code of Konbini website. He is diligent and confident. I worked closely with him to integrate thoroughly the ad technology stack. He has impressed me with his ability to pick things very quickly. He has gained in-depth experience working with the ad tag library (Google Publisher Tag) for Google Ad Manager (GAM) and ad tech integration with GDPR.`,
      },
      "shortText": {
        "fr": `[...] J'ai collaboré directement avec lui afin d'intégrer la stack technologique publicitaire. Il m'a impressionné par sa capacité à comprendre les différents sujets rapidement. [...]`,
        "en": `[...] I worked closely with him to integrate thoroughly the ad technology stack. He has impressed me with his ability to pick things very quickly. [...]`,
      },
    },
  },

  // chateauPerche: {
  //   "color": "#ECD9C9",
  //   name: "Château Perché",
  //   slug: 'chateauPerche',
  //   url: "https://chateauperche.com/",
  //   dates: [dayjs('2020-01-10'), dayjs('2020-01-24')],
  //   freelanceOrEmployee: "freelance",
  //   technologiesUsed: ['Gatsby', 'JavaScript', 'HTML5', 'CSS3'],
  //   roleTitle: {
  //     fr: 'Intégrateur HTML/CSS/JavaScript',
  //     en: 'HTML/CSS/JavaScript integrator',
  //   },
  //   productBrief: {
  //     fr: "Château Perché est un festival de musique techno réunissant 5 000 à 10 000 personnes.",
  //     en: "Château Perché is a techno music festival gathering 5 000 to 10 000 people.",
  //   },
  //   "myWorkSummaryText": {
  //     fr: "J'ai intégré un design réalisé par un designer interne à Shotgun. J'ai réalisé les animations.",
  //     en: "I integrated a design made by a Shotgun designer. I made the animations.",
  //   },
  //   "teamText": {
  //     fr: "J'ai travaillé en collaboration avec 1 designer.",
  //     en: "I worked with 1 designer.",
  //   },
  //   laptopScreenshots: {
  //     home: {
  //       title: {
  //         fr: "Accueil et achat de billets",
  //         en: "Home and buying tickets",
  //       },
  //       data: chateauPercheVideo,
  //     },
  //   },
  // },

  spendesk: {
    "color": "#6100ff",
    "name": "Spendesk",
    "url": "https://www.spendesk.com/",
    "dates": [dayjs('2016-10-10'), dayjs('2017-08-11')],
    "freelanceOrEmployee": "employee",
    "technologiesUsed": ['Node.js', 'React', 'React-Native', 'iOS/Swift', 'Android/Java', 'GraphQL', 'Relay', 'Webpack'],
    "roleTitle": {
      "fr": "Développeur fullstack JavaScript",
      "en": "Fullstack JavaScript developper",
    },
    "productBrief": {
      "fr": "Spendesk est une carte bancaire et une plateforme pour gérer les dépenses professionnelles.",
      "en": "Spendesk is a company card and a platform to manage professional expenses.",
    },
    "myWorkSummaryText": {
      "fr": "J'ai réalisé le développement initial de l'application mobile, parallèlement sur iOS et Android. <br/><br/>J'ai travaillé à l'amélioration de la plateforme dans sa globalité, plus précisement : le développement de nouvelles fonctionnalités seul ou en collaboration avec un autre développeur, la maintenance passant par la résolution de bugs, l'amélioration des aspects techniques de la plateforme (performance, propreté du code).",
      "en": "I developed the initial development of the mobile application, in parallel on iOS and Android.<br/><br/>I worked on improving the platform in its entirety, more precisely: the development of new features alone or in collaboration with another developer, maintenance through the resolution of bugs, improvement of the technical aspects of the platform (performance, cleanliness of the code).",
    },
    "teamText": {
      "fr": "J'ai d'abord travaillé au sein d'une équipe produit réduite : 1 chef de produit, et 2 autres développeurs (dont 1 lead). Via des recrutements fréquents, l'équipe s'est agrandie progressivement pour se constituer d'1 chef produit, 4 développeurs (dont 1 lead), 1 UX Designer et 1 Data Scientist. <br/><br/>J'échangeais également fréquemment directement avec l'équipe commerciale ou support client sur des problématiques spécifiques.",
      "en": "I first worked in a small product team: 1 product manager, and 2 other developers (including 1 lead). Through frequent recruitments, the team has steadily grown to become inclusive of a product leader, 4 developers (including 1 lead), 1 UX Designer and 1 Data Scientist.<br/><br/>I also frequently exchanged directly with the sales team or customer support on specific issues.",
    },
    "keyWork": [
      {
        "fr": "Force de proposition technique. Livraison de nouvelles fonctionnalités, côté serveur et côté client. Avec React, Redux et Node.js",
        "en": "Major implication in technical choices. Delivery of new features, fullstack, with React, Redux, and Node.js",
      },
      {
        "fr": "Développement de l’application mobile initiale sur iOS/Android, avec React Native/GraphQL/Relay",
        "en": "Initial development of the mobile application on iOS and Android, with React Native, GraphQL and Relay",
      },
      {
        "fr": "9ème employé, l'entreprise grandit à 23 employés en 10 mois",
        "en": "9th employee, the company grew to 23 employees within 10 months",
      },
    ],
    "laptopScreenshots": {
      requests: {
        title: {
          "fr": "Liste des requêtes de dépense",
          "en": "List of expense requests",
        },
      },
      spends: {
        title: {
          "fr": "Historique des dépenses de l'entreprise",
          "en": "Expenses history",
        },
      },
      cards: {
        title: {
          "fr": "Gestion d'une carte de paiement",
          "en": "Payment card settings",
        },
      },
      // cardOrder: {
      //   title: {
      //     "fr": "Commande d'une nouvelle carte de paiement",
      //     "en": "New card order",
      //   },
      // },
      members: {
        title: {
          "fr": "Gestion des membres et de leur droits",
          "en": "Members admin",
        },
      },
      // branches: {
      //   title: {
      //     "fr": "Plusieurs branches d'une même entreprise",
      //     "en": "A company can have multiple branches",
      //   },
      // },
    },
    "mobileScreenshots": {
      approve: {
        title: {
          "fr": "Autorisation d'une dépense",
          "en": "Expense approval",
        },
        data: {
          video: InAppApprovalVideo,
          poster: InAppApprovalVideoPoster,
        },
      },
      edit: {
        title: {
          "fr": "Édition d'un paiement",
          "en": "Expense edition",
        },
        data: {
          video: PaymentEditionVideo,
          poster: PaymentEditionVideoPoster,
        },
      },
      topUp: {
        title: {
          "fr": "Ajout de cash",
          "en": "Card top up",
        },
        data: {
          video: TopUpVideo,
          poster: TopUpVideoPoster,
        }
      },
      login: {
        title: {
          "fr": "Connexion",
          "en": "Log in",
        },
        data: {
          video: LoginVideo,
          poster: LoginVideoPoster,
        }
      },
    },
    "feedback": {
      "name": "Guilhem Bellion",
      "email": "guilhem@spendesk.com",
      "external": "https://www.linkedin.com/in/guilhembellion/",
      "role": {
        "fr": "CTO chez Spendesk",
        "en": "CTO at Spendesk",
      },
      "text": {
        "fr": `Ilyes a le don de conjuguer parfaitement créativité et pragmatisme !<br /><br />J'ai eu l'occasion de travailler étroitement avec lui pendant 10 mois chez Spendesk, durant lesquels il a participé avec succès à de nombreux projets. Il a notamment été intégralement responsable du développement et de la maintenance de notre application mobile en React Native, et a posé les bases de notre nouvelle API GraphQL. <br/><br/>Ilyes m'a impressionné par sa forte capacité d'adaptation et sa faculté à mettre en place des solutions globales, simples et efficaces pour répondre à des problématiques compliquées. Il a toujours fait preuve d'autonomie et a été force de proposition sur chaque projet qui lui a été confié.<br /><br />Son expertise technique et sa bonne humeur sont de vrais atouts dans une équipe !`,
        "en": `Ilyes has the gift of perfectly combining creativity and pragmatism!<br/><br/>I had the opportunity to work closely with him for 10 months at Spendesk, during which he participated successfully in many projects. In particular, he was fully responsible for the development and maintenance of our React Native mobile application and laid the foundation for our new GraphQL API. <br/><br/>Ilyes impressed me with his strong adaptability and his ability to put in place global, simple and effective solutions to solve complicated issues. He has always demonstrated autonomy and has been suggesting solutions on each project entrusted to him.<br /><br />His technical expertise and his good mood are real assets in a team!`,
      },
      "shortText": {
        "fr": `[...] Il a notamment été intégralement responsable du développement et de la maintenance de notre application mobile en React Native, [...].<br /> Ilyes m'a impressionné par sa forte capacité d'adaptation et sa faculté à mettre en place des solutions globales, simples et efficaces pour répondre à des problématiques compliquées. [...]`,
        "en": `[...] In particular, he was fully responsible for the development and maintenance of our React Native mobile application and [...].<br />Ilyes impressed me with his strong adaptability and his ability to put in place global, simple and effective solutions to solve complicated issues. [...]`,
      },
    },
  },

  habx: {
    "color": "#ffce00",
    "color-fx-ratio": 0.9,
    "name": "HabX",
    "url": "https://habx.fr/",
    "dates": [dayjs('2018-02-01'), dayjs('2019-02-28')],
    "freelanceOrEmployee": "both",
    "technologiesUsed": ['React', 'Apollo', 'GraphQL', 'AWS', 'Message queues', 'Redux', 'Webpack', 'Node.js'],
    "roleTitle": {
      "fr": "Développeur fullstack JavaScript",
      "en": "Fullstack JavaScript developper",
    },
    "productBrief": {
      "fr": "Habx vend des appartements sur plan (VEFA) et sur-mesure.",
      "en": "Habx sells apartments off-plan, and tailored.",
    },
    "myWorkSummaryText": {
      "fr": "J'ai eu un rôle individuel et flexible chez Habx.<br /><br />D'abord prestataire, j'ai réalisé des travaux solitaires et nécessaires : la refonte du formulaire de configuration d'un logement, des landing pages, et le développement d'un robot d'indexation des prix des projets immobiliers français.<br/><br/>En tant qu'employé, j'ai participé au dévelopemment du CRM interne. J'ai notamment été responsable de l'intégration du logiciel avec des tierces parties (Aircall, Helpscout, Twilio, Calendly).<br/><br/>J'ai constamment participé au développement du site public.",
      "en": `I had an individual and flexible role at Habx.<br /><br />First freelance, I realized indiviual work: the re-writing of the housing configuration form, the landing pages, and the development of a french real estate prices crawler.<br /><br />As an employee, I helped to develop the internal CRM. In particular, I was responsible for the software integration with other third-party SaaS (Aircall, Helpscout, Twilio, Calendly).<br /><br />I always helped with the main website development (bugfix, new features).`,
    },
    "teamText": {
      "fr": "J'ai travaillé d'abord au sein d'une équipe réduite de 3 développeurs et 1 développeur en chef. Au fil du temps, l'équipe s'est agrandie pour, à mon départ, se composer de 10 développeurs et d'un vice-président de l'ingénieurie.<br/><br/>L'entreprise a grandit pendant ce temps de 20 personnes, à plus de 50 personnes.<br/><br/>J'ai travaillé avec Trello, puis JIRA, pour effectuer les tâches de développement qui m'était assignées par un chef produit ; mais pas seulement. En effet, Habx promouvoit une communication horizontale, et j'échangeais également directement avec le VP de l'ingénieurie, l'équipe marketing, communication, ou architecte et créeait, parfois, moi-même mes propres tickets.",
      "en": `I first worked within a small team of 3 developers and 1 lead developer. With time, the team grew, to be sized of 10 developers and 1 IT VP when I left.<br /><br />Within this time, the company grew from 20 people to more than 50 people.<br /><br />I worked with Trello, then JIRA, to realize the development tasks that got assigned to me by a product manager ; but not only. Habx was proud of an horizontal communication, and I was also communicating directly with the IT VP, the marketing, communication, or architect team, and was, sometimes, thinking my own tasks.`,
    },
    "keyWork": [
      {
        "fr": "Refonte du formulaire de configuration d'un logement",
        "en": "Redesign of the home customization form",
      },
      {
        "fr": "Création de landing pages (99/100 Google PageSpeed)",
        "en": "Landing pages creation (99/100 Google PageSpeed)",
      },
      {
        "fr": "Robot d'indexation des prix des projets immobiliers français",
        "en": "Price indexing crawler of French real estate projects",
      },
      {
        "fr": "CRM maison, développpement côté client et serveur, intégration avec des services tiers (ex: Aircall, Twilio)",
        "en": "In-house CRM, fullstack développement, third-party services integration (e.g.: Aircall, Twilio)",
      },
      {
        "fr": "Librairies utilitaires aidant le développement avec les files d'attente AWS SQS/SNS",
        "en": "Tooling libraries helping generic AWS SQS/SNS message queues development",
      },
    ],
    "laptopScreenshots": {
      homeConfigure: {
        title: {
          "fr": "Configuration d'un logement",
          "en": "Customizing a home",
        },
      },
      homeConfigureOpened: {
        title: {
          "fr": "Configuration d'un logement - panneau ouvert",
          "en": "Customizing a home - opened panel",
        },
      },
    },
    "feedback": {
      "name": "Guillaume Badi",
      "external": "https://www.linkedin.com/in/guillaume-badi-a06008b9/",
      "email": "guillaume.badi@gmail.com",
      "role": {
        "fr": "Chef Produit chez Habx",
        "en": "Product owner at Habx",
      },
      "text": {
        "fr": "Ilyes a une forte motivation, et le don de rendre simple des problèmes d'abord compliqués. Il maitrise parfaitement les technologies les plus avancées en Javascript (GraphQL, Relay, React, etc) et sait s'adapter rapidement a son environement.<br/><br/>Chez Habx, nous avons fait confiance a Ilyes pour la conception des landing pages qu'il a su réaliser avec brio.",
        "en": "Ilyes has a strong will, and the gift of changing complicated issues into simple ones. He perfectly masters the most advanced technologies in Javascript (GraphQL, Relay, React, etc.) and knows how to adapt quickly to his environment. <br/> <br/> At Habx, we trusted Ilyes for the design of the landing pages that he was able to achieve brilliantly.",
      },
      "shortText": {
        "fr": "Ilyes a une forte motivation, et le don de rendre simple des problèmes d'abord compliqués. [...]",
        "en": "Ilyes has a strong will, and the gift of changing complicated issues into simple ones. [...]",
      },
    },
  },

  dailymotion: {
    "color": "#04b8fb",
    "name": "dailymotion",
    "url": "https://www.dailymotion.com/",
    "dates": [dayjs('2017-08-16'), dayjs('2017-12-31')],
    "freelanceOrEmployee": "employee",
    "roleTitle": {
      "fr": "Développeur front-end JavaScript",
      "en": "Front-end JavaScript developper",
    },
    "technologiesUsed": ['React', 'Redux', 'Webpack'],
    "productBrief": {
      "fr": "Dailymotion est une plateforme de partage de vidéos.",
      "en": "Dailymotion is a video-sharing platform.",
    },
    "myWorkSummaryText": {
      "fr": "J'ai participé au développement d'un nouveau produit Dailymotion.<br/><br/>J'ai été résponsable du développement de composants front-end utilisés sur ce produit. Mon travail incluait l'écriture de tests unitaires, et suivait un processus de validation hiérarchisé.",
      "en": "I was involved in the development of a new Dailymotion product.<br/> <br/> I was responsible for the development of front-end components. My job included writing unit tests, and followed a strict hierarchical validation process.",
    },
    "teamText": {
      "fr": "J'ai travaillé dans une équipe de 5 développeurs côté client. Le projet comprenait plus de 20 développeurs à temps plein.",
      "en": "I worked in a team of 5 front-end developers. The whole project involved more than 20 full-time developers.",
    },
    "keyWork": [
      {
        "fr": "Développement unitaire de composants côté client (spécifications, tests)",
        "en": "Unit development of front-end components (specifications, tests)",
      },
      {
        "fr": "Processus strict d'assurance qualité",
        "en": "Strict process of quality assurance",
      },
    ],
  },

};