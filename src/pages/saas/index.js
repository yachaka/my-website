
import React, { PureComponent } from 'react';

import saasSVG from '../../img/saas.svg';
import s from './index.module.scss';

export default class SaasPage extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row"><div class="col-xs-12">
          <h1 class={s.heading}>
            <img src={saasSVG}/> SaaS Building
          </h1>
        </div></div>

        <div class="row"><div class="col-xs-12">
          <p class={s.talk}>Mon coeur de métier est la création et le développement de <abbr title="Software as a Service">SaaS</abbr>, ou plus généralement d'applications complexes nécessitant la création de systèmes sur-mesure.</p>
        </div></div>
      </div>
    );
  }
}