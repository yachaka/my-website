import React, { PureComponent } from 'react'

let getWidth, getHeight

export default (mapSizesToProps) => (Component) => {
  class MapSizes extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        width: 1280,
        height: 600,
      };
    }

    componentDidMount() {
      getWidth = () => window.document.scrollingElement.clientWidth
      getHeight = () => window.document.scrollingElement.clientHeight

      this.setState({
        width: getWidth(),
        height: getHeight(),
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