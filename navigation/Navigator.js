import React from "react";
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";
import { Button, Alert } from "react-native";

import { Icon, Text } from "native-base";

import AchievementScreen from "../screens/AchievementScreen";

import Colors from "../common/Colors";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: "Cursos",
        tabBarColor: Colors.blue,
        tabBarLabel: <Text style={{ color: Colors.platinum }}>Cursos</Text>,
        tabBarIcon: <Icon name="ios-book" style={{ color: Colors.orange }} />,
      },
    },
    Achievement: {
      screen: AchievementScreen,
      navigationOptions: {
        title: "Habilidades",
        tabBarLabel: <Text style={{ color: Colors.blue }}>Habilidades</Text>,
        tabBarColor: Colors.platinum,
        tabBarIcon: <Icon name="ios-body" style={{ color: Colors.orange }} />,
      },
    },
  },
  {
    activeColor: Colors.lightest,
    shifting: true,
    barStyle: {
      backgroundColor: Colors.blue,
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen: TabNavigator,
  },
  Config: {
    screen: ConfigScreen,
    navigationOptions: { title: "sadasd", drawerLabel: "Configurações" },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: { drawerLabel: "Perfil" },
  },
});

const InitialStackNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Drawer: { screen: DrawerNavigator },
});

export default createAppContainer(InitialStackNavigator);
