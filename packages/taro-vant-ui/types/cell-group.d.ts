import { ComponentClass } from 'react'
import * as TvComponent from './base'

export interface TvCellGroupProps extends TvComponent {
  /**
   * 分组标题
   */
  title?: string
  /**
   * 是否展示为圆角卡片风格
   * @default false
   */
  inset?: boolean
  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean
}

declare const TvCellGroup: ComponentClass<TvCellGroupProps>

export default TvCellGroup
