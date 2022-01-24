import React from "react";
import { TvRow, TvCol } from "taro-vant-ui";
import { View } from "@tarojs/components";
import "./index.less";

export default class Layout extends React.Component {
  render(): JSX.Element {
    return (
      <View className="layout">
        <View className="block">
          <View className="title">基础用法</View>
          <TvRow>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
          </TvRow>
          <TvRow>
            <TvCol className="dark" span={4}>
              span:4
            </TvCol>
            <TvCol className="light" span={10} offset={4}>
              offset: 4, span: 10
            </TvCol>
          </TvRow>
          <TvRow>
            <TvCol className="light" span={12} offset={12}>
              offset: 12, span: 12
            </TvCol>
          </TvRow>
        </View>
        <View className="block">
          <View className="title">在列元素之间增加间距</View>
          <TvRow gutter={16}>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
            <TvCol className="dark" span={8}>
              span:8
            </TvCol>
          </TvRow>
        </View>
        <View className="block">
          <View className="title">flex布局</View>
          <TvRow>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="light" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
          </TvRow>
          <TvRow justify="center">
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="light" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
          </TvRow>
          <TvRow justify="end">
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="light" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
          </TvRow>
          <TvRow justify="space-between">
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="light" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
          </TvRow>
          <TvRow justify="space-around">
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
            <TvCol className="light" span={6}>
              span:6
            </TvCol>
            <TvCol className="dark" span={6}>
              span:6
            </TvCol>
          </TvRow>
        </View>
      </View>
    );
  }
}
