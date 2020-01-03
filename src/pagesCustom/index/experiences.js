import dayjs from 'dayjs';

import InAppApprovalVideo from '../../data/Spendesk/mobileapp/in-app-approval.mp4';
import PaymentEditionVideo from '../../data/Spendesk/mobileapp/payment-edition.mp4';
import TopUpVideo from '../../data/Spendesk/mobileapp/top-up.mp4';
import LoginVideo from '../../data/Spendesk/mobileapp/login.mp4';

import konbiniMobileArticleLoad from '../../data/konbini/mobile-article-load.mp4';
import konbiniMobileHomepageLoad from '../../data/konbini/mobile-homepage.mp4';
import konbiniDesktopArticleLoad from '../../data/konbini/desktop-article-load.mp4';
import konbiniDesktopHomepageLoad from '../../data/konbini/desktop-homepage.mp4';

export default {
  konbini: {
    "color": "#F52635",
    "name": "Konbini",
    "url": "https://www.konbini.com/",
    "dates": [dayjs('2019-07-10'), dayjs('2019-12-12')],
    "freelanceOrEmployee": "freelance",
    "technologiesUsed": ['Next.js', 'WordPress', 'PWA', 'React', 'Varnish Cache'],
    "roleTitle": "Développeur en chef/gestion de projet",
    "productBrief": {
      "fr": "Konbini est un média d'info-divertissement. 5 millions de visiteurs visitent leur site web chaque mois.",
      "en": "Konbini est un média d'info-divertissement. 5 millions de visiteurs visitent leur site web chaque mois.",
    },  
    "myWorkSummaryText": {
      "fr": "Après que Konbini ait commencé à transformer leur site en une <br /><a href=\"https://developers.google.com/web/progressive-web-apps\" target=\"_blank\" rel=\"noopener noreferrer\">Progressive Web App</a>, le code a souffert d'une importante dette technique, et l'expérience utilisateur a souffert de nombreux bugs.<br /><br />Pendant ma mission, j'ai pris le poste flexible de chef de projet/développeur en chef. Mon objectif était d'abord de refactoriser le code, éliminer les bugs, améliorer l'expérience utilisateur et développer la nouvelle page d'accueil (un fil d'actualités infini).<br /><br />J'ai aussi géré certains projets d'évolution de la publicité sur le site (besoins, planification, éxécution), ré-écrit la page d'accueil mobile (un carousel), et amélioré les performances globales du site (réduction de la taille du code interne de 50%).",
      "en": "Après que Konbini ait commencé à transformer leur site en une <br /><a href=\"https://developers.google.com/web/progressive-web-apps\" target=\"_blank\" rel=\"noopener noreferrer\">Progressive Web App</a>, le code a souffert d'une importante dette technique, et l'expérience utilisateur a souffert de nombreux bugs.<br /><br />Pendant ma mission, j'ai pris le poste flexible de chef de projet/développeur en chef. Mon objectif était d'abord de refactoriser le code, éliminer les bugs, améliorer l'expérience utilisateur et développer la nouvelle page d'accueil (un fil d'actualités infini).<br /><br />J'ai aussi géré certains projets d'évolution de la publicité sur le site (besoins, planification, éxécution), ré-écrit la page d'accueil mobile (un carousel), et amélioré les performances globales du site (réduction de la taille du code interne de 50%).",
    },
    "teamText": {
      "fr": "J'ai travaillé en collaboration avec 1 chef produit, 1 développeur en interne et 1 développeur externe (prestataire et à distance).<br /><br />J'ai échangé directement avec l'équipe de la publicité afin de résoudre les bugs, recueillir leur besoins, et développer de nouveaux formats.",
      "en": "J'ai travaillé en collaboration avec 1 chef produit, 1 développeur en interne et 1 développeur externe (prestataire et à distance).<br /><br />J'ai échangé directement avec l'équipe de la publicité afin de résoudre les bugs, recueillir leur besoins, et développer de nouveaux formats.",
    },
    "keyWork": [
      {
        "fr": "Gestion des projets d'évolution de la publicité, notamment le développement d'un format publicitaire vidéo fonctionnant avec un tag VAST générique",
        "en": "Gestion des projets d'évolution de la publicité, notamment le développement d'un format publicitaire vidéo fonctionnant avec un tag VAST générique",
      },
      {
        "fr": "Développpement de la nouvelle page d'accueil du site pour PC, avec un nouveau fil d'actualités infini",
        "en": "Développpement de la nouvelle page d'accueil du site pour PC, avec un nouveau fil d'actualités infini",
      },
      {
        "fr": "Ré-écriture complète de la page d'accueil mobile, en visant la performance, qui est un carousel permettant de naviguer entre les articles récents",
        "en": "Ré-écriture complète de la page d'accueil mobile, en visant la performance, qui est un carousel permettant de naviguer entre les articles récents",
      },
      {
        "fr": "Collaboration avec un prestataire externe pour la gestion et l'amélioration de l'infrastructure serveur",
        "en": "Collaboration avec un prestataire externe pour la gestion et l'amélioration de l'infrastructure serveur",
      },
      {
        "fr": "Amélioration globale de la performance du site web, notamment via la réduction de la taille totale du code (réduction de 50%)",
        "en": "Amélioration globale de la performance du site web, notamment via la réduction de la taille totale du code (réduction de 50%)",
      },
    ],
    "laptopScreenshots": {
      homepageLoad: {
        title: {
          "fr": "Fil d'articles infini'",
          "en": "Infinite scrolling feed",
        },
        "data": konbiniDesktopHomepageLoad,
      },
      articleLoad: {
        title: {
          "fr": "Visite d'un article et transition vers l'accueil",
          "en": "Landing on an article and switching to the homepage",
        },
        "data": konbiniDesktopArticleLoad,
      },
    },
    "mobileScreens": {
      homepageLoad: {
        title: {
          "fr": "Revue des nouveaux articles",
          "en": "Exploring new posts",
        },
        "data": konbiniMobileHomepageLoad,
      },
      articleLoad: {
        title: {
          "fr": "Chargement d'un article mobile",
          "en": "Loading a mobile post",
        },
        "data": konbiniMobileArticleLoad,
      },
    },
  },

  habx: {
    "color": "#F52635",
    "name": "HabX",
    "url": "https://habx.fr/",
    "dates": [
      [dayjs('2018-02-01'), dayjs('2018-03-02')],
      [dayjs('2018-04-09'), dayjs('2018-06-08')],
      [dayjs('2018-09-03'), dayjs('2019-02-28')],
    ],
    "freelanceOrEmployee": "both",
    "technologiesUsed": ['React', 'Apollo', 'GraphQL', 'AWS', 'Message queues', 'Redux', 'Webpack', 'Node.js'],
    "roleTitle": "Développeur fullstack JavaScript",
    "productBrief": {
      "fr": "Habx vend des appartements sur plan (VEFA) et sur-mesure.",
      "en": "Habx vend des appartements sur plan (VEFA) et sur-mesure.",
    },
    "myWorkSummaryText": {
      "fr": "J'ai eu un rôle individuel et flexible chez Habx.<br />D'abord prestataire, j'ai réalisé des travaux solitaires et nécessaires: la refonte du formulaire de configuration d'un logement, la réalisation initiale des landing pages, et le développement d'un robot d'indexation des prix des projets immobiliers français.<br/><br/>En tant qu'employé, j'ai participé au dévelopemment du CRM interne. J'ai notamment été responsable de l'intégration du logiciel avec des tierces parties (Aircall, Helpscout, Twilio, Calendly).<br/><br/>J'ai constamment participé au développement du site public.",
      "en": "J'ai eu un rôle individuel et flexible chez Habx.<br />D'abord prestataire, j'ai réalisé des travaux solitaires et nécessaires: la refonte du formulaire de configuration d'un logement, la réalisation initiale des landing pages, et le développement d'un robot d'indexation des prix des projets immobiliers français.<br/><br/>En tant qu'employé, j'ai participé au dévelopemment du CRM interne. J'ai notamment été responsable de l'intégration du logiciel avec des tierces parties (Aircall, Helpscout, Twilio, Calendly).<br/><br/>J'ai constamment participé au développement du site public.",
    },
    "teamText": {
      "fr": "J'ai travaillé d'abord au sein d'une équipe réduite de 3 développeurs et 1 développeur en chef. Au fil du temps, l'équipe s'est agrandie pour, à mon départ, se composer de 10 développeurs et d'un vice-président de l'ingénieurie.<br/><br/>L'entreprise a grandit pendant ce temps de 20 personnes, à plus de 50 personnes.<br/><br/>J'ai travaillé avec Trello, puis JIRA, pour effectuer les tâches de développement qui m'était assignées par un chef produit ; mais pas seulement. En effet, Habx promouvoit une communication horizontale, et j'échangeais également directement avec le VP de l'ingénieurie, l'équipe marketing, communication, ou architecte et créeait moi-même mes propres tickets.",
      "en": "J'ai travaillé d'abord au sein d'une équipe réduite de 3 développeurs et 1 développeur en chef. Au fil du temps, l'équipe s'est agrandie pour, à mon départ, se composer de 10 développeurs et d'un vice-président de l'ingénieurie.<br/><br/>L'entreprise a grandit pendant ce temps de 20 personnes, à plus de 50 personnes.<br/><br/>J'ai travaillé avec Trello, puis JIRA, pour effectuer les tâches de développement qui m'était assignées par un chef produit ; mais pas seulement. En effet, Habx promouvoit une communication horizontale, et j'échangeais également directement avec le VP de l'ingénieurie, l'équipe marketing, communication, ou architecte et créeait moi-même mes propres tickets.",
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
        "fr": "Librairies utilitaires aidant le développement avec AWS SQS/SNS",
        "en": "Tooling libraries helping generic AWS SQS/SNS development",
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
      "role": {
        "fr": "Chef Produit chez Habx",
        "en": "Product owner at Habx",
      },
      "text": {
        "fr": "",
        "en": "Ilyes a une forte motivation, et le don de rendre simple des problèmes d'abord compliqués. Il maitrise parfaitement les technologies les plus avancées en Javascript (GraphQL, Relay, React, etc) et sait s'adapter rapidement a son environement.<br/><br/>Chez Habx, nous avons fait confiance a Ilyes pour la conception des landing pages qu'il a su réaliser avec brio. [...]",
      },
    },
  },

  dailymotion: {
    "color": "rgb(4, 184, 251)",
    "name": "dailymotion",
    "url": "https://www.dailymotion.com/",
    "dates": [dayjs('2016-10-10'), dayjs('2017-08-11')],
    "freelanceOrEmployee": "employee",
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

  spendesk: {
    "color": "rgb(97, 0, 255)",
    "name": "Spendesk",
    "url": "https://www.spendesk.com/",
    "dates": [dayjs('2016-10-10'), dayjs('2017-08-11')],
    "freelanceOrEmployee": "employee",
    "technologiesUsed": ['Node.js', 'React', 'React-Native', 'iOS/Swift', 'Android/Java', 'GraphQL', 'Relay', 'Webpack'],
    "roleTitle": "Développeur fullstack JavaScript",
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
        "fr": "Développement de l’application mobile initiale sur iOS et Android, avec React Native, GraphQL et Relay",
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
      cardOrder: {
        title: {
          "fr": "Commande d'une nouvelle carte de paiement",
          "en": "New card order",
        },
      },
      members: {
        title: {
          "fr": "Gestion des membres et de leur droits",
          "en": "Members admin",
        },
      },
      branches: {
        title: {
          "fr": "Plusieurs branches d'une même entreprise",
          "en": "A company can have multiple branches",
        },
      },
    },
    "mobileScreens": {
      approve: {
        title: {
          "fr": "Autorisation d'une dépense",
          "en": "Expense approval",
        },
        data: InAppApprovalVideo,
      },
      edit: {
        title: {
          "fr": "Édition d'un paiement",
          "en": "Expense edition",
        },
        data: PaymentEditionVideo,
      },
      topUp: {
        title: {
          "fr": "Ajout de cash",
          "en": "Card top up",
        },
        data: TopUpVideo,
      },
      login: {
        title: {
          "fr": "Connexion",
          "en": "Log in",
        },
        data: LoginVideo,
      },
    },
    "feedback": {
      "name": "Guilhem Bellion",
      "external": "https://www.linkedin.com/in/guilhembellion/",
      "role": {
        "fr": "CTO chez Spendesk",
        "en": "CTO at Spendesk",
      },
      "text": {
        "fr": "Ilyes a le don de conjuguer parfaitement créativité et pragmatisme !<br/><br/>J'ai eu l'occasion de travailler étroitement avec lui pendant 10 mois chez Spendesk, durant lesquels il a participé avec succès à de nombreux projets. Il a notamment été intégralement responsable du développement et de la maintenance de notre application mobile en React Native, et a posé les bases de notre nouvelle API GraphQL. [...]<br/><br/>Son expertise technique et sa bonne humeur sont de vrais atouts dans une équipe !",
        "en": "Ilyes has the gift of perfectly combining creativity and pragmatism!<br/><br/>I had the opportunity to work closely with him for 10 months at Spendesk, during which he participated successfully in many projects. In particular, he was fully responsible for the development and maintenance of our React Native mobile application and laid the foundation for our new GraphQL API. [...]<br/><br/>His technical expertise and his good mood are real assets in a team!",
      },
    },
  },
};