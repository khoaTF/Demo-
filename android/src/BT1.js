import React from 'react';
import{
  View,
  Text,
  StyleSheet
}from 'react-native'

 
const BT1 = ()=>
{
  return (
    <View style={
      MyStyle.ViewStyle
    }>
      <Text style={MyStyle.TextStyle}> Hello World</Text>
    </View>
  );
}
export default BT1 ;

<View style={
  {
    width:500,
    height:500,
    backgroundColor:'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  }
}>
    <Text style={{color:'white'}}> Hello World</Text> 
</View>

var MyStyle = StyleSheet.create(
  {
    ViewStyle: {
      width:400,
    height:400,
    backgroundColor:'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    },
    TextStyle:
    {
      color: 'red'
    }
  }
)  ;

