import React from "react";

import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Container, Content, Text, View, Icon } from "native-base";
import { CoursesSample } from "../data/SampleData";

import Colors from "../common/Colors";
import CustomHeader from "../components/CustomHeader";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const CourseScreen = (props) => {
  const courseId = props.navigation.getParam("courseId");
  const course = CoursesSample.find((c) => c.id === courseId);

  const completed = course.classesDes.filter((cl) => cl.seen).length;
  const progress = completed / course.classesDes.length;

  console.log(completed);
  console.log(progress);

  let courseDownloadedColor = Colors.downloaded;

  if (course.classesDes.some((cl) => !cl.downloaded)) {
    console.log(course.classesDes);
    courseDownloadedColor = Colors.blue;
  }

  const renderItem = (itemData) => {
    let iconName = "";

    if (itemData.item.locked) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.blue,
            borderBottomWidth: 1.5,
            borderColor: Colors.platinum,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 70,
              padding: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Icon
                name={"ios-lock"}
                style={{
                  color: Colors.platinum,
                  fontSize: 30,
                  paddingRight: 10,
                }}
              />
              <Text
                style={{
                  color: Colors.platinum,
                  fontFamily: "Roboto",
                  fontSize: 14,
                }}
              >
                Complete os exercícios anteriores para desbloquear
              </Text>
            </View>
            <Icon
              name="ios-download"
              style={{
                fontSize: 30,
                ...(itemData.item.downloaded
                  ? { color: Colors.downloaded }
                  : { color: Colors.platinum }),
              }}
            />
          </View>
        </TouchableOpacity>
      );
    }

    switch (itemData.item.type) {
      case "Video":
        iconName = "ios-videocam";
        break;
      case "Text":
        iconName = "ios-paper";
        break;
      case "Exercise":
        iconName = "ios-create";
        break;
      default:
        iconName = "ios-book";
        break;
    }

    let itemSeen = {
      color: Colors.blue,
      situation: "Concluído",
      backgroundColor: "rgba(20, 33, 61, 0.2)",
    };
    if (!itemData.item.seen) {
      itemSeen = {
        color: Colors.lightest,
        situation: "Pendente",
        backgroundColor: "#a50727",
      };
    }

    return (
      <TouchableOpacity
        style={{
          backgroundColor: itemSeen.backgroundColor,
          borderBottomWidth: 1.5,
          borderColor: Colors.platinum,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 70,
            padding: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Icon
              name={iconName}
              style={{ color: itemSeen.color, fontSize: 30, paddingRight: 10 }}
            />
            <View>
              <Text
                style={{
                  color: itemSeen.color,
                  fontFamily: "Roboto",
                  fontSize: 18,
                }}
              >
                {itemData.item.title + " (" + itemSeen.situation + ")"}
              </Text>
              <View
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <Icon
                  name="md-clock"
                  style={{
                    fontSize: 16,
                    color: itemSeen.color,
                    paddingRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: itemSeen.color,
                    fontFamily: "Roboto",
                    fontSize: 14,
                  }}
                >
                  {itemData.item.durationText}
                </Text>
              </View>
            </View>
          </View>
          <Icon
            name="ios-download"
            style={{
              fontSize: 30,
              ...(itemData.item.downloaded
                ? { color: Colors.downloaded }
                : { color: Colors.blue }),
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  console.log(courseDownloadedColor);

  return (
    <Container>
      <CustomHeader
        color={Colors.blue}
        textColor={Colors.platinum}
        onLeftIconClick={() => {
          props.navigation.goBack();
        }}
        title={course.name}
      />
      <Content contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <View style={styles.thumbContainer}>
          <ImageBackground
            source={{ uri: course.imageUrl }}
            style={styles.backgroundImage}
          >
            <View style={styles.darkView}>
              <View style={styles.progressContainer}>
                <View
                  style={{
                    width: "90%",
                    height: 20,
                    backgroundColor: Colors.platinum,
                    borderRadius: 40,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: progress * 100 + "%",
                      height: 20,
                      backgroundColor: "#9DE482",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></View>
                </View>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: Colors.lightest,
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  {progress * 100 + "%"}
                </Text>

                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: Colors.lightest,
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  {completed + "/" + course.classesDes.length} Aulas Concluídas
                </Text>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: Colors.lightest,
                    textAlign: "center",
                    paddingTop: 20,
                    fontSize: 16,
                  }}
                >
                  Oferecido Por
                </Text>
                <Text
                  style={{
                    fontFamily: "Roboto",
                    color: Colors.lightest,
                    textAlign: "center",
                    fontSize: 25,
                  }}
                >
                  {course.company}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "flex-end",
                  height: "100%",
                }}
              ></View>
            </View>
            <View
              style={{
                height: "20%",
                width: "100%",
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: Colors.platinum,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.blue,
                    fontSize: 20,
                    paddingRight: 5,
                  }}
                >
                  {course.likes}
                </Text>

                <Icon
                  name="ios-heart-empty"
                  style={{
                    fontSize: 25,
                    paddingRight: 5,
                    color: Colors.blue,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.blue,
                    fontSize: 20,
                    paddingRight: 5,
                  }}
                >
                  Baixar Curso
                </Text>

                <Icon
                  name="ios-download"
                  style={{
                    fontSize: 25,
                    paddingRight: 5,
                    color: courseDownloadedColor,
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.classListContainer}>
            <FlatList
              data={course.classesDes}
              style={{ width: Dimensions.get("window").width, height: "100%" }}
              contentContainerStyle={{}}
              renderItem={renderItem}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: Colors.darkest,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  darkView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  classListContainer: {
    overflow: "hidden",

    height: "96%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 7,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Colors.platinum,
  },
});

export default CourseScreen;
