
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';

import s from './Nav.module.scss';

export default class Nav extends PureComponent {

  render() {
    return (
      <div class="container">
        <nav id={s.nav}>
          <ul>
            <li class={s.rightmost}><Link to="/all-around">Rate & How I Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li class={cx(s.home, s.leftmost)}><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}