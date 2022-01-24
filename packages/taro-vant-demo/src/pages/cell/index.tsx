import React from 'react'
import { View } from '@tarojs/components'
import { TvCell, TvCellGroup } from 'taro-vant-ui'
import './index.less'

export default class Index extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidHide() {}

  render() {
    return (
      <View className='cell'>
        <View className='block'>
          <View className='title'>基础用法</View>
          <TvCell title='单元格' value='内容'></TvCell>
          <TvCell title='单元格' value='内容' label='描述信息'></TvCell>
        </View>
        <View className='block'>
          <View className='title'>卡片分格</View>
          <TvCellGroup title='分组标题' inset border>
            <TvCell title='单元格' value='内容'></TvCell>
            <TvCell title='单元格' value='内容' label='描述信息'></TvCell>
          </TvCellGroup>
        </View>
        <View className='block'>
          <View className='title'>单元格大小</View>
          <TvCell title='单元格' value='内容' size='large'></TvCell>
          <TvCell
            title='单元格'
            value='内容'
            label='描述信息'
            size='large'
          ></TvCell>
        </View>
        <View className='block'>
          <View className='title'>展示图标</View>
          <TvCell icon='chat' title='单元格' value='内容'></TvCell>
        </View>
        <View className='block'>
          <View className='title'>展示箭头</View>
          <TvCell
            title='箭头right'
            url='/pages/index/index'
            linkType='navigate'
            isLink
          ></TvCell>
          <TvCell
            title='箭头up'
            url='/pages/index/index'
            linkType='navigate'
            isLink
            arrowDirection='up'
          ></TvCell>
          <TvCell
            title='箭头left'
            url='/pages/index/index'
            linkType='navigate'
            isLink
            arrowDirection='left'
          ></TvCell>
          <TvCell
            title='箭头down'
            url='/pages/index/index'
            linkType='navigate'
            isLink
            arrowDirection='down'
          ></TvCell>
        </View>
        <View className='block'>
          <View className='title'>页面导航</View>
          <TvCell
            title='URL跳转'
            url='/pages/index/index'
            linkType='redirect'
            isLink
          ></TvCell>
          <TvCell
            title='路由跳转'
            url='/pages/index/index'
            linkType='navigate'
            isLink
          ></TvCell>
        </View>
        <View className='block'>
          <View className='title'>垂直居中</View>
          <TvCell title='单元格' value='内容' label='描述信息' center></TvCell>
        </View>
      </View>
    )
  }
}
