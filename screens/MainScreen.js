import React from "react";

import { StyleSheet, Alert, ImageBackground, FlatList } from "react-native";
import {
  Container,
  Content,
  View,
  Text,
  Item,
  Icon,
  Input,
  Button,
  Card,
  CardItem,
} from "native-base";

import Separator from "../components/Separator";
import CourseCard from "../components/CourseCard";
import { CoursesSample } from "../data/SampleData";

import Colors from "../common/Colors";

const MainScreen = (props) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.containerStyle}>
        <View style={styles.searchBarContainer}>
          <Text
            style={{
              fontFamily: "Roboto",
              color: Colors.lightest,
              paddingBottom: 10,
              fontSize: 18,
            }}
          >
            Bem vindo, José!
          </Text>
          <View>
            <Item rounded style={styles.searchBar}>
              <Input
                placeholder="Pesquisar Curso"
                placeholderTextColor={Colors.blue}
                style={{ color: Colors.blue }}
              />
              <Icon name="ios-search" style={{ color: Colors.blue }} />
            </Item>
          </View>
          <Separator amount={5} />
          <View style={styles.courseListContainer}>
            <View style={styles.courseList}>
              <FlatList data={CoursesSample} renderItem={renderListItem} />
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const renderListItem = (itemData) => {
  return <CourseCard course={itemData.item} />;
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBarContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: Colors.blue,
  },
  searchBar: {
    width: "90%",
    height: 40,
    marginVertical: 5,
    borderColor: Colors.lightest,
    backgroundColor: Colors.platinum,
  },
  courseListContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 15,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  courseList: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  courseText: {
    textAlign: "center",
  },
  courseCard: {
    width: "96%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

MainScreen.navigationOptions = (navData) => {
  console.log("Hello");
  return {
    headerTitle: () => <Text>adsadsa</Text>,
    headerRight: () => (
      <Button
        onPress={() => Alert("This is a button!")}
        title="Info"
        color="#fff"
      />
    ),
  };
};

export default MainScreen;
