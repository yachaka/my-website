import React, { PureComponent } from 'react'
import Link from '../components/Link'
 import Helmet from 'react-helmet'

import 'reset-css';
// import '../bootstrap/css/bootstrap.min.css';
// import 'bootstrap-grid';

import s from './index.module.scss';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Layout extends PureComponent {
  defaultProps = {
    lang: 'en',
  };

  getChildContext() {
    return {
      lang: this.props.lang,
    };
  }

  render() {
    const { children, lang } = this.props;

    const description = 'JavaScript Freelance web développeur.'

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>React, Node.js, GraphQL, React Native, JavaScript Freelance Fullstack web developer - Ilyes Hermellin</title>
          <meta name="description" content={description} />
        </Helmet>
        <Nav />
        {children()}
        <Footer />
      </div>
    );
  }
}

export default Layout
