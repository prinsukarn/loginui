import { View, Text, Image } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <Image
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        source={require("../assets/images/background.png")}
        resizeMode={"cover"}
      />
      <Text>Login</Text>
    </View>
  );
}
