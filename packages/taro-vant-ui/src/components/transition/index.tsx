import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { TvTransitionProps, TvTransitionState } from '../../../types/transition'
import { requestAnimationFrame, mergeStyle } from '../../common/utils'

const getClassNames = (name: string) => ({
  enter: `tv-${name}-enter tv-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `tv-${name}-enter-to tv-${name}-enter-active enter-to-class enter-active-class`,
  leave: `tv-${name}-leave tv-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `tv-${name}-leave-to tv-${name}-leave-active leave-to-class leave-active-class`
})

export default class TvTransition extends Component<
  TvTransitionProps,
  TvTransitionState
> {
  public static defaultProps: TvTransitionProps
  public static propTypes: InferProps<TvTransitionProps>

  public constructor(props: TvTransitionProps) {
    super(props)
    this.state = {
      status: '',
      transitionEnded: false,
      type: '',
      inited: false,
      display: false,
      classes: '',
      currentDuration: 300
    }
    if (this.props.show) this.observeShow(true)
  }

  public componentDidUpdate(prevProps: TvTransitionProps) {
    if (prevProps.show !== this.props.show)
      this.observeShow(this.props.show as boolean)
  }

  private observeShow(value: boolean) {
    value ? this.handleEnter() : this.handleLeave()
  }

  private handleEnter() {
    const { duration, name, onBeforeEnter, onEnter } = this.props
    const classNames = getClassNames(name as string)
    const currentDuration =
      typeof duration === 'object' ? duration.enter : duration
    this.setState(
      {
        status: 'enter'
      },
      () => {
        onBeforeEnter && onBeforeEnter()
        requestAnimationFrame(() => {
          if (this.state.status !== 'enter') return
          onEnter && onEnter()
          this.setState(
            {
              inited: true,
              display: true,
              classes: classNames.enter,
              currentDuration
            },
            () => {
              requestAnimationFrame(() => {
                if (this.state.status !== 'enter') return
                this.setState({
                  classes: classNames['enter-to'],
                  transitionEnded: false
                })
              })
            }
          )
        })
      }
    )
  }

  private handleLeave() {
    if (!this.state.display) return
    const { duration, name, onBeforeLeave, onLeave } = this.props
    const classNames = getClassNames(name as string)
    const currentDuration =
      typeof duration === 'object' ? duration.leave : duration
    this.setState(
      {
        status: 'leave'
      },
      () => {
        onBeforeLeave && onBeforeLeave()
        requestAnimationFrame(() => {
          if (this.state.status !== 'leave') return
          onLeave && onLeave()
          this.setState({ classes: classNames.leave, currentDuration }, () => {
            requestAnimationFrame(() => {
              if (this.state.status !== 'leave') return
              this.setState(
                { classes: classNames['leave-to'], transitionEnded: false },
                () => {
                  setTimeout(() => this.onTransitionEnd(), currentDuration)
                }
              )
            })
          })
        })
      }
    )
  }

  private onTransitionEnd() {
    if (this.state.transitionEnded) return
    this.setState(
      {
        transitionEnded: true
      },
      () => {
        if (this.state.status === 'enter')
          this.props.onAfterEnter && this.props.onAfterEnter()
        if (this.state.status === 'leave')
          this.props.onAfterLeave && this.props.onAfterLeave()
        const { display } = this.state
        if (!this.props.show && display) {
          this.setState({ display: false })
        }
      }
    )
  }

  private onTouchMove() {
    this.props.onTouchMove && this.props.onTouchMove()
  }

  private onClick() {
    this.props.onClick && this.props.onClick()
  }

  public render(): JSX.Element | null {
    const { customStyle } = this.props
    const { display, classes, currentDuration } = this.state

    const styleObject = {
      display: display ? 'block' : 'none',
      '-webkit-transition-duration': `${currentDuration}ms`,
      'transition-duration': `${currentDuration}ms`
    }

    return (
      <View
        className={classNames('tv-transition', classes, this.props.className)}
        style={mergeStyle(styleObject, customStyle as object)}
        onTransitionEnd={this.onTransitionEnd.bind(this)}
        onTouchMove={this.onTouchMove.bind(this)}
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </View>
    )
  }
}

TvTransition.defaultProps = {
  show: true,
  name: 'fade',
  duration: 300,
  customStyle: {}
}

TvTransition.propTypes = {
  show: PropTypes.bool,
  name: PropTypes.string,
  duration: PropTypes.number,
  onClick: PropTypes.func,
  onAfterEnter: PropTypes.func,
  onAfterLeave: PropTypes.func,
  onBeforeEnter: PropTypes.func,
  onBeforeLeave: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  onTouchMove: PropTypes.func
}
