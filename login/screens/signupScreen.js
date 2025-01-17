import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
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
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[200] w-[80]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* Title */}
      <View className="h-full w-full flex justify-around pt-48">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl"
          >
            Signup
          </Animated.Text>
        </View>

        {/* Form */}
        <View className="flex items-center mx-4 ">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-3 mt-4 rounded-2xl w-full mb-4"
          >
            <TextInput placeholder="Username" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full mb-4"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full mb-4"
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={"gray"}
            />
          </Animated.View>

          {/* Signup Button */}
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="w-full mb-3 bg-sky-400 p-3 rounded-2xl">
              <Text className="text-xl text-white text-center">Signup</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Sign up Link */}
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className="text-sky-600">Signup</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
