import { ComponentClass } from 'react'
import TvComponent from './base'

export interface TvLoadingProps extends TvComponent {
  /**
   * 加载图标大小，默认单位为 px
   * @default 30px
   */
  size?: string | number
  /**
   * 颜色
   * @default '#c9c9c9'
   */
  color?: string
  /**
   * 类型，可选值为 spinner circular
   * @default circular
   */
  type?: 'spinner' | 'circular'
  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean
  /**
   * 文字大小，默认单位为为 px
   * @default 14
   */
  textSize?: string | number
}

declare const TvLoading: ComponentClass<TvLoadingProps>

export default TvLoading
