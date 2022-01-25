import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { TvComponent } from './base'

export interface TvIconProps extends TvComponent {
  /**
   * 图标名称或图片链接
   */
  name?: string
  /**
   * 是否显示图标右上角小红点
   */
  dot?: boolean
  /**
   * 图标右上角文字提示
   */
  info?: string | number
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 图标大小，如 20px，2em
   */
  size?: string
  /**
   * 类名前缀
   */
  classPrefix?: string
  /**
   * 点击按钮时触发
   */
  onClick?: CommonEventFunction
}

declare const TvIcon: ComponentClass<TvIconProps>

export default TvIcon
