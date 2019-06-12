import React, { PureComponent } from 'react'

const getWidth = () => window.document.scrollingElement.clientWidth
const getHeight = () => window.document.scrollingElement.clientHeight
export default (mapSizesToProps) => (Component) => {
  class MapSizes extends PureComponent {
    state = {
      width: getWidth(),
      height: getHeight(),
    }

    componentDidMount() {
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