
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Img from 'gatsby-image';
import windowSize from 'react-window-size';

import s from './index.module.scss';
import i18n from '../../i18n';
import translations from './index.translations.json';

import DeviceMockup from '../../components/DeviceMockup';
import InAppApprovalVideo from '../../data/Spendesk/mobileapp/in-app-approval.mp4';
import PaymentEditionVideo from '../../data/Spendesk/mobileapp/payment-edition.mp4';
import TopUpVideo from '../../data/Spendesk/mobileapp/top-up.mp4';
import LoginVideo from '../../data/Spendesk/mobileapp/login.mp4';

import GooglePixelBackground from '../../components/DeviceMockup/skins/GooglePixel/GooglePixel.png';
import GooglePixelStats from '../../components/DeviceMockup/skins/GooglePixel/dimensions';
import UbuntuLaptopBackground from '../../components/DeviceMockup/skins/UbuntuLaptop/Laptop.svg';
import UbuntuLaptopStats from '../../components/DeviceMockup/skins/UbuntuLaptop/dimensions.js';

export default class ProjectsPage extends PureComponent {

  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    return (
      <div id={s.projects}>
        <div class="container"><div class="row"><div class="col-xs-12">
          <h1 style="margin-bottom: 50px;">{t('projects')}</h1>

          {/*<hr style="margin-bottom: 50px;" />*/}
        </div></div></div>


        
        {/*<SpendeskWork data={this.props.data} />*/}


        {/*<SpeakenWork />*/}
        <div class="container">
        </div>
      </div>
    );
  }
}
