import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text, Block } from '@tarojs/components'
import TvIcon from '../icon'
import TvLoading from '../loading'
import TvOverlay from '../overlay'
import TvTransition from '../transition'
import { TvToastProps, TvToastState } from '../../../types/toast'

export default class TvToast extends React.Component<
  TvToastProps,
  TvToastState
> {
  public static defaultProps: TvToastProps
  public static propTypes: InferProps<TvToastProps>

  private _timer: NodeJS.Timeout | null

  public constructor(props: TvToastProps) {
    super(props)
    const { show } = this.props
    this.state = {
      isOpened: show as boolean
    }
  }

  private clearTimer(): void {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  private makeTimer(duration: number): void {
    if (duration === 0) {
      return
    }
    this._timer = setTimeout(() => {
      this.onClose()
    }, +duration)
  }

  private onClose(): void {
    const { isOpened } = this.state
    if (isOpened) {
      this.setState(
        {
          isOpened: false
        },
        this.handleClose // TODO: Fix dirty hack
      )
      this.clearTimer()
    }
  }

  private handleClose(): void {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose()
    }
  }

  public componentDidUpdate(prvProps: TvToastProps): void {
    const { show, duration } = this.props
    if (prvProps.show !== show) {
      if (!show) {
        this.onClose()
        return
      }
      if (!this.state.isOpened) {
        this.setState({ isOpened: true })
      } else {
        this.clearTimer()
      }
      this.makeTimer(duration || 0)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private noop() {}

  public render(): JSX.Element {
    const { mask, message, forbidClick, zIndex, position, type, loadingType } =
      this.props
    const { isOpened } = this.state
    return (
      <React.Fragment>
        {mask || forbidClick ? (
          <TvOverlay
            show={isOpened}
            zIndex={zIndex}
            customStyle={{ backgroundColor: mask ? 'transparent' : 'unset' }}
          />
        ) : null}
        <TvTransition
          show={isOpened}
          customStyle={{ zIndex }}
          className='tv-toast__container'
        >
          <View
            className={`tv-toast tv-toast--${
              type === 'text' ? 'text' : 'icon'
            } tv-toast--${position}`}
            onTouchMove={this.noop.bind(this)}
          >
            {type === 'text' ? (
              <Text>{message}</Text>
            ) : (
              <Block>
                {type === 'loading' ? (
                  <TvLoading
                    color='white'
                    type={loadingType}
                    className='tv-toast__loading'
                  />
                ) : (
                  <TvIcon className='tv-toast__icon' name={type} />
                )}
                {message ? (
                  <Text className='tv-toast__text'>{message}</Text>
                ) : null}
              </Block>
            )}
            {this.props.children}
          </View>
        </TvTransition>
      </React.Fragment>
    )
  }
}

TvToast.defaultProps = {
  className: '',
  customStyle: {},
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 2000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular'
}

TvToast.propTypes = {
  type: PropTypes.oneOf(['text', 'loading', 'success', 'fail']),
  mask: PropTypes.bool,
  message: PropTypes.string,
  zIndex: PropTypes.number,
  duration: PropTypes.number,
  position: PropTypes.oneOf(['top', 'middle', 'bottom']),
  forbidClick: PropTypes.bool,
  loadingType: PropTypes.oneOf(['spinner', 'circular']),
  show: PropTypes.bool
}
