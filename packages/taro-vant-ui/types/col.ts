import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import TvComponent from './base'

export interface TvColProps extends TvComponent {
  /**
   * 列元素宽度
   */
  span?: number
  /**
   * 列元素偏移距离
   */
  offset?: number
  /**
   * 点击事件
   */
  onClick?: CommonEventFunction
}

declare const TvCol: ComponentClass<TvColProps>

export default TvCol
