import React, { Component } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import TvTransition from '../transition/index'
import { TvOverlayProps } from '../../../types/overlay'

export default class TvOverlay extends Component<TvOverlayProps> {
  public static defaultProps: TvOverlayProps
  public static propTypes: InferProps<TvOverlayProps>

  // for prevent touchmove
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onNoop() {}

  private onClick() {
    this.props.onClick && this.props.onClick()
  }

  public render() {
    const { show, lockScroll, zIndex, customStyle, duration } = this.props

    return (
      <React.Fragment>
        {lockScroll ? (
          <TvTransition
            show={show}
            className='tv-overlay'
            duration={duration}
            customStyle={{ zIndex, ...customStyle }}
            onClick={this.onClick.bind(this)}
            onTouchMove={this.onNoop.bind(this)}
          >
            {this.props.children}
          </TvTransition>
        ) : (
          <TvTransition
            show={show}
            className='tv-overlay'
            duration={duration}
            customStyle={{ zIndex, ...customStyle }}
            onClick={this.onClick.bind(this)}
          >
            {this.props.children}
          </TvTransition>
        )}
      </React.Fragment>
    )
  }
}

TvOverlay.defaultProps = {
  show: false,
  duration: 300,
  zIndex: 1,
  lockScroll: true
}

TvOverlay.propTypes = {
  show: PropTypes.bool,
  duration: PropTypes.number,
  zIndex: PropTypes.number,
  lockScroll: PropTypes.bool,
  onClick: PropTypes.func
}
