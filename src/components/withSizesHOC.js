import React, { PureComponent } from 'react'

export default (mapSizesToProps) => (Component) => {
  class MapSizes extends PureComponent {
    componentDidMount() {
      this.setState({
        width: window.document.scrollingElement.clientWidth,
        height: window.document.scrollingElement.clientHeight,
      })
      window.addEventListener('resize', this.getSizes)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.getSizes)
    }

    getSizes = () => {
      this.setState({
        width: getWidth(),
        height: getHeight(),
      })
    }

    render() {
      const additionalProps = mapSizesToProps(this.state)
      return <Component {...additionalProps} {...this.props} />
    }
  }
  MapSizes.displayName = `withSizes(${Component.displayName})`

  return MapSizes
}