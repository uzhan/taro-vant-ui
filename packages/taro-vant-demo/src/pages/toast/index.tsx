import React from 'react'
import { View } from '@tarojs/components'
import { TvButton, TvToast } from 'taro-vant-ui'
// import "./index.less";

export default class Index extends React.Component {
  state = {
    show: false,
    message: '',
    type: 'text',
    mask: false,
    forbidClick: true,
    duration: 2000
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClickShow() {
    this.setState({ show: true, message: '文字提示' })
  }
  handleClickShowLoading() {
    this.setState(
      {
        show: true,
        message: '加载中...',
        type: 'loading',
        duration: 0,
        mask: true
      },
      () => {
        setTimeout(() => this.setState({ show: false, duration: 2000 }), 4000)
      }
    )
  }
  handleClickShowSucc() {
    this.setState({ show: true, message: '成功', type: 'success' })
  }
  handleClickShowError() {
    this.setState({ show: true, message: '失败', type: 'fail' })
  }
  handleClickHideEmbedded() {
    this.setState({ showEmbedded: true })
  }

  noop() {}

  render() {
    return (
      <View className='toast'>
        <View className='block'>
          <View className='title'>基础用法</View>
          <TvButton onClick={this.handleClickShow.bind(this)}>
            文字提示
          </TvButton>
          <TvButton onClick={this.handleClickShowLoading.bind(this)}>
            加载提示
          </TvButton>
          <TvButton onClick={this.handleClickShowSucc.bind(this)}>
            成功提示
          </TvButton>
          <TvButton onClick={this.handleClickShowError.bind(this)}>
            失败提示
          </TvButton>
        </View>
        <TvToast {...this.state} />
      </View>
    )
  }
}
