
import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import * as s from './MobileOverlay.module.scss'

export default class MobileOverlay extends PureComponent {
  render() {
    const { className, isOpen, onClose, children } = this.props
    console.log('asked render', isOpen)
    return (
        <CSSTransition
          key="menu"
          in={isOpen}
          timeout={200}
          classNames="overlay"
        >
          <div key="11" class={s.menuOverlay}>
            <a href="javascript:;" class={s.close} onClick={onClose}>
              <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#5F5F5F" fill-rule="evenodd"><path d="M.548 3.19A1.868 1.868 0 1 1 3.189.546L25.201 22.56a1.868 1.868 0 0 1-2.642 2.642L.548 3.189z"/><path d="M3.19 25.2A1.868 1.868 0 0 1 .547 22.56L22.558.547A1.868 1.868 0 1 1 25.2 3.19L3.19 25.201z"/></g></svg>
            </a>

            <div class={cx(s.content)}>
              {children}
            </div>
          </div>
        </CSSTransition>
    )
  }
}