
import React, { Component } from 'react';
import cx from 'classnames';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import memoize from 'memoizee';

import s from './index.module.scss';

const isVideo = (file) => file.split('.').pop() === 'mp4';
const isImage = (file) => file.split('.').pop() === 'png';

class DeviceMockup extends Component {

  state = {
    index: 0,
    left: new Animated.Value(0),
  };

  getSizesPure = memoize((widthNeeded, heightNeeded) => {
    const { skinDimensions: dimensions } = this.props;

    let coeff;
    if (widthNeeded) {
      coeff = widthNeeded / dimensions.width;
    } else if (heightNeeded) {
      coeff = heightNeeded / dimensions.height;
    } else {
      coeff = 1;
    }

    return {
      phoneWidth: dimensions.width * coeff,
      phoneHeight: dimensions.height * coeff,
      startScreenX: dimensions.startScreenX * coeff,
      startScreenY: dimensions.startScreenY * coeff,
      screenWidth: dimensions.screenWidth * coeff,
      screenHeight: dimensions.screenHeight * coeff,
      arrowsTopSpacing: dimensions.arrowsTopSpacing * coeff,
      arrowsMiddleSpacing: dimensions.arrowsMiddleSpacing * coeff,
      arrowSvgWidth: dimensions.arrowSvgWidth * coeff,
      arrowSvgHeight: dimensions.arrowSvgHeight * coeff,
      arrowBoxHeight: dimensions.arrowBoxHeight * coeff,
      arrowBoxWidth: dimensions.arrowBoxWidth * coeff,
      arrowBoxCornerRadius: dimensions.arrowBoxCornerRadius * coeff,
    };
  })

  getSizes = () => this.getSizesPure(this.props.width, this.props.height)

  previous = () => {
    this.changeScreen((this.state.index - 1) % this.props.screens.length);
  }

  next = () => {
    this.changeScreen((this.state.index + 1) % this.props.screens.length);
  }

  changeScreen = (toScreenIndex) => {
    this.setState({
      index: toScreenIndex,
    }, this.animateToCurrentScreen);
  }

  animateToCurrentScreen = () => {
    const { screensSpacing } = this.props;
    const { screenWidth } = this.getSizes();
    const newLeft = -((this.state.index * screenWidth) + this.state.index * screensSpacing);

    Animated.timing(this.state.left, {
      toValue: newLeft,
      duration: 240,
      easing: Easing.out(Easing.poly(2)),
    }).start();
  }

