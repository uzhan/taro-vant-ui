import React from "react";
import { View } from "@tarojs/components";
import { TvButton, TvTransition } from "taro-vant-ui";
import "./index.less";

export default class Index extends React.Component {
  state = {
    show: false,
    name: "fade",
  };

  trigger(name) {
    this.setState({ name, show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 500);
  }

  render(): JSX.Element {
    return (
      <View className="tv-demo__button tv-demo__doc">
        <TvButton type="primary" onClick={() => this.trigger("fade-up")}>
          primary
        </TvButton>
        <TvButton type="primary" onClick={() => this.trigger("slide-left")}>
          primary
        </TvButton>
        <TvButton type="primary" onClick={() => this.trigger("slide-right")}>
          primary
        </TvButton>
        <TvTransition>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut
          dolores assumenda soluta, velit deserunt accusantium mollitia dolorum
          asperiores atque veritatis, eos numquam architecto, cupiditate
          repudiandae! Libero velit aliquam architecto?
        </TvTransition>
        <TvTransition
          className="block"
          show={this.state.show}
          name={this.state.name}
          duration={{ enter: 300, leave: 1000 }}
        ></TvTransition>
      </View>
    );
  }
}
