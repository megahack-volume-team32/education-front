import React from "react";

import { StyleSheet } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
  VictoryLegend,
  VictoryGroup,
} from "victory-native";

import { Container, Content, Text, View, Card, CardItem } from "native-base";

import { Dimensions, FlatList, Image } from "react-native";

import { BadgesSample } from "../data/SampleData";
import CustomBadge from "../components/CustomBadge";
import Colors from "../common/Colors";
import CustomHeader from "../components/CustomHeader";

const renderItem = (itemData) => {
  return <CustomBadge bType={itemData.item.badgeType}></CustomBadge>;
};

const itemSeparatorComponent = () => {
  return (
    <View
      style={{
        height: "100%",
        width: 5,
        backgroundColor: "red",
      }}
    />
  );
};

const AchievementScreen = (props) => {
  const barData = {
    datasets: [
      {
        data: [1, 20, 50, 30],
      },
    ],

    labels: ["Reboqueiro", "Administrativo", "Terminais", "Marketing"],
  };

  const sampleData = [
    { cargo: "A", pontos: 2 },
    { cargo: "M", pontos: 3 },
    { cargo: "O", pontos: 4 },
    { cargo: "T", pontos: 1 },
  ];

  return (
    <Container>
      <CustomHeader
        color={Colors.platinum}
        textColor={Colors.blue}
        isHeader
        onLeftIconClick={() => {
          props.navigation.openDrawer();
        }}
        title={"Suas Habilidades"}
      />
      <Content
        style={{ backgroundColor: Colors.blue }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.badgesContainer}>
          <View
            style={{
              width: "105%",
              height: 40,
              borderRadius: 30,
              backgroundColor: Colors.orange,
              borderBottomWidth: 5,
              borderLeftWidth: 5,
              borderRightWidth: 5,
              borderTopWidth: 0,
              borderColor: Colors.blue,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.badgesTitle}>Medalhas Conquistadas</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{
              width: "95%",
              backgroundColor: Colors.platinum,
              margin: 0,
              padding: 0,
            }}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
            data={BadgesSample}
            renderItem={renderItem}
          />
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Roboto",
            marginTop: 60,
          }}
        >
          Seu Desenvolvimento
        </Text>
        <Image
          source={require("../assets/chart.jpg")}
          style={{
            width: 340,
            height: 200,
            borderRadius: 10,
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: Colors.platinum,
    borderRadius: 30,
    overflow: "hidden",
    width: "95%",
    height: 150,
    elevation: 10,
  },
  badgesTitle: {
    fontFamily: "Roboto",
    color: Colors.blue,
    fontSize: 20,
  },
});

export default AchievementScreen;
