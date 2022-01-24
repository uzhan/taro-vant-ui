import { ComponentClass } from 'react'

import * as TvComponent from './base'

export interface TvSwiperProps extends TvComponent {
  /**
   * 自动轮播间隔，单位为 ms
   */
  autoplay?: number | string
  /**
   * 动画时长，单位为 ms
   * @default 500
   */
  duration: number | string
  /**
   * 滑块宽度，单位为 px
   * @default auto
   */
  width: number | string
  /**
   * 滑块高度，单位为 px
   * @default auto
   */
  height: number | string
  /**
   * 轮播方向，可选值为 vertical
   * @default horizontal
   */
  direction: 'vertical' | 'horizontal'
  /**
   * 是否可以通过手势滑动
   * @default true
   */
  touchable: boolean
  /**
   * 是否阻止滑动事件冒泡
   * @default true
   */
  stopPropagation: boolean
  /**
   * 每一页轮播结束后触发
   * @param {number} index 当前页的索引
   */
  onChange?: (index: number) => void
}

declare const TvSwiper: ComponentClass<TvSwiperProps>

export default TvSwiper
