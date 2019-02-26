import React, { PureComponent } from 'react'
import Link from '../components/Link'
// import Helmet from 'react-helmet'

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
    const { children } = this.props;

    return (
      <div>
        <Nav />
        {children()}
        <Footer />
      </div>
    );
  }
}

export default Layout
