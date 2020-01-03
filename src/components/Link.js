
import React, { memo, useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import LangContext from '../layouts/LangContext';

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
