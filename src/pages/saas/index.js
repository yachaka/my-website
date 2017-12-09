
import React, { PureComponent } from 'react';

import saasSVG from '../../img/saas.svg';
import s from './index.module.scss';

export default class SaasPage extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row"><div class="col-xs-12">
          <h1 class={s.heading}>
            <img src={saasSVG}/> Développement de SaaS
          </h1>
        </div></div>

        <div id={s.content}>
          <div class="row"><div class="col-xs-12">
            <p>
              Mon coeur de métier est la création et le développement de <abbr title="Software as a Service">SaaS</abbr>, ou plus généralement d'applications complexes nécessitant la création de systèmes sur-mesure.<br/><br/>

              Mon language de prédilection est le JavaScript (Node.js, React) ; mais sans m'y limiter, je peux intervenir sur des bases de code en Go, PHP, Python.
            </p>
            <hr style="margin: 55px 0;" />
            <p>
              Je porte plusieurs valeurs dans mon code :
            </p>
            <ul>
              <li>
                <span class={s.title}>Clarté</span>
                La clarté du code réduit considérablement la friction lors de la collaboration entre plusieurs développeurs. Un code clair est un code générique.<br /><br/>
                L'écriture d'un code clair passe, entre autres, par une convention de nommage des variables/fonctions, l'application de paradigmes tels que la programmation fonctionnelle, ou encore le respect du principe de responsabilité unique.
              </li>
              <li>
                <span class={s.title}>Solidité</span>
                Un code solide se distingue par l'absence ou la présence très réduite de bogues.<br/><br/>
                Un code clair promeut un code solide : une meilleure compréhension aide à repérer d'éventuels dysfonctionnements. Mais également l'écriture de tests automatisés, ou l'utilisation d'outils de typage statique (dans le cas de languages non-typés, comme le JavaScript).
              </li>

              <li>
                <span class={s.title}>Flexibilité</span>
                La flexibilité du code s'exprimera lors de l'évolution de la plateforme, en permettant le développement de nouvelles fonctionnalités plus rapidement.<br/><br/>
                Certains indicateurs d'un code flexible sont le respect du principe de responsabilité unique ou l'application de paradigmes tels que la programmation fonctionnelle.
              </li>

              <li>
                <span class={s.title}>Performance</span>
                Pour que votre SaaS soit rapide et consomme peu de ressources ;)<br/><br/>
                Outre la réécriture d'un code inefficient, la mise en cache et le choix de la technologie adaptée au problème sont des solutions pour améliorer les performances d'un code.
              </li>

            </ul>
          </div></div>
        </div>
      </div>
    );
  }
}

// Clarté
// Performance
// Flexibilité
// Solidité