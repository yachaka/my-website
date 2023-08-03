
import React, { cloneElement, Component } from 'react';
import cx from 'classnames';
// import Animated from 'animated/lib/targets/react-dom';
// import Easing from 'animated/lib/Easing';
import Img from 'gatsby-image';
// import VisibilitySensor from 'react-visibility-sensor';
// import cloneReferencedElement from 'react-clone-referenced-element';

import * as s from './index.module.scss';

class DeviceMockup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }


  getSizesPure = (widthNeeded, heightNeeded) => {
    const { skinDimensions: dimensions } = this.props;

    let coeff;
    if (widthNeeded) {
      coeff = widthNeeded / dimensions.width;
    } else if (heightNeeded) {
      coeff = heightNeeded / dimensions.height;
    } else {
      coeff = 1;
    }

    const startScreenX = dimensions.startScreenX * coeff;
    const startScreenY = dimensions.startScreenY * coeff;
    const screenWidth = dimensions.screenWidth * coeff;
    const screenHeight = dimensions.screenHeight * coeff;

    return {
      phoneWidth: dimensions.width * coeff,
      phoneHeight: dimensions.height * coeff,
      startScreenX,
      startScreenY,
      screenWidth,
      screenHeight,
      leftArrowX: startScreenX,
      leftArrowY: startScreenY + (screenHeight / 2),
      rightArrowX: startScreenX + screenWidth,
      rightArrowY: startScreenY + (screenHeight / 2),
    };
  }

  getSizes = () => this.getSizesPure(this.props.width, this.props.height)

  previous = () => {
    console.log('previous')
    this.setState({
      selectedIndex: (this.state.selectedIndex - 1) % this.props.screens.length,
    });
  }

  next = () => {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.screens.length,
    });
  }

  render() {
    const {
      class: className,
      style: styleFromProps,
      width,
      height,
      screens,
      screensSpacing,
      skinBackground,
      skinDimensions,
      render,
      ...others
    } = this.props;

    const {
      selectedIndex,
    } = this.state;

    const {
      phoneWidth,
      phoneHeight,
      startScreenX,
      startScreenY,
      screenWidth,
      screenHeight,
      leftArrowX,
      leftArrowY,
      rightArrowX,
      rightArrowY,
    } = this.getSizes();

    const PhoneStyle = {
      backgroundImage: `url(${skinBackground})`,
      backgroundSize: 'contain',
      width: phoneWidth,
      height: phoneHeight,
      position: 'relative',
    };

    const ScreenWrapperStyle = {
      position: 'absolute',
      top: startScreenY,
      left: startScreenX,
      width: screenWidth,
      height: screenHeight,
    };

    return (
      <div class={cx(className, s.mockup)} style={{ ...PhoneStyle, ...styleFromProps }} {...others}>
        <div style={ScreenWrapperStyle}>
          {render()}
        </div>
      </div>
    );
  }

  
}

export default DeviceMockup;
