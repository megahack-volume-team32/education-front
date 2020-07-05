import React from "react";
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";
import { Image } from "react-native";

import { Icon, Text, Container, Content, View } from "native-base";

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

const CustomDrawerComponent = (props) => {
  return (
    <Container>
      <Content>
        <View
          style={{
            height: 150,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 120, width: 120, borderRadius: 60 }}
            source={{
              uri:
                "data:image/jpeg;base64,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",
            }}
          />
        </View>
        <DrawerItems {...props} />
      </Content>
    </Container>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
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
  },
  {
    contentComponent: CustomDrawerComponent,
  }
);

const InitialStackNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Drawer: { screen: DrawerNavigator },
});

export default createAppContainer(InitialStackNavigator);
