import { View, Text, Image, StatusBar } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        source={require("../assets/images/background.png")}
        resizeMode={"cover"}
      />
      {/* Lights */}
      <View className="flex-row justify-around w-full absolute">
        <Image
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>
    </View>
  );
}
