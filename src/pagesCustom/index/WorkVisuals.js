import React, { memo } from 'react';
import cx from 'classnames';

import s from './WorkVisuals.module.scss';

import withSizes from '../../components/withSizesHOC'
import DeviceMockup from '../../components/DeviceMockup';
import GooglePixelBackground from '../../components/DeviceMockup/skins/GooglePixel/GooglePixel.png';
import GooglePixelStats from '../../components/DeviceMockup/skins/GooglePixel/dimensions';
import UbuntuLaptopBackground from '../../components/DeviceMockup/skins/UbuntuLaptop/Laptop.svg';
import UbuntuLaptopStats from '../../components/DeviceMockup/skins/UbuntuLaptop/dimensions.js';
import MediasCarousel from '../../components/MediasCarousel/MediasCarousel';

function WorkVisuals({
  className,
  width,
  color,

  mobileScreens,
  laptopScreens,
}) {
  let mobileWidth;
  let mobileMargin;
  let laptopWidth;

  if (width >= 1080) {
    mobileWidth = 233;
    mobileMargin = 90;
    laptopWidth = 789;
  } else if (width >= 900) {
    mobileWidth = 189;
    mobileMargin = 70;
    laptopWidth = 657;
  } else if (width >= 800) {
    mobileWidth = 168;
    mobileMargin = 64;
    laptopWidth = 584;
  } else if (width >= 700) {
    mobileWidth = 147;
    mobileMargin = 56;
    laptopWidth = 511;
  } else {
    return (
      <div class={cx(className, s.mockups, s.mobile)}>
        {mobileScreens && (
          <div class={s.mobileDisplay}>
            <MediasCarousel
              mobileStyle
              color={color}
              medias={mobileScreens}
            />
          </div>
        )}

        {laptopScreens && (
          <div class={s.mobileDisplay}>
            <MediasCarousel
              mobileStyle
              color={color}
              medias={laptopScreens}
            />
          </div>
        )}
      </div>
    )
  }

  const mobileStyle = {
    marginTop: mobileMargin / 2,
    marginLeft: mobileMargin / 2,
    marginRight: -mobileMargin,
    float: 'left',
  };

  return (
    <div class={cx(className, s.mockups)}>
      {mobileScreens && (
        <DeviceMockup
          class={s.mobile}
          style={mobileStyle}

          skinBackground={GooglePixelBackground}
          skinDimensions={GooglePixelStats}
          width={mobileWidth}
          render={() => (
            <MediasCarousel
              color={color}
              medias={mobileScreens}
            />
          )}
        />
      )}

      {laptopScreens && (
        <DeviceMockup
          class={s.desktop}

          skinBackground={UbuntuLaptopBackground}
          skinDimensions={UbuntuLaptopStats}
          width={laptopWidth}

          render={() => (
            <MediasCarousel
              color={color}
              medias={laptopScreens}
            />
          )}
        />
      )}
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  width,
});

export default withSizes(mapSizesToProps)(memo(WorkVisuals));
