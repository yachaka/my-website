
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

class Project extends PureComponent {
  render() {
    const {
      name,
      url,
      monthDuration,
      wasFreelanceWork,
      technologies,

      productBrief,
      mobileScreens,
      laptopScreens,
      role,
      team,
      testimonial,

      ...others
    } = this.props;

    const { lang } = this.context;
    const t = i18n(lang, translations);

    return (
      <div class={s.workBlock} {...others}>
        <div class="container">
          <div class="row"><div class="col-xs-12">
            <h2>
              <a href={url} class="external-link" target="_blank">
                {name}
              </a>
              <span class="muted"> - {monthDuration} {monthDuration > 1 ? t('months') : t('month')} - {wasFreelanceWork ? t('as-freelance') : t('as-employee')}</span>
            </h2>
            <h3 class="muted" style="margin-bottom: 30px;">
              {t('techs-used')} {technologies.join(', ')}
            </h3>

            <p class={s.brief} dangerouslySetInnerHTML={{ __html: productBrief }} />
          </div></div>

          {mobileScreens && laptopScreens &&
          <MobileAndLaptopMockups
            laptopScreens={laptopScreens}
            mobileScreens={mobileScreens}
          /> }

          {laptopScreens && !mobileScreens &&
          <LaptopMockup />}

          <div class="row">
            <div class={cx('col-xs-6', s.columns)}>
              <h3>{t('role')}</h3>
              <p dangerouslySetInnerHTML={{ __html: role }} />
            </div>
            <div class="col-xs-1"></div>
            <div class={cx('col-xs-5', s.columns)}>
              <h3>{t('team')}</h3>
              <p dangerouslySetInnerHTML={{ __html: team }} />
            </div>
          </div>

          {testimonial &&
          <div class="row"><div class="col-xs-10 col-xs-offset-1">
            <div class={s.testimonial}>
              <h3>{t('feedback')}</h3>
              <div class={s.content}>
                <div class={s.text}><p class={s.inner} dangerouslySetInnerHTML={{ __html: testimonial.text }} /></div>
                <div class={s.who}>
                  <Img outerWrapperClassName={s.picture} sizes={testimonial.picture} />
                  <div class={s.details}>
                    <p class={s.name}><a href={testimonial.external} class="external-link" target="_blank">{testimonial.name}</a></p>
                    <p class={s.role}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div></div> }

        </div>
      </div>
    );
  }
}

class SpendeskWork extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    const { testimonial } = this.props;

    return (
      <div class={s.workBlock} style="background-color: rgba(97, 0, 255, .04);">
        <div class="container">
          <div class="row"><div class="col-xs-12">
            <h2 style="margin-bottom: 5px;">
              <span class="external-link">
                <a href="https://www.spendesk.com" target="_blank">
                  Spendesk
                </a></span><span class="muted"> - 10 {t('months')} - {t('as-employee')}</span>
            </h2>
            <h3 class="muted" style="margin-bottom: 30px;">
              {t('techs-used')} Node.js, React, React-Native, GraphQL, Relay
            </h3>

            <p class={s.brief}>
              {t('spendesk.product-brief')}
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

          <div class="row">
            <div class={cx('col-xs-6', s.columns)}>
              <h3>{t('role')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('spendesk.role') }} />
            </div>
            <div class="col-xs-1"></div>
            <div class={cx('col-xs-5', s.columns)}>
              <h3>{t('team')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('spendesk.team') }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SpeakenWork extends PureComponent {
  render() {
    return (
      <div class={s.workBlock} style="background-color: rgba(63, 200, 214, .04);">
        <div class="container">
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
      <div class={s.workMockups}><div class="row"><div class="col-xs-12">
        <DeviceMockup
          style={{ margin: 'auto' }}
          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          screens={['green']}
          width={width}
        />
      </div></div></div>
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
        marginLeft: mobileMargin,
        marginRight: -mobileMargin,
        float: 'left',
      };

      return (
        <div class={s.workMockups}><div class="row"><div class="col-xs-12">
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
        </div></div></div>
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
