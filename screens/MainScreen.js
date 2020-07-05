import React from "react";

import {
  StyleSheet,
  Alert,
  ImageBackground,
  FlatList,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Content,
  View,
  Text,
  Item,
  Icon,
  Input,
  Button,
  Header,
  Left,
  Right,
  Body,
  Card,
  CardItem,
  Title,
} from "native-base";

import Separator from "../components/Separator";
import CourseCard from "../components/CourseCard";
import { CoursesSample } from "../data/SampleData";
import CustomHeader from "../components/CustomHeader";

import Colors from "../common/Colors";

const MainScreen = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderListItem = (itemData) => {
    return (
      <CourseCard
        course={itemData.item}
        onPress={() => {
          props.navigation.navigate("Course", {
            courseId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <Container>
      <CustomHeader
        color={Colors.blue}
        isHeader
        textColor={Colors.platinum}
        onLeftIconClick={() => {
          props.navigation.openDrawer();
        }}
        title={"Seus Cursos"}
      />
      <Content
        contentContainerStyle={styles.containerStyle}
        scrollEnabled={false}
      >
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Insira o Código do Curso</Text>

              <Item
                rounded
                style={{ width: "80%", backgroundColor: Colors.lightest }}
              >
                <Input
                  placeholder="Código (Ex. A954S)"
                  placeholderTextColor={Colors.blue}
                  style={{ textAlign: "center" }}
                />
              </Item>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Button
                  rounded
                  style={{ marginRight: 5, ...styles.modalButton }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.modalButtonText}>CONFIRMAR</Text>
                </Button>
                <Button
                  rounded
                  style={{ ...styles.modalButton }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.modalButtonText}>CANCELAR</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        <Button
          style={styles.fixedButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Icon
            name="ios-add"
            style={{ fontSize: 55, color: Colors.lightest }}
          />
        </Button>
      </Content>
    </Container>
  );
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
    width: "95%",
    height: 40,
    marginVertical: 5,
    borderColor: Colors.lightest,
    backgroundColor: Colors.lightest,
    elevation: 5,
  },
  courseListContainer: {
    width: "95%",
    height: "100%",
    paddingTop: 15,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    elevation: 5,
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
  fixedButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.orange,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    right: 15,
  },

  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.orange,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontFamily: "Roboto",
    fontSize: 19,
    marginBottom: 15,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: Colors.platinum,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  modalButtonText: {
    color: Colors.blue,
    fontFamily: "Roboto",
    fontSize: 13,
  },
});

MainScreen.navigationOptions = (navData) => {
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
