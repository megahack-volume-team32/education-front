import React from "react";

import { StyleSheet } from "react-native";
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

const responseGoogle = (response) => {
  console.log(response);
};

const LoginScreen = (props) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.containerStyle}>
        <View style={styles.boxStyle}>
          <Form>
            <Label style={styles.centralizedTitle}>Adito</Label>
            <Item floatingLabel last>
              <Label>Nome de Usuário</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Senha</Label>
              <Input />
            </Item>

            <Separator amount={10} />

            <View style={styles.rememberMeContainer}>
              <CheckBox checked={true} style={{ marginRight: 20 }} />
              <Label>Conectar Automaticamente</Label>
            </View>
          </Form>
          <Separator amount={10} />
          <Button
            block
            onPress={() => {
              props.navigation.replace("Drawer");
            }}
          >
            <Text style={{ textAlign: "center" }}>Entrar</Text>
          </Button>

          <Separator
            amount={30}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              borderBottomColor: "#aaa",
            }}
          />
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
