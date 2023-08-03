import React, { memo, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import outsideClick from 'outside-click';

import * as s from './Dropdown.module.scss';

function Dropdown({
  options,
  selected,
  onSelect,
  ...others
}) {
  const [optionsOpened, setOptionsOpened] = useState(false);
  const elRef = useRef(null);

  function toggleOptions() {
    setOptionsOpened(bool => !bool);
  }

  function toggleOptionsKeyDown(e) {
    if (e.keyCode === 13) {
      toggleOptions();
    }
  }

  const outsideClickRef = useRef(null);
  useEffect(
    function registerOutsideClick() {
      if (optionsOpened) {
        outsideClickRef.current = outsideClick(elRef.current, toggleOptions);
      }

      return () => {
        if (outsideClickRef.current) {
          outsideClickRef.current.off();
        }
      };
    },
    [optionsOpened, toggleOptions],
  );

  return (
    <div className={s.dropdown} ref={elRef} {...others}>
      <button
        role="button"
        tabIndex={0}
        onClick={toggleOptions}
        onKeyDown={toggleOptionsKeyDown}
        className={optionsOpened && s.optionsOpened}
      >
        {selected.text} ▼
      </button>

      <div
        className={cx(s.options, optionsOpened && s.opened)}
      >
        {options.map(o => (
          <div
            key={o.key}
            className={cx(s.option, selected.key === o.key && s.selected)}
            onClick={() => {
              onSelect(o);
              toggleOptions();
            }}
          >
            {o.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Dropdown);
