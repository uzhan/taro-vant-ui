import React from "react";
import { View } from "@tarojs/components";
import { TvButton, TvOverlay } from "taro-vant-ui";
import Taro from "@tarojs/taro";
import "./index.less";

export default class Index extends React.Component {
  state = {
    show: false,
    showEmbedded: false,
  };
  componentWillMount() {
    Taro.getCurrentPages;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClickHide() {
    this.setState({ show: false });
  }
  handleClickHideEmbedded() {
    this.setState({ showEmbedded: false });
  }

  noop() {}

  render() {
    return (
      <View className="tv-demo__overlay tv-demo__doc">
        <View className="block">
          <View className="block-title">基础用法</View>
          <View className="item">
            <TvButton
              type="primary"
              onClick={() => this.setState({ show: true })}
            >
              显示遮罩层
            </TvButton>
            <TvOverlay
              show={this.state.show}
              onClick={this.handleClickHide.bind(this)}
            ></TvOverlay>
          </View>
        </View>
        <View className="block">
          <View className="block-title">嵌入内容</View>
          <View className="item">
            <TvButton
              type="primary"
              onClick={() => this.setState({ showEmbedded: true })}
            >
              嵌入内容
            </TvButton>
            <TvOverlay
              show={this.state.showEmbedded}
              onClick={this.handleClickHideEmbedded.bind(this)}
            >
              <View className="wrapper">
                <View
                  className="wrapper-box"
                  onTouchMove={this.noop.bind(this)}
                ></View>
              </View>
            </TvOverlay>
          </View>
        </View>
      </View>
    );
  }
}
