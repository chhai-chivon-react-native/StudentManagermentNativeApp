/**
 * Created by chhaichivon on 8/31/17.
 */
const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
        flex: 1,
        marginTop: 5
    },
    logo: {
        position: "absolute",
        left: Platform.OS === "android" ? 50 : 50,
        top: Platform.OS === "android" ? 50 : 50,
        alignSelf: "center",
        marginLeft:Platform.OS === "android" ? 50 : 50,
        marginRight:Platform.OS === "android" ? 50 : 50
    },
    formContainer:{
        flex: 1,
        marginTop: 1,
        marginLeft:2,
        marginRight:2
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    },
    btnLogin: {
        flex:1,
        backgroundColor: "#6FAF98",
        alignSelf: "center",
        width:100,
        marginRight:10
    },
    btnText:{
        alignSelf: "center"
    },
    formLogin:{
        backgroundColor: "#ffffff",
        marginLeft:2,
        marginRight:2
    }
};