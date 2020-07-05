import React from "react";
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfigScreen from "../screens/ConfigScreen";
import CourseScreen from "../screens/CourseScreen";
import { Image } from "react-native";

import { Icon, Text, Container, Content, View, Button } from "native-base";
import { UsersSample } from "../data/SampleData";

import AchievementScreen from "../screens/AchievementScreen";

import Colors from "../common/Colors";

const CourseStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Course: {
      screen: CourseScreen,
    },
  },
  {
    defaultNavigationOptions: { headerShown: false },
  }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: CourseStack,
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
      <Content style={{ backgroundColor: Colors.blue }}>
        <View
          style={{
            height: 200,
            backgroundColor: Colors.blue,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: 128,
              width: 128,
              borderRadius: 60,
              borderWidth: 2,
              borderColor: "#fff",
            }}
            source={{
              uri: UsersSample[0].imageUrl,
            }}
          />
          <Button
            transparent
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          >
            <Text style={{ color: Colors.lightest }}>Visitar Perfil</Text>
          </Button>
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
      navigationOptions: { title: "Seus Cursos" },
    },
    Config: {
      screen: ConfigScreen,
      navigationOptions: { title: "Configurações" },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: { title: "Sair" },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeBackgroundColor: Colors.lightest,
      activeTintColor: Colors.blue,
      inactiveTintColor: Colors.lightest,
    },
  }
);

const InitialStackNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { headerShown: false } },
  Drawer: {
    screen: DrawerNavigator,
    navigationOptions: { headerShown: false },
  },
});

export default createAppContainer(InitialStackNavigator);
