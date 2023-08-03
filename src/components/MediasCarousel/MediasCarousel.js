import React, { useState, memo, useContext } from 'react';
import cx from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';

import LangContext from '../../lib/i18n/LangContext';
import * as s from './MediasCarousel.module.scss';
import Color from 'color';

function MediasCarousel({
  class: className,

  mobileStyle,
  width,

  color = 'rgb(0, 128, 247)',

  medias,
  ...others
}) {
  const lang = useContext(LangContext);
  const [selectedIndex, setIndex] = useState(0);

  function previous() {
    setIndex(current => (current - 1) % medias.length);
  }

  function next() {
    setIndex(current => (current + 1) % medias.length);
  }

  const arrowsStyle = {
    backgroundColor: Color(color).alpha(0.8).rgb().string(),
  };

  const screensStyle = {
    width: `${medias.length * 100}%`,
    marginLeft: `-${selectedIndex * 100}%`,
  };

  return (
    <div
      class={cx(s.carousel, className, mobileStyle && s.mobileStyle)}
      {...others}
    >
      <p class={s.screenTitle}>
        ({selectedIndex + 1}/{medias.length}) {medias[selectedIndex].title[lang]}
      </p>

      <div class={s.screensWrapper}>
        <div class={s.screens} style={screensStyle}>
          {medias.map((media, i) => (
            <Media
              key={i}
              data={media.data}
              style={{
                height: '100%',
                width: `${100 / medias.length}%`,
                display: 'block',
                float: 'left',
              }}
            />
          ))}
        </div>
      </div>

      <button
        style={arrowsStyle}
        className={cx(s.arrow, s.leftArrow)}
        onClick={previous}
        disabled={selectedIndex === 0}
      >
        ←
        </button>
      <button
        style={arrowsStyle}
        className={cx(s.arrow, s.rightArrow)}
        onClick={next}
        disabled={selectedIndex + 1 === medias.length}
      >
        →
      </button>
    </div>
  )
}

export default memo(MediasCarousel);

/*
 * Helpers
 */
const isVideo = (file) => file.split('.').pop() === 'mp4';
const isImage = (file) => file.split('.').pop() === 'png';

/*
 * <Media />
 */
function Media({
  style,
  data,
  ...others
}) {
  if (data.layout) {
    /* Gatsby Image Sharp */
    return (
      <a target="_blank" rel="noopener noreferer">
        <GatsbyImage image={data} style={style} {...others} />
      </a>
    );
  } else if (data.video) {
    return (
      <video style={style} controls>
        <source type="video/mp4" src={data.video} />
      </video>
    );
  } else if (isImage(data)) {
    return (
      <img src={data} style={style} />
    );
  }

  return (<div style={{ ...style, backgroundColor: data }}></div>);
}

Media = memo(Media);
