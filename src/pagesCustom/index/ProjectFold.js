import React, { memo, useContext } from 'react';
import merge from 'lodash.merge';
import cx from 'classnames';
import dayjs from 'dayjs';
import Img from 'gatsby-image';

import s from './ProjectFold.module.scss';
import LangContext from '../../lib/i18n/LangContext';
import WorkVisuals from './WorkVisuals';
import i18n from '../../lib/i18n/i18n';
import specificTranslations from './index.translations.json';
import projectTranslations from './projects.translations.json';
import { getTextForTechno } from '../../lib/technosToColors'

function ProjectFold({
  name,
  url,
  color,
  
  dates,
  
  freelanceOrEmployee,
  technologiesUsed,

  productBrief,
  mobileScreenshots,
  laptopScreenshots,
  keyWork,
  myWorkSummaryText,
  teamText,
  feedback,
  ...others
}) {
  let monthDuration;
  let startYear;
  let endYear;
  let yearStr;

  if (typeof dates[0][0] === 'object') {
    startYear = dates[0][0].year();
    endYear = dates[dates.length - 1][1].year();
    monthDuration = dates.reduce((total, entry) => {
      return total + entry[1].diff(entry[0], 'month', true);
    }, 0);
  } else {
    startYear = dates[0].year();
    endYear = dates[1].year();
    monthDuration = dates[1].diff(dates[0], 'months', true);
  }

  yearStr = startYear === endYear
    ? startYear
    : `${startYear}/${endYear}`;
  monthDuration = Math.round(monthDuration);
  // showScreen = (device, slide) => {
  //   smoothScrollTo(this.mockupsDivRef.offsetTop - 100, 300)
  //   setTimeout(() => this[`${device}Ref`].changeScreen(slide), 200)
  // }

  const lang = useContext(LangContext);
  const t = i18n(lang, merge(specificTranslations, projectTranslations));

  let statusStr;

  if (freelanceOrEmployee === 'freelance') {
    statusStr = t('as-freelance');
  } else if (freelanceOrEmployee === 'employee') {
    statusStr = t('as-employee');
  } else if (freelanceOrEmployee === 'both') {
    statusStr = t('as-both');
  }

  const technologiesStr = technologiesUsed.reduce((els, current, index) => {
    if (index > 0) {
      els.push(', ')
    }

    els.push(getTextForTechno(current))
    return els
  }, []);

  return (
    <section class={s.workBlock} {...others}>
      <div class="container">
        <h2 class={s.title}>
          <a href={url} class="external-link" target="_blank">{name}</a>
          &nbsp;- {yearStr}, {monthDuration} {monthDuration > 1 ? t('months') : t('month')}<span class="muted"> - {statusStr}</span>
        </h2>

        <h3 class={cx(s.subtitle, 'muted')}>
          <span class="strong">{t('with')}</span> {technologiesStr}
        </h3>

        <p class={s.brief} dangerouslySetInnerHTML={{ __html: productBrief[lang] }} />

        {(!!laptopScreenshots || !!mobileScreenshots) && (
          <WorkVisuals
            className={s.workMockups}

            color={color}
            laptopScreenshots={laptopScreenshots}
            mobileScreenshots={mobileScreenshots}
          />
        )}

        {keyWork && keyWork.length > 0 && (
          <div class={s.keyPoints}>
            <h3>{t('key-developments')}</h3>

            <ul class="key-points">
              {keyWork.map(point => {
                let linkEl

                if (point.link) {
                  let classNames = [s.keyPointLink]
                  let onClick
                  let href
                  let content

                  if (point.link.startsWith('#')) {
                    const parts = point.link.split('#')
                    const device = parts[1]
                    const slideToGoTo = parseInt(parts[2], 10)
                    {/* onClick = () => this.showScreen(device, slideToGoTo) */}
                    href = 'javascript:;'
                    content = point.linkText || t('link-see-in-image')
                  } else {
                    classNames.push('external-link')
                    href = point.link
                    content = point.link.replace(/(https?:\/\/(www\.)?)/gi, '')
                  }

                  linkEl = <a target="_blank" href={href} onClick={onClick} class={classNames.join(' ')}>{content}</a>
                }

                return (
                  <li className="key-point">
                    <span>{point[lang]}</span>
                    {linkEl}
                  </li>
                )
              })}
            </ul>
          </div>
        )}


        <div class={s.columns}>
          <div class={cx(s.columnLeft, s.column)}>
            <h3>{t('summary')}</h3>
            <p dangerouslySetInnerHTML={{ __html: myWorkSummaryText[lang] }} />
          </div>
          <div class={cx(s.columnRight, s.column)}>
            <h3>{t('team')}</h3>
            <p dangerouslySetInnerHTML={{ __html: teamText[lang] }} />
          </div>
        </div>

        {feedback &&
          <div class={cx('testimonial', s.testimonial)}>
            <svg class={cx('quote', s.quote, s.quoteLeft)} viewBox="0 0 90 80" width="90" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 51.791C0 22.982 26.598 5.429 30.729 3.241c2.992-1.63 5.762-2.725 7.66-2.725 1.653 0 2.747.804 2.747 2.189 0 1.384-1.385 3.015-2.747 4.109C34.57 9.561 23.85 23.831 23.85 37.275c0 3.551 1.921 6.834 4.109 7.95 2.479 1.362 14.002 3.841 14.002 18.357 0 8.509-6.856 15.9-16.459 15.9C12.886 79.483 0 69.903 0 51.791zm48.014 0c0-28.809 26.621-46.362 30.73-48.55C81.76 1.611 84.506.516 86.426.516c1.652 0 2.725.804 2.725 2.189 0 1.384-1.361 3.015-2.725 4.109-3.84 2.747-14.537 17.017-14.537 30.461 0 3.551 1.92 6.834 4.109 7.95C78.477 46.588 90 49.066 90 63.583c0 8.509-6.879 15.9-16.482 15.9-12.596 0-25.504-9.58-25.504-27.692z" fill="#000" fill-rule="nonzero" /></svg>
            <svg class={cx('quote', s.quote, s.quoteRight)} viewBox="0 0 90 80" width="90" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M90 51.791c0-28.809-26.598-46.362-30.729-48.55-2.992-1.63-5.762-2.725-7.66-2.725-1.653 0-2.747.804-2.747 2.189 0 1.384 1.385 3.015 2.747 4.109C55.43 9.561 66.15 23.831 66.15 37.275c0 3.551-1.921 6.834-4.109 7.95-2.479 1.362-14.002 3.841-14.002 18.357 0 8.509 6.856 15.9 16.459 15.9C77.114 79.483 90 69.903 90 51.791zm-48.014 0c0-28.809-26.621-46.362-30.73-48.55C8.24 1.611 5.494.516 3.574.516 1.922.516.849 1.32.849 2.705c0 1.384 1.361 3.015 2.725 4.109 3.84 2.747 14.537 17.017 14.537 30.461 0 3.551-1.92 6.834-4.109 7.95C11.523 46.588 0 49.066 0 63.583c0 8.509 6.879 15.9 16.482 15.9 12.596 0 25.504-9.58 25.504-27.692z" fill="#000" fill-rule="nonzero" /></svg>
            <h3>{t('feedback')}</h3>
            <div class={s.content}>
              <div class={cx('text', s.text)}><p class={s.inner} dangerouslySetInnerHTML={{ __html: feedback.text[lang] }} /></div>
              <div class={s.who}>
                <Img className={s.picture} sizes={feedback.picture} />
                <div class={s.details}>
                  <p class={s.name}><a href={feedback.external} class="external-link" target="_blank">{feedback.name}</a></p>
                  <p class={s.role}>{feedback.role[lang]}</p>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </section>
  );
}

export default memo(ProjectFold);
