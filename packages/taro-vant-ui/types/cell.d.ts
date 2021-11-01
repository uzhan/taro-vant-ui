import { CSSProperties, ComponentClass } from 'react'
import TvComponent from './base'

export interface TvCellProps extends TvComponent {
  /**
   * 左侧标题
   */
  title?: string | number
  /**
   * 标题宽度，须包含单位
   */
  titleWidth?: string
  /**
   * 右侧内容
   */
  value?: string | number
  /**
   * 标题下方的描述信息
   */
  label?: string
  /**
   * 单元格大小，可选值为 large
   */
  size?: 'large'
  /**
   * 左侧图标名称或图片链接
   */
  icon?: string
  /**
   * 点击后跳转的链接地址
   */
  url?: string
  /**
   * 是否使内容垂直居中
   */
  center?: boolean
  /**
   * 是否显示下边框
   */
  border?: boolean
  /**
   * 链接跳转类型，可选值为 redirect switchTab reLaunch navigate
   */
  linkType?: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch'
  /**
   * 是否开启点击反馈
   */
  clickable?: boolean
  /**
   * 是否展示右侧箭头并开启点击反馈
   */
  isLink?: boolean
  /**
   * 是否显示表单必填星号
   */
  required?: boolean
  /**
   * 箭头方向，可选值为 left up down
   */
  arrowDirection?: 'left' | 'up' | 'down'
  /**
   * 标题样式
   */
  titleStyle?: CSSProperties
  /**
   * 点击时触发
   */
  onClick?: () => void
}

declare const TvCell: ComponentClass<TvCellProps>

export default TvCell
