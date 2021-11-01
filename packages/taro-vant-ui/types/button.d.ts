import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { ButtonProps } from '@tarojs/components/types/Button'

import * as TvComponent from './base'

type TaroButtonProps = Pick<
  ButtonProps,
  | 'formType'
  | 'openType'
  | 'lang'
  | 'sessionFrom'
  | 'sendMessageTitle'
  | 'sendMessagePath'
  | 'sendMessageImg'
  | 'showMessageCard'
  | 'appParameter'
  | 'onContact'
  | 'onGetUserInfo'
  | 'onGetPhoneNumber'
  | 'onOpenSetting'
  | 'onError'
>

export interface TvButtonProps extends TvComponent, TaroButtonProps {
  /**
   * 按钮的大小
   * @default 'normal'
   */
  size?: 'large' | 'normal' | 'small' | 'mini'
  /**
   * 按钮的类型
   */
  type?: 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info'
  /**
   * 设置按钮圆角
   * @default false
   */
  circle?: boolean
  /**
   * 设置loading icon样式
   * @default 'circular'
   */
  loadingType?: 'circular' | 'spinner'
  /**
   * 朴素按钮
   * @default false
   */
  plain?: boolean
  /**
   * 设置loading icon颜色
   */
  loadingColor?: string
  /**
   * 是否通栏样式（即按钮宽度为屏幕宽度时的样式）
   * @default false
   */
  full?: boolean
  /**
   * 设置按钮的载入状态
   * @default false
   */
  loading?: boolean
  /**
   * 设置按钮为禁用态（不可点击）
   * @default false
   */
  disabled?: boolean
  /**
   * 点击按钮时触发
   */
  onClick?: CommonEventFunction
}

export interface TvButtonState {
  isWEB: boolean
  isWEAPP: boolean
  isALIPAY: boolean
}

declare const TvButton: ComponentClass<TvButtonProps>

export default TvButton
