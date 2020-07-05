import React from "react";

import { StyleSheet } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from "victory-native";

import { Container, Content, Text, View, Card, CardItem } from "native-base";

import { BarChart } from "react-native-chart-kit";

import { Dimensions, FlatList } from "react-native";

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
  const data = [
    { quarter: "Reboqueiro", earnings: 13000 },
    { quarter: "Administrativo", earnings: 16500 },
    { quarter: "Terminais", earnings: 14250 },
    { quarter: "Marketing", earnings: 19000 },
  ];

  const barData = {
    datasets: [
      {
        data: [1, 20, 50, 30],
      },
    ],

    labels: ["Reboqueiro", "Administrativo", "Terminais", "Marketing"],
  };

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
        {/*<VictoryChart width={400} theme={VictoryTheme.grayscale} name="Skills">
          <VictoryLabel
            x={55}
            y={40}
            text={"Marketing"}
            style={{ color: "white" }}
            className
          />
          <VictoryBar data={data} x="quarter" y="earnings" horizontal={true} />
  </VictoryChart>*/}
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
        <Text>daskdjsalkdj</Text>
        <View>
          <BarChart
            // style={graphStyle}
            data={barData}
            width={Dimensions.get("window").width}
            height={200}
            showBarTops={true}
            showValuesOnTopOfBars={true}
            chartConfig={{
              backgroundGradientFrom: Colors.blue,
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: Colors.blue,
              backgroundGradientToOpacity: 0.5,
              decimalPlaces: 0, // optional, defaults to 2dp
              fillShadowGradient: "rgba(255,255,255,1)",
              strokeWidth: 200,
              color: (opacity = 1) => `rgba(252, 163, 17, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
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
    height: "40%",
    elevation: 10,
  },
  badgesTitle: {
    fontFamily: "Roboto",
    color: Colors.blue,
    fontSize: 20,
  },
});

export default AchievementScreen;
