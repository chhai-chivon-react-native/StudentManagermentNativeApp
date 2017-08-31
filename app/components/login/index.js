/**
 * Created by chhaichivon on 8/31/17.
 */
import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Text
} from "native-base";
import styles from "./styles";
const launchscreenBg = require("../../../img/launchscreen.gif");
const launchscreenLogo = require("../../../img/logo.png");
import HomeIndex from '../home/index';
class LogIn extends Component {

    goToHome(){
        return(<HomeIndex/>)
    }
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <Image source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={launchscreenLogo} style={styles.logo} />
                    </View>
                    <View style={styles.formContainer}>
                        <Form style={styles.formLogin}>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry={true}/>
                            </Item>
                            <Item>
                                <Button block style={ styles.btnLogin } onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                    <Label style={ styles.btnText }>LOGIN</Label>
                                </Button>
                            </Item>
                        </Form>
                    </View>
                </Image>
            </Container>
        );
    }
}
export default LogIn;