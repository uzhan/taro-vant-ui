import React from 'react'
import { View } from '@tarojs/components'
import { TvButton } from 'taro-vant-ui'
import './index.less'

export default class Index extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='button'>
        <View className='block'>
          <View className='title'>按钮类型</View>
          <TvButton>default</TvButton>
          <TvButton type='primary'>primary</TvButton>
          <TvButton type='warning'>warning</TvButton>
          <TvButton type='danger'>danger</TvButton>
          <TvButton type='info'>info</TvButton>
        </View>
        <View className='block'>
          <View className='title'>朴素按钮</View>
          <TvButton type='primary' plain>
            primary
          </TvButton>
          <TvButton type='warning' plain>
            warning
          </TvButton>
        </View>
        <View className='block'>
          <View className='title'>禁用状态</View>
          <TvButton type='primary' disabled>
            disabled
          </TvButton>
          <TvButton type='danger' disabled>
            disabled
          </TvButton>
        </View>
        <View className='block'>
          <View className='title'>加载状态</View>
          <TvButton
            type='primary'
            loading
            loadingType='circular'
            onClick={() => console.log(1)}
          ></TvButton>
          <TvButton type='primary' loading loadingType='circular'>
            circular
          </TvButton>
          <TvButton type='primary' loading loadingType='spinner'>
            spinner
          </TvButton>
        </View>
        <View className='block'>
          <View className='title'>按钮形状</View>
          <TvButton type='primary'>方块</TvButton>
          <TvButton type='info' circle>
            圆角
          </TvButton>
        </View>
        <View className='block'>
          <View className='title'>按钮形状</View>
          <TvButton type='primary' size='large'>
            large
          </TvButton>
          <TvButton type='primary' size='normal'>
            normal
          </TvButton>
          <TvButton type='primary' size='small'>
            small
          </TvButton>
          <TvButton type='primary' size='mini'>
            mini
          </TvButton>
        </View>
      </View>
    )
  }
}
