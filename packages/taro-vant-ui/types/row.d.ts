import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import * as TvComponent from './base.d'

export type RowAlign = 'top' | 'center' | 'bottom'

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

export interface TvRowProps extends TvComponent {
  /**
   * Flex 交叉轴对齐方式，可选值为 center bottom top
   * @default top
   */
  align?: RowAlign
  /**
   * Flex 主轴对齐方式，可选值为 end center space-around space-between start
   * @default start
   */
  justify?: RowJustify

  wrap?: boolean
  /**
   * 列元素之间的间距（单位为 px）
   */
  gutter?: number
  /**
   * 点击事件
   */
  onClick?: CommonEventFunction
}

declare const TvRow: ComponentClass<TvRowProps>

export default TvRow
