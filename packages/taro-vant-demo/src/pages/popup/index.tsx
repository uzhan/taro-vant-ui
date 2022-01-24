import React from "react";
import { TvCellGroup, TvCell, TvPopup } from "taro-vant-ui";
import { View } from "@tarojs/components";
import "./index.less";

interface PopupState {
  show: boolean;
  position?: string;
  round: boolean;
  closeable: boolean;
  closeIconPosition?: string;
}

export default class Popup extends React.Component<unknown, PopupState> {
  state: PopupState = {
    show: false,
    position: "center",
    round: false,
    closeable: false,
    closeIconPosition: "top-right"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toggle(
    show?: boolean,
    position?: string,
    round?: boolean,
    closeable?: boolean,
    closeIconPosition?: string
  ) {
    this.setState({
      show,
      position,
      round,
      closeable,
      closeIconPosition
    });
  }

  render() {
    const { show, position, round, closeable, closeIconPosition } = this.state;
    return (
      <View className="popup">
        <View className="block">
          <View className="title">基础用法</View>
          <TvCell title="展示弹出层" isLink onClick={() => this.toggle(true)} />
        </View>
        <View className="block">
          <View className="title">弹出位置</View>
          <TvCellGroup>
            <TvCell
              title="顶部弹出"
              isLink
              onClick={() => this.toggle(true, "top")}
            />
            <TvCell
              title="底部弹出"
              isLink
              onClick={() => this.toggle(true, "bottom")}
            />
            <TvCell
              title="左侧弹出"
              isLink
              onClick={() => this.toggle(true, "left")}
            />
            <TvCell
              title="右侧弹出"
              isLink
              onClick={() => this.toggle(true, "right")}
            />
          </TvCellGroup>
        </View>
        <View className="block">
          <View className="title">关闭图标</View>
          <TvCellGroup>
            <TvCell
              title="关闭图标"
              isLink
              onClick={() =>
                this.toggle(true, "bottom", false, true, undefined)
              }
            />
            <TvCell
              title="自定义图标"
              isLink
              onClick={() =>
                this.toggle(true, "bottom", false, true, undefined)
              }
            />
            <TvCell
              title="图标位置"
              isLink
              onClick={() =>
                this.toggle(true, "bottom", false, true, "top-left")
              }
            />
          </TvCellGroup>
        </View>
        <View className="block">
          <View className="title">圆角弹窗</View>
          <TvCell
            title="圆角弹窗"
            isLink
            onClick={() => this.toggle(true, "bottom", true, true, undefined)}
          />
        </View>
        <TvPopup
          show={show}
          position={position}
          round={round}
          closeable={closeable}
          closeIcon="close"
          closeIconPosition={closeIconPosition}
          customStyle={{
            height: "30%",
            width: "100%"
          }}
          onClickOverlay={() =>
            this.toggle(false, position, round, closeable, closeIconPosition)
          }
        >
          内容
        </TvPopup>
      </View>
    );
  }
}
