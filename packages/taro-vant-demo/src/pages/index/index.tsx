import React from 'react'
import { TvCellGroup, TvCell } from 'taro-vant-ui'
import { View } from '@tarojs/components'
import './index.less'

export default class Popup extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View className='block'>
          <View className='title'>基础组件</View>
          <TvCellGroup>
            <TvCell
              title='Button 按钮'
              isLink
              url='/pages/button/index'
            ></TvCell>
            <TvCell title='Cell 单元格' isLink url='/pages/cell/index'></TvCell>
            <TvCell title='Icon 图标' isLink url='/pages/icon/index'></TvCell>
            <TvCell title='Image 图片' isLink url='/pages/image/index'></TvCell>
            <TvCell
              title='Layout 布局'
              isLink
              url='/pages/layout/index'
            ></TvCell>
            <TvCell
              title='Popup 弹出层'
              isLink
              url='/pages/popup/index'
            ></TvCell>
            <TvCell
              title='Toast 轻提示'
              isLink
              url='/pages/toast/index'
            ></TvCell>
          </TvCellGroup>
        </View>
        <View className='block'>
          <View className='title'>反馈组件</View>
          <TvCellGroup>
            <TvCell
              title='Overlay 遮罩层'
              isLink
              url='/pages/overlay/index'
            ></TvCell>
          </TvCellGroup>
        </View>
        {/* <View className='block'>
          <View className='title'>关闭图标</View>
          <TvCellGroup>
            <TvCell title='关闭图标' isLink></TvCell>
            <TvCell title='自定义图标' isLink></TvCell>
            <TvCell title='图标位置' isLink></TvCell>
          </TvCellGroup>
        </View>
        <View className='block'>
          <View className='title'>圆角弹窗</View>
          <TvCell title='圆角弹窗' isLink></TvCell>
        </View> */}
      </View>
    )
  }
}
