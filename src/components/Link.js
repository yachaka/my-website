
import React, { memo, useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import LangContext from '../lib/i18n/LangContext';

function Link({
  to,
  lang,
  ...others
}) {
  const contextLang = useContext(LangContext);

  return (
    <GatsbyLink to={`/${lang || contextLang}${to}`} {...others} />
  );
}

export default memo(Link);
