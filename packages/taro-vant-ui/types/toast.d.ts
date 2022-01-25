import { ComponentClass } from 'react'

import { TvComponent } from './base.d'

export interface TvToastState {
  /**
   * 是否显示
   * @default false
   */
  isOpened: boolean
}

export interface TvToastProps extends TvComponent {
  /**
   * 是否显示
   * @default false
   */
  show?: boolean
  /**
   * 提示类型，可选值为 text loading success fail ReactNode
   * @default text
   */
  type?: 'text' | 'loading' | 'success' | 'fail'
  /**
   * 位置，可选值为 top middle bottom
   * @default middle
   */
  position?: 'top' | 'middle' | 'bottom'
  /**
   * 内容
   */
  message: string
  /**
   * 是否显示遮罩层
   * @default false
   */
  mask?: boolean
  /**
   * 是否禁止背景点击
   * @default false
   */
  forbidClick?: boolean
  /**
   * 加载图标类型, 可选值为 spinner circular
   * @default circular
   */
  loadingType?: 'spinner' | 'circular'
  /**
   * z-index 层级
   * @default 1000
   */
  zIndex?: number
  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number
  /**
   * 关闭时的回调函数
   */
  onClose?: () => void
}

declare const TvToast: ComponentClass<TvToastProps>

export default TvToast
