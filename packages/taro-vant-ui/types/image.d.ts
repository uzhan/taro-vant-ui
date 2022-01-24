import { CommonEvent, CommonEventFunction } from '@tarojs/components'
import React, { ComponentClass } from 'react'
import * as TvComponent from './base.d'

export interface TvImageProps extends TvComponent {
  /**
   * 图片链接
   */
  src: string
  /**
   * 图片填充模式
   * @default fill
   */
  fit?: 'fill' | 'contain' | 'cover' | 'widthFix' | 'heightFix' | 'none'
  /**
   * 替代文本
   */
  alt?: string
  /**
   * 宽度，默认单位为px
   */
  width?: string | number
  /**
   * 高度，默认单位为px
   */
  height?: string | number
  /**
   * 圆角大小，默认单位为px
   * @default 0
   */
  radius?: string | number
  /**
   * 是否显示为圆形
   * @default false
   */
  round?: boolean
  /**
   * 是否懒加载
   * @default false
   */
  lazyLoad?: boolean
  /**
   * 是否展示图片加载失败提示
   * @default true
   */
  showError?: boolean
  /**
   * 是否展示图片加载中提示
   * @default true
   */
  showLoading?: boolean
  /**
   * 是否开启长按图片显示识别小程序码菜单
   * @default false
   */
  showMenuByLongpress?: boolean
  /**
   * 自定义加载失败时的提示内容
   */
  errorContent?: string | React.ReactNode
  /**
   * 自定义加载中的提示内容
   */
  loadingContent?: string | React.ReactNode
  /**
   * 点击图片时触发
   */
  onClick?: CommonEventFunction
  /**
   * 图片加载完毕时触发
   */
  onLoad?: (event?: CommonEvent) => void
  /**
   * 图片加载失败时触发
   */
  onError?: (event?: CommonEvent) => void
}

export interface TvImageState {
  loading: boolean
  error: boolean
}

declare const TvImage: ComponentClass<TvImageProps>

export default TvImage
