import { ComponentClass } from 'react'
import { TvComponent } from './base.d'

export interface TvTransitionProps extends TvComponent {
  /**
   * 是否展示组件
   * @default true
   */
  show?: boolean
  /**
   * 动画时长，单位为毫秒
   * @default 300
   */
  duration?: number | { enter: number; leave: number }
  /**
   * 动画类型
   * @default fade
   */
  name?: string
  /**
   * 进入前触发
   */
  onBeforeEnter?: () => void
  /**
   * 进入中触发
   */
  onEnter?: () => void
  /**
   * 进入后触发
   */
  onAfterEnter?: () => void
  /**
   * 离开前触发
   */
  onBeforeLeave?: () => void
  /**
   * 离开中触发
   */
  onLeave?: () => void
  /**
   * 离开后触发
   */
  onAfterLeave?: () => void
  /**
   * 点击按钮时触发
   */
  onClick?: () => void
  /**
   * 触摸事件
   */
  onTouchMove?: () => void
}

export interface TvTransitionState {
  type: string
  inited: boolean
  display: boolean
  classes: string
  currentDuration?: number
  status: string
  transitionEnded: boolean
}

declare const TvTransition: ComponentClass<TvTransitionProps>

export default TvTransition
