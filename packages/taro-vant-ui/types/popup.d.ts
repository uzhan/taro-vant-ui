import { ComponentClass, CSSProperties } from 'react'
import * as TvComponent from './base.d'

export interface TvPopupState {
  display: boolean
}

export interface TvPopupProps extends TvComponent {
  /**
   * 是否显示弹出层
   * @default false
   */
  show?: boolean
  /**
   * z-index 层级
   * @default 100
   */
  zIndex?: number
  /**
   * 是否显示遮罩层
   * @default false
   */
  overlay?: boolean
  /**
   * 弹出位置，可选值为 top bottom right left center
   * @default 'center'
   */
  position?: 'top' | 'center' | 'right' | 'left' | 'bottom'
  /**
   * 动画时长，单位为毫秒
   * @default 300
   */
  duration?: number
  /**
   * 是否显示圆角
   * @default false
   */
  round?: boolean
  /**
   * 自定义遮罩层样式
   */
  overlayStyle?: CSSProperties
  /**
   * 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * 是否显示关闭图标
   * @default false
   */
  closeable?: boolean
  /**
   * 关闭图标名称或图片链接
   * @default 'cross'
   */
  closeIcon?: string
  /**
   * 关闭图标位置，可选值为top-left bottom-left bottom-right top-right
   * @default "top-right"
   */
  closeIconPosition?: 'top-left' | 'bottom-left' | 'bottom-right' | 'top-right'
  /**
   * 是否为 iPhoneX 留出底部安全距离
   * @default true
   */
  safeAreaInsetBottom?: boolean
  /**
   * 是否留出顶部安全距离（状态栏高度）
   * @default false
   */
  safeAreaInsetTop?: boolean
  /**
   * 是否锁定背景滚动
   * @default true
   */
  lockScroll?: boolean
  /**
   * 关闭弹出层时触发
   */
  onClose?: () => void
  /**
   * 点击遮罩层时触发
   */
  onClickOverlay?: () => void
  /**
   * 进入前触发
   */
  onOpen?: () => void
  /**
   * 进入后触发
   */
  onOpend?: () => void
  /**
   * 关闭弹出层后触发
   */
  onClosed?: () => void
}

declare const TvPopup: ComponentClass<TvPopupProps>
export default TvPopup