  render() {
    const {
      style: styleFromProps,
      width,
      height,
      screens,
      screensSpacing,
      skinBackground,
      skinDimensions,
      ...others
    } = this.props;

    const {
      index,
      left,
    } = this.state;

    const { arrowsOnBlack } = skinDimensions;
    const { phoneWidth, phoneHeight, startScreenX, startScreenY, screenWidth, screenHeight, arrowsTopSpacing, arrowsMiddleSpacing, arrowSvgWidth, arrowSvgHeight, arrowBoxWidth, arrowBoxHeight, arrowBoxCornerRadius } = this.getSizes();

    const PhoneStyle = {
      overflow: 'hidden',
      backgroundImage: `url(${skinBackground})`,
      backgroundSize: 'contain',
      width: phoneWidth,
      height: phoneHeight,
    };

    const ScreenWrapperStyle = {
      marginTop: startScreenY,
      marginLeft: startScreenX,
      width: screenWidth,
      overflow: 'hidden',
    };

    const ScreenInnerStyle = {
      width: ((screenWidth + 1) * screens.length) + ((screens.length - 1) * screensSpacing),
      marginLeft: left,
    };

    const ScreenStyle = {
      display: 'block',
      float: 'left',
      width: screenWidth,
      height: screenHeight,
      marginBottom: arrowsTopSpacing,
      marginLeft: screensSpacing,
    };

    const FirstScreenStyle = {
      marginLeft: 0,
    };

    const ArrowsStyle = {
      marginLeft: startScreenX,
    };

    const ArrowBoxStyle = {
      width: arrowBoxWidth,
      height: arrowBoxHeight,
      textAlign: 'center',
      borderRadius: 6,
      ...skinDimensions.arrowBoxAdditionalStyle,
    };

    const ArrowSvgStyle = {
      display: 'inline-block',
      marginTop: (arrowBoxHeight - arrowSvgHeight) / 2,
      width: arrowSvgWidth,
      height: arrowSvgHeight,
    };

    const LeftArrowBoxStyle = {
      float: 'left',
      marginRight: arrowsMiddleSpacing,
      borderBottomLeftRadius: arrowBoxCornerRadius ? arrowBoxCornerRadius : undefined,
    };

    const RightArrowBoxStyle = {
      overflow: 'hidden',
      borderBottomRightRadius: arrowBoxCornerRadius ? arrowBoxCornerRadius : undefined,
    };

    const Screens = screens.map((s, i) => {
      let style = i === 0
        ? { ...ScreenStyle, ...FirstScreenStyle }
        : ScreenStyle;

      return this.renderScreen(style, s);
    });

    return (
      <div style={{ ...PhoneStyle, ...styleFromProps }} {...others}>
        <div style={ScreenWrapperStyle} onClick={() => false && this.next()}>
          <Animated.div style={ScreenInnerStyle}>
            {Screens}
          </Animated.div>
        </div>
        <div className={cx(s.arrows, arrowsOnBlack && s.arrowsOnBlack, !arrowsOnBlack && s.arrowsOnWhite)} style={ArrowsStyle}>
          <button style={{ ...ArrowBoxStyle, ...LeftArrowBoxStyle }} className={s.arrowBox} onClick={this.previous} disabled={index === 0}>
            <img style={ArrowSvgStyle} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTMgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjg4MDE3NTYsMjQgQzExLjYzNzE0NDEsMjMuOTk5Nzg2IDExLjQwNDE0NDUsMjMuOTAzMDY5MyAxMS4yMzI0MDIyLDIzLjczMTExMjkgTDAuMjMyNDc3MDc4LDEyLjczMTE4NzggQy0wLjA5MTEyODEzOTIsMTIuMzY4MjU0OCAtMC4wNzUwMzY5NDQsMTEuODE1NzkwNCAwLjI2OTE0MzQ5NiwxMS40NzIzMDc1IEwxMS4yNjkwNjg3LDAuNDcyMzgyMzA0IEMxMS40NTkzNzg4LDAuMTI4OTc1MjcxIDExLjg0NzI1NDIsLTAuMDU1MTAzMTA0NSAxMi4yMzM2MjgzLDAuMDE0NjIwMzUxIEMxMi42MjAwMDI1LDAuMDg0MzQzODA2NCAxMi45MTkwNzIsMC4zOTIzODUzNTMgMTIuOTc3MzQ3NSwwLjc4MDY1MTEyNSBDMTMuMDM1NjIzMSwxLjE2ODkxNjkgMTIuODQwMTYzMywxLjU1MTE4MzMxIDEyLjQ5MTI4MjYsMS43MzEyNjI2MyBMMi4xNzU3OTcxOSwxMi4wODM0MTQ0IEwxMi40OTEyODI2LDIyLjQzNTU2NjIgQzEyLjc1MzEwNTYsMjIuNjk3NzE1IDEyLjgzMTM3MzYsMjMuMDkxNzAyMSAxMi42ODk2MzIsMjMuNDM0MDIxNSBDMTIuNTQ3ODkwMywyMy43NzYzNDA5IDEyLjIxNDAxMzEsMjMuOTk5Njc0MSAxMS44NDM1MDkyLDI0IEwxMS44ODAxNzU2LDI0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
          </button>
          <button style={{ ...ArrowBoxStyle, ...RightArrowBoxStyle }} className={s.arrowBox} onClick={this.next} disabled={index + 1 === screens.length}>
            <img style={ArrowSvgStyle} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTMgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMS4wNzU1Mjc3LDI0IEMwLjcxMTM4OTc3LDIzLjk4NTM5NDggMC4zOTA0Mjk5NCwyMy43NTY2MjU1IDAuMjU3ODMxNjMyLDIzLjQxNzE3MzggQzAuMTI1MjMzMzI1LDIzLjA3NzcyMjIgMC4yMDYxNDYyMDIsMjIuNjkxOTcxMyAwLjQ2Mzk3MDAyMiwyMi40MzQ0MTIzIEwxMC43ODcwNjM3LDEyLjA3NDYyNTIgTDAuNDYzOTcwMDIyLDEuNzE0ODM4MDQgQzAuMTMzMTAxMjE0LDEuNTI2NzE3NzYgLTAuMDQ3MjMzMzUyLDEuMTUzODIzMzQgMC4wMTA3NDEzOTE5LDAuNzc3NjU1MzgyIEMwLjA2ODcxNjEzNTgsMC40MDE0ODc0MjIgMC4zNTI5NTYyMjgsMC4xMDAxOTI5MjQgMC43MjUxMTIxODgsMC4wMjA0MjIzMzgxIEMxLjA5NzI2ODE1LC0wLjA1OTM0ODI0ODEgMS40ODAwMjY0NSwwLjA5ODk3NzAxNTQgMS42ODcwODUzOSwwLjQxODMzNTc0OSBMMTIuNjk1MTIzNywxMS40MjYzNzQgQzEzLjA1MjgyNzksMTEuNzg0NTIzNyAxMy4wNTI4Mjc5LDEyLjM2NDcyNjcgMTIuNjk1MTIzNywxMi43MjI4NzYzIEwxLjY4NzA4NTM5LDIzLjczMDkxNDYgQzEuNTI0MzA2ODEsMjMuODk0Mjk3OCAxLjMwNTk1ODIyLDIzLjk5MDM3MTIgMS4wNzU1Mjc3LDI0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
          </button>
        </div>
      </div>
    );
  }

  renderScreen = (ScreenStyle, screen) => {
    if (isVideo(screen)) {
      return this.renderVideoScreen(ScreenStyle, screen);
    } else if (isImage(screen)) {
      return this.renderImageScreen(ScreenStyle, screen);
    }

    return (<div style={{ ...ScreenStyle, backgroundColor: screen }}></div>);

  }

  renderVideoScreen = (ScreenStyle, screen) => {
    return (
      <video width={ScreenStyle.width} height={ScreenStyle.height} controls style={ScreenStyle}>
        <source type="video/mp4" src={screen} />
      </video>
    );
  }

  renderImageScreen = (ScreenStyle, screen) => {
    return (
      <img src={screen} style={ScreenStyle} />
    );
  }
}

export default DeviceMockup;
