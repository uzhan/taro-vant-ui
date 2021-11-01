import { CSSProperties } from 'react'

export interface TvComponent {
  className?: string

  customStyle?: CSSProperties
}

export interface TvIconBaseProps2 extends TvComponent {
  value: string

  color?: string
}

export interface TvIconBaseProps extends TvComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default TvComponent
