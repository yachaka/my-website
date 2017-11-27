
import React, { PureComponent } from 'react';
import cx from 'classnames';
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

          <hr style="margin-bottom: 50px;" />
        </div></div></div>


        <div class="container">
          <SpendeskWork data={this.props.data} />

          <SpeakenWork />
        </div>
      </div>
    );
  }
}


class SpendeskWork extends PureComponent {
  render() {
    return (
      <div class={s.workBlock}>
        <div class="row"><div class="col-xs-12">
          <h2 style="margin-bottom: 5px;">
            <span class="external-link">
              <a href="https://www.spendesk.com" target="_blank">
                Spendesk
              </a></span><span class="muted"> - 10 months - as an employee</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 30px;">
            Techs used: Node.js, React, React-Native, GraphQL, Relay
          </h3>

          <p class={s.brief}>
            Spendesk is a smart business expenses platform.
          </p>
        </div></div>

        <MobileAndLaptopMockups
          laptopScreens={[
            this.props.data.requestsScreenImg.childImageSharp.sizes,
            this.props.data.paymentsScreenImg.childImageSharp.sizes,
            this.props.data.cardsScreenImg.childImageSharp.sizes,
            this.props.data.cardOrder3ScreenImg.childImageSharp.sizes,
            this.props.data.settingsTeamScreenImg.childImageSharp.sizes,
            this.props.data.branchsMenuScreenImg.childImageSharp.sizes,
          ]}
          mobileScreens={[
            InAppApprovalVideo,
            PaymentEditionVideo,
            TopUpVideo,
            LoginVideo,
          ]}
        />
      </div>
    );
  }
}

class SpeakenWork extends PureComponent {
  render() {
    return (
      <div class={s.workBlock}>
        <div class="row"><div class="col-xs-12">
          <h2 style="margin-bottom: 5px;">
            <span class="external-link">
              <a href="https://speaken.com" target="_blank">
                Speaken
              </a></span><span class="muted"> - 4 months - as a freelance</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 30px;">
            Techs used: React, Redux
          </h3>

          <p class={s.brief}>
            Speaken is a platform to learn speaking languages.
          </p>
        </div></div>

        <LaptopMockup />
      </div>
    );
  }
}

class LaptopMockup extends PureComponent {
  render() {
    const { windowWidth, windowHeight } = this.props;


    const width = windowWidth >= 992
      ? 880
      : 700;

    return (
      <div class="row"><div class="col-xs-12">
        <DeviceMockup
          style={{ margin: 'auto' }}
          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          screens={['green']}
          width={width}
        />
      </div></div>
    )
  }
}

LaptopMockup = windowSize(LaptopMockup);

class MobileAndLaptopMockupsPure extends PureComponent {
  render() {
    const {
      isLarge,
      isMedium,
      isSmall,
      isXSmall,
    } = this.props;

    if (isLarge || isMedium) {
      const mobileWidth = isLarge
        ? 233
        : 212;
      const mobileMargin = isLarge
        ? 90
        : 80;
      const laptopWidth = isLarge
        ? 789
        : 728;

      const mobileStyle = {
        marginTop: 50,
        marginLeft: mobileMargin / 2,
        marginRight: -mobileMargin,
        float: 'left',
      };

      return (
        <div class="row"><div class="col-xs-12">
          <DeviceMockup
            id={s.spendeskMobileMockup}
            style={mobileStyle}
            skinBackground={GooglePixelBackground}
            skinDimensions={GooglePixelStats}
            width={mobileWidth}
            screens={this.props.mobileScreens}
            screensSpacing={6}
          />
          <DeviceMockup
            id={s.spendeskUbuntuMockup}
            skinBackground={UbuntuLaptopBackground}
            skinDimensions={UbuntuLaptopStats}
            width={laptopWidth}
            screens={this.props.laptopScreens}
            screensSpacing={6}
          />
        </div></div>
      );
    }

    const mobileStyle = {
      margin: 'auto',
      marginBottom: 55,
    };

    return (
      <div>
        <div class="row"><div class="col-xs-12">
          <DeviceMockup
            id={s.spendeskMobileMockup}
            style={mobileStyle}
            skinBackground={GooglePixelBackground}
            skinDimensions={GooglePixelStats}
            width={400}
            screens={this.props.mobileScreens}
            screensSpacing={6}
          />
        </div></div>
        <div class="row"><div class="col-xs-12">
          <DeviceMockup
            id={s.spendeskUbuntuMockup}
            style={{ margin: 'auto' }}
            skinBackground={UbuntuLaptopBackground}
            skinDimensions={UbuntuLaptopStats}
            width={700}
            screens={this.props.laptopScreens}
            screensSpacing={6}
          />
        </div></div>
      </div>
    );
  }
}

class mapSizesToProps extends PureComponent {
  render() {
    const { windowWidth: width, windowHeight, ...others } = this.props;
    const props = {
      isLarge: width >= 1080,
      isMedium: width < 1080 && width >= 992,
      isSmall: width < 992 && width >= 768,
      isXSmall: width < 768,
    };

    return (
      <MobileAndLaptopMockupsPure
        {...others}
        {...props}
      />
    );
  }
}

const MobileAndLaptopMockups = windowSize(mapSizesToProps);

export const query = graphql`
  query ProjectsImages {
    cardsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Cards.png" }) {
      ...ImageForLaptopMockup
    }
    requestsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Requests.png" }) {
      ...ImageForLaptopMockup
    }
    paymentsScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Payments.png" }) {
      ...ImageForLaptopMockup
    }
    cardOrder3ScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/CardOrder-Step3.png" }) {
      ...ImageForLaptopMockup
    }
    settingsTeamScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Settings-Team.png" }) {
      ...ImageForLaptopMockup
    }
    branchsMenuScreenImg:file(relativePath: { eq: "data/Spendesk/webapp/Branchs-Menu.png" }) {
      ...ImageForLaptopMockup
    }
  }

  fragment ImageForLaptopMockup on File {
    childImageSharp {
      sizes(maxWidth: 800, quality: 35) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;