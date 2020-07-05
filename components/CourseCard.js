import React from "react";

import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Row, View, Icon } from "native-base";

import Separator from "../components/Separator";

const CourseCard = (props) => {
  return (
    <Card style={styles.courseCard}>
      <TouchableOpacity onPress={props.onPress}>
        <CardItem cardBody>
          <ImageBackground
            source={{
              uri: props.course.imageUrl,
            }}
            style={styles.backgroundImage}
          >
            <View style={styles.darkScreen}>
              <View
                style={{
                  width: "79%",
                  height: "100%",
                  padingLeft: 40,
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.courseTitle}>{props.course.name}</Text>
                  <Text style={styles.courseTitle}>{props.course.company}</Text>
                </View>
                <Separator amount={10} />
                <View style={styles.cardFooter}>
                  <View style={styles.footerItemContainer}>
                    <Icon name={"heart"} style={styles.footerIcon} />
                    <Text style={styles.footerText}>{props.course.likes}</Text>
                  </View>

                  <View style={styles.footerItemContainer}>
                    <Icon name={"ios-chatboxes"} style={styles.footerIcon} />
                    <Text style={styles.footerText}>
                      {props.course.comments}
                    </Text>
                  </View>

                  <View style={styles.footerItemContainer}>
                    <Icon name={"ios-clock"} style={styles.footerIcon} />
                    <Text style={styles.footerText}>
                      {props.course.duration}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.iconContainer}>
                <Icon
                  name="ios-play"
                  style={{ color: "white", fontSize: 60 }}
                />
              </View>
            </View>
          </ImageBackground>
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    width: "96%",
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 5,
  },
  darkScreen: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  courseTitle: {
    color: "white",
    fontFamily: "Roboto",
    textAlign: "left",
    fontSize: 18,
  },
  iconContainer: {
    maxWidth: 100,
    minWidth: 65,
    borderLeftWidth: 1,
    borderLeftColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "4%",
    height: "85%",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0, 1)",
    height: 22,
    width: "85%",
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
  },
  titleContainer: {
    paddingLeft: 4,
  },
  footerItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footerIcon: { color: "white", fontSize: 18, paddingRight: 5 },
  footerText: { color: "white" },
});

export default CourseCard;
