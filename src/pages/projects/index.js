
import React, { PureComponent } from 'react';
import cx from 'classnames';
import windowSize from 'react-window-size';

import s from './index.module.scss';

import DeviceMockup from '../../components/DeviceMockup';
import InAppApprovalVideo from '../in-app-approval.mp4';
import CardsScreen from '../cards.png';
import PaymentsScreen from '../payments.png';

import GooglePixelBackground from '../../components/DeviceMockup/skins/GooglePixel/GooglePixel.png';
import GooglePixelStats from '../../components/DeviceMockup/skins/GooglePixel/dimensions';
import UbuntuLaptopBackground from '../../components/DeviceMockup/skins/UbuntuLaptop/Laptop.svg';
import UbuntuLaptopStats from '../../components/DeviceMockup/skins/UbuntuLaptop/dimensions.js';

export default class ProjectsPage extends PureComponent {

  render() {
    return (
      <div id={s.projects}>
        <div class="container"><div class="row"><div class="col-xs-12">
          <h1 style="margin-bottom: 55px;">Projects</h1>

          <hr style="margin-bottom: 110px;" />
        </div></div></div>


        <div class="container">
          <SpendeskWork />

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
          <h2 style="margin-bottom: 10px;">
            <span class="external-link">
              <a href="https://www.spendesk.com" target="_blank">
                Spendesk
              </a></span><span class="muted"> - 10 months - as an employee</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 55px;">
            Techs used: Node.js, React, React-Native, GraphQL, Relay
          </h3>

          <p class={s.brief}>
            Spendesk is a smart business expenses platform.
          </p>
        </div></div>

        <MobileAndLaptopMockups />
      </div>
    );
  }
}

class SpeakenWork extends PureComponent {
  render() {
    return (
      <div class={s.workBlock}>
        <div class="row"><div class="col-xs-12">
          <h2 style="margin-bottom: 10px;">
            <span class="external-link">
              <a href="https://speaken.com" target="_blank">
                Speaken
              </a></span><span class="muted"> - 4 months - as a freelance</span>
          </h2>
          <h3 class="muted" style="margin-bottom: 55px;">
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
        ? 260
        : 212;
      const mobileMargin = isLarge
        ? 90
        : 80;
      const laptopWidth = isLarge
        ? 880
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
            screens={[
              InAppApprovalVideo,
              'red',
            ]}
            screensSpacing={6}
          />
          <DeviceMockup
            id={s.spendeskUbuntuMockup}
            skinBackground={UbuntuLaptopBackground}
            skinDimensions={UbuntuLaptopStats}
            width={laptopWidth}
            screens={[
              PaymentsScreen,
              CardsScreen,
            ]}
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
            screens={[
              InAppApprovalVideo,
              'red',
            ]}
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
            screens={[
              PaymentsScreen,
              CardsScreen,
            ]}
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
      isLarge: width >= 1200,
      isMedium: width < 1200 && width >= 992,
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

