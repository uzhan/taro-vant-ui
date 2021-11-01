import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import TvIcon from '../icon'
import TvOverlay from '../overlay'
import TvTransition from '../transition/index'
import { TvPopupProps } from '../../../types/popup'

const toTransactionName = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-left',
  right: 'slide-right',
  center: 'fade'
}

export default class TvPopup extends React.Component<TvPopupProps> {
  public static defaultProps: TvPopupProps
  public static propTypes: InferProps<TvPopupProps>

  private onClickOverlay() {
    this.props.onClickOverlay && this.props.onClickOverlay()
  }

  private onClickClose() {
    this.props.onClose && this.props.onClose()
  }

  public render(): JSX.Element {
    const {
      show,
      zIndex,
      overlayStyle,
      overlay,
      duration,
      lockScroll,
      closeIcon,
      closeable,
      position,
      round,
      safeAreaInsetBottom,
      safeAreaInsetTop,
      closeIconPosition,
      className,
      customStyle,
      onOpen,
      onOpend,
      onClosed
    } = this.props
    const rootClassName = 'tv-popup'
    const classObject = {
      [`${rootClassName}--${position}`]: position,
      [`${rootClassName}--round`]: round,
      [`${rootClassName}--safe`]: safeAreaInsetBottom,
      [`${rootClassName}--safeTop`]: safeAreaInsetTop
    }

    const overlayComponent = (
      <TvOverlay
        show={show}
        zIndex={zIndex}
        duration={duration}
        customStyle={overlayStyle}
        onClick={this.onClickOverlay.bind(this)}
        lockScroll={lockScroll}
      />
    )

    return (
      <React.Fragment>
        {overlay && overlayComponent}
        <TvTransition
          show={show}
          duration={duration}
          onAfterLeave={onClosed && onClosed}
          onLeave={this.onClickClose.bind(this)}
          onEnter={onOpen && onOpen}
          onAfterEnter={onOpend && onOpend}
          className={classNames(rootClassName, classObject, className)}
          name={toTransactionName[position as string]}
          customStyle={{
            zIndex: (zIndex as number) + 1,
            ...customStyle
          }}
        >
          {this.props.children}
          {closeable && (
            <TvIcon
              onClick={this.onClickClose.bind(this)}
              name={closeIcon}
              className={`tv-popup__close-icon tv-popup__close-icon--${closeIconPosition}`}
            />
          )}
        </TvTransition>
      </React.Fragment>
    )
  }
}

TvPopup.defaultProps = {
  overlay: true,
  show: false,
  position: 'center',
  duration: 300,
  zIndex: 100,
  round: false,
  lockScroll: true,
  closeable: false,
  closeIcon: 'cross',
  closeIconPosition: 'top-right',
  safeAreaInsetBottom: true,
  safeAreaInsetTop: true
}

TvPopup.propTypes = {
  show: PropTypes.bool,
  zIndex: PropTypes.number,
  overlay: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'center', 'right', 'left', 'bottom']),
  duration: PropTypes.number,
  round: PropTypes.bool,
  overlayStyle: PropTypes.object,
  closeOnClickOverlay: PropTypes.bool,
  closeable: PropTypes.bool,
  closeIcon: PropTypes.string,
  closeIconPosition: PropTypes.oneOf([
    'top-left',
    'bottom-left',
    'bottom-right',
    'top-right'
  ]),
  safeAreaInsetBottom: PropTypes.bool,
  safeAreaInsetTop: PropTypes.bool,
  lockScroll: PropTypes.bool,
  onClose: PropTypes.func,
  onClickOverlay: PropTypes.func,
  onOpen: PropTypes.func,
  onOpend: PropTypes.func,
  onClosed: PropTypes.func
}
