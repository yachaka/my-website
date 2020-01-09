import React, { memo } from 'react'
import 'reset-css';
import Helmet from 'react-helmet'

import './index.module.scss';
import LangContext from '../lib/i18n/LangContext';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

function Layout({
  children,
  lang,
}) {
  const description = lang === 'fr'
    ? 'Développeur freelance fullstack, JavaScript sur Paris (Node.js, React, React Native, AWS, GraphQL, SQL).'
    : 'Freelance JavaScript fullstack developer, in London (Node.js, React, React Native, AWS, GraphQL, SQL).'

  return (
    <LangContext.Provider value={lang}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React, Node.js, GraphQL, React Native, JavaScript Freelance Fullstack web developer - Ilyes Hermellin - Paris, London</title>
        <meta name="description" content={description} />
      </Helmet>

      <Nav />

      {children}

      <Footer />
    </LangContext.Provider>
  ) 
}

export default memo(Layout);
