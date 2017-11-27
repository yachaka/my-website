
import React, { PureComponent } from 'react';
import GatsbyLink from 'gatsby-link';

export default class Link extends PureComponent {
  render() {
    const { lang: contextLang } = this.context;
    const { to, lang, ...others } = this.props;

    return (
      <GatsbyLink to={`/${lang || contextLang}${to}`} {...others} />
    );
  }
}