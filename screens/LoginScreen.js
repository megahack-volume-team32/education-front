import React from "react";

import { StyleSheet, Image } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  CheckBox,
  Button,
} from "native-base";

import Separator from "../components/Separator";
import Colors from "../common/Colors";

const responseGoogle = (response) => {
  console.log(response);
};

const LoginScreen = (props) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.containerStyle}>
        <View style={styles.boxStyle}>
          <Form>
            <Image
              style={{ width: 300, height: 200 }}
              source={require("../assets/logo_aune_02b.png")}
            />
            <Item floatingLabel last style={{ borderColor: Colors.platinum }}>
              <Label style={{ color: Colors.platinum }}>Nome de Usuário</Label>
              <Input style={{ color: Colors.lightest }} />
            </Item>
            <Item floatingLabel last style={{ borderColor: Colors.platinum }}>
              <Label style={{ color: Colors.platinum }}>Senha</Label>
              <Input
                secureTextEntry={true}
                style={{ color: Colors.lightest }}
              />
            </Item>

            <Separator amount={10} />

            <View style={styles.rememberMeContainer}>
              <CheckBox
                checked={true}
                style={{
                  color: Colors.blue,
                  backgroundColor: Colors.orange,
                  borderColor: Colors.orange,
                  marginRight: 20,
                }}
              />
              <Label style={{ color: Colors.platinum, fontFamily: "Roboto" }}>
                Conectar Automaticamente
              </Label>
            </View>
          </Form>
          <Separator amount={15} />
          <Button
            rounded
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.orange,
            }}
            onPress={() => {
              props.navigation.replace("Drawer");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 20,
                color: Colors.blue,
              }}
            >
              Entrar
            </Text>
          </Button>

          <Separator
            amount={30}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.platinum,
            }}
          />

          <Button
            rounded
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.platinum,
            }}
            onPress={() => {
              props.navigation.replace("Drawer");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 20,
                color: Colors.blue,
              }}
            >
              REGISTRE-SE
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
  },
  boxStyle: {
    width: "80%",
    minWidth: 300,
  },
  centralizedTitle: {
    textAlign: "center",
  },
  rememberMeContainer: {
    flexDirection: "row",
    width: "100%",
  },
});

export default LoginScreen;
