import React from "react";
import {
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

export default  () => {
    return (
        <View style={MyStyle.container}>
            <TouchableOpacity style={MyStyle.Button} onPress={()=> alert("hello 2")}>
                <Text style={MyStyle.text}>
                    Hello 1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={MyStyle.Button} onPress={()=> alert("hello 2")}>
                <Text style={MyStyle.text}>
                    Hello 2
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const MyStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        Button:{
            backgroundColor: "aqua",
            marginTop:10,
            margin: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        text:{
            color: "white",
            fontSize: 18
        }
    }
)



