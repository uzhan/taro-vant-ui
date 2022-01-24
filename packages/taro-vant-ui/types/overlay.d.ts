import { ComponentClass } from 'react'
import * as TvComponent from './base.d'

export interface TvOverlayProps extends TvComponent {
  /**
   * 是否展示遮罩层
   * @default false
   */
  show?: boolean
  /**
   * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   * @default true
   */
  lockScroll?: boolean
  /**
   * z-index 层级
   * @default 1
   */
  zIndex?: number
  /**
   * 动画时长，单位毫秒
   * @default 300
   */
  duration?: number
  /**
   * 点击按钮时触发
   */
  onClick?: () => void
}

declare const TvOverlay: ComponentClass<TvOverlayProps>

export default TvOverlay
