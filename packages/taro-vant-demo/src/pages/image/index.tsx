import React from 'react'
import { TvImage, TvRow, TvCol, TvLoading } from 'taro-vant-ui'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Image extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='layout'>
        <View className='block'>
          <View className='title'>基础用法</View>
          <TvImage
            width={80}
            height={80}
            src='https://img01.yzcdn.cn/vant/cat.jpeg'
          />
        </View>
        <View className='block'>
          <View className='title'>填充模式</View>
          <TvRow wrap gutter={32}>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='contain'
              />
              <View className='tip'>contain</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='cover'
              />
              <View className='tip'>cover</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='fill'
              />
              <View className='tip'>fill</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='none'
              />
              <View className='tip'>none</View>
            </TvCol>
          </TvRow>
        </View>
        <View className='block'>
          <View className='title'>圆形图片</View>
          <TvRow wrap gutter={32}>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='contain'
                round
              />
              <View className='tip'>contain</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='cover'
                round
              />
              <View className='tip'>cover</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='fill'
                round
              />
              <View className='tip'>fill</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='https://img01.yzcdn.cn/vant/cat.jpeg'
                fit='none'
                round
              />
              <View className='tip'>none</View>
            </TvCol>
          </TvRow>
        </View>
        <View className='block'>
          <View className='title'>加载中提示</View>
          <TvRow wrap gutter={32}>
            <TvCol span={8}>
              <TvImage width={80} height='80px' src='' showLoading />
              <View className='tip'>默认</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src=''
                showLoading
                loadingContent={<TvLoading type='spinner' size={20} />}
              />
              <View className='tip'>自定义</View>
            </TvCol>
          </TvRow>
        </View>
        <View className='block'>
          <View className='title'>加载失败</View>
          <TvRow wrap gutter={32}>
            <TvCol span={8}>
              <TvImage width={80} height='80px' src='x' showError />
              <View className='tip'>默认</View>
            </TvCol>
            <TvCol span={8}>
              <TvImage
                width={80}
                height='80px'
                src='x'
                showError
                errorContent={<Text>加载失败</Text>}
              />
              <View className='tip'>自定义</View>
            </TvCol>
          </TvRow>
        </View>
      </View>
    )
  }
}
