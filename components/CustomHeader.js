import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Header, Left, Body, Icon, Right, Title } from "native-base";

import Colors from "../common/Colors";

/*
props.title
props.color
props.isHeader
props.onLeftIconClick
*/
const CustomHeader = (props) => {
  console.log(props.color);
  if (!props.isHeader) {
    return (
      <Header
        androidStatusBarColor={props.color}
        style={{
          backgroundColor: props.color,
        }}
      >
        <Left>
          <TouchableOpacity
            style={{ padding: 7 }}
            onPress={props.onLeftIconClick}
          >
            <Icon
              name="ios-arrow-back"
              style={{ fontSize: 25, color: props.textColor }}
            />
          </TouchableOpacity>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title
            style={{
              color: props.textColor,
            }}
          >
            {props.title}
          </Title>
        </Body>
      </Header>
    );
  }

  return (
    <Header
      androidStatusBarColor={props.color}
      style={{
        backgroundColor: props.color,
      }}
    >
      <Left>
        <TouchableOpacity
          style={{ padding: 7 }}
          onPress={props.onLeftIconClick}
        >
          <Icon name="menu" style={{ fontSize: 25, color: props.textColor }} />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title
          style={{
            color: props.textColor,
          }}
        >
          {props.title}
        </Title>
      </Body>
      <Right>
        <TouchableOpacity>
          <Icon
            name="notifications"
            style={{ fontSize: 25, color: props.textColor }}
          />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({});

export default CustomHeader;
