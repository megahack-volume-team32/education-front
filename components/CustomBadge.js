import React from "react";

import { StyleSheet, Dimensions } from "react-native";

import { View, Badge, Icon } from "native-base";
import Colors from "../common/Colors";

const CustomBadge = (props) => {
  let icon = {
    name: "ios-medal",
    style: { color: "white", fontSize: 50 },
    backgroundColor: "#000",
  };

  switch (props.bType) {
    case 1:
      icon = {
        name: "ios-trophy",
        style: { color: Colors.darkest, fontSize: 32 },
        backgroundColor: "#ffbf00",
      };
      break;
    case 2:
      icon = {
        name: "ios-medal",

        style: { color: Colors.lightest, fontSize: 32 },
        backgroundColor: "#965000",
      };
      break;
    case 3:
      icon = {
        name: "ios-boat",
        style: { color: Colors.lightest, fontSize: 32 },
        backgroundColor: Colors.blue,
      };
      break;
    case 4:
      icon = {
        name: "ios-trending-up",
        style: { color: Colors.lightest, fontSize: 32 },
        backgroundColor: "#50c878",
      };
      break;
    default:
      icon = {
        name: "ios-star",
        style: { color: Colors.lightest },
        backgroundColor: "#b87333 ",
      };
  }

  return (
    <Badge
      style={{
        backgroundColor: icon.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        marginHorizontal: 3,
        borderRadius: 50,
        elevation: 3,
      }}
    >
      <Icon name={icon.name} style={icon.style} />
    </Badge>
  );
};

const styles = StyleSheet.create({});

export default CustomBadge;
