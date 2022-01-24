import React from 'react'
// import classNames from 'classnames'
import PropeTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import { TvSwiperProps } from '../../../types/swiper'

export default class TvSwiper extends React.Component {
  public static defaultProps: TvSwiperProps
  public static propeTypes: InferProps<TvSwiperProps>

  public render(): React.ReactNode {
    return <View className='tv-swiper'>1</View>
  }
}

TvSwiper.defaultProps = {
  duration: 500,
  width: 'auto',
  height: 'auto',
  direction: 'horizontal',
  touchable: true,
  stopPropagation: true
}

TvSwiper.propeTypes = {
  autoplay: PropeTypes.oneOfType([PropeTypes.string, PropeTypes.number]),
  duration: PropeTypes.number,
  width: PropeTypes.oneOfType([PropeTypes.string, PropeTypes.number]),
  height: PropeTypes.oneOfType([PropeTypes.string, PropeTypes.number]),
  direction: PropeTypes.oneOf(['vertical', 'horizontal']),
  touchable: PropeTypes.bool,
  stopPropagation: PropeTypes.bool,
  onChange: PropeTypes.func
}
