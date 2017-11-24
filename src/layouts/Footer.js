
import React, { PureComponent } from 'react';
import Link from 'gatsby-link';

import s from './Footer.module.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <div class="container">
        <hr style="margin-bottom: 5px;" />
        <footer class={s.footer}>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/q-and-a">Q&A</Link></li>
            <li><Link to="/about">About me (personal & very moving)</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}