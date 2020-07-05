import React from "react";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { enableScreens } from "react-native-screens";
import { Root } from "native-base";

import Navigator from "./navigation/Navigator";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });
};

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  if (!isReady) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <Root>
      <Navigator />
    </Root>
  );
};

export default App;
