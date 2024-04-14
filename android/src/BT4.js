import React, { useState } from 'react';
import {View, Text,Button} from "react-native"
function ButtonPressCounter() {
  const [pressCount, setPressCount] = useState(0);

  function handleClick() {
    setPressCount(prevCount => prevCount + 1);
  }

  return (
    <View style={{alignSelf:'center', alignItems: "center", marginTop: 20}}>
      <Text>Bạn đã nhấn nút: {pressCount} lần</Text>
      <Button title="Nhấn nút" onPress={handleClick} />
    </View>
  );
}

export default ButtonPressCounter;