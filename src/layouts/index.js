import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import Helmet from 'react-helmet'

import 'reset-css';
import 'bootstrap-grid';

import s from './index.module.scss';

import Nav from './Nav';
import Footer from './Footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Nav />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
