import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
        resizeMode={"cover"}
      />

      {/* Lights */}
      <View className="flex-row justify-around w-full absolute">
        <Image
          className="h-[200] w-[80]"
          source={require("../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Text className="text-white font-bold tracking-wider text-4xl">
            Login
          </Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={"gray"}
            />
          </View>
          <View className="w-full">
            <TouchableOpacity className="w-full mb-3 bg-sky-400 p-3 rounded-2xl">
              <Text className="text-xl text-white text-center">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
