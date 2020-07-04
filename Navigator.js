import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

const InitialStackNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
});

export default createAppContainer(InitialStackNavigator);
