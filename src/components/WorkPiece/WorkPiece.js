
import React, { PureComponent } from 'react'
import cx from 'classnames'

import s from './WorkPiece.module.scss'

class WorkPiece extends PureComponent {
  render() {
    const { lang } = this.context;
    const t = i18n(lang, translations);

    const {
      className,

      testimonial,
      color,

      ...others
    } = this.props;

    return (
      <div {...others} class={cx(className, s.workBlock)}>
        <div class="container">
          <div class="row"><div class="col-xs-12">
            <h2 style={{ marginBottom: 5 }}>
              <span class="external-link">
                <a href="https://www.spendesk.com" target="_blank">
                  Spendesk
                </a></span><span class="muted"> - 10 {t('months')} - {t('as-employee')}</span>
            </h2>
            <h3 class="muted" style={{ marginBottom: 30 }}>
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