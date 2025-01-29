import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

interface MovieHeaderProps {
  poster: string;
  original_title: string;
  title: string;
}

const MovieHeader = ({ poster, original_title, title }: MovieHeaderProps) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          width: '100%',
          zIndex: 1,
        }}
      />

      <View style={{
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 99,
        elevation: 9
      }}>
        <Pressable
            onPress={() => { router.dismiss() }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
      </View>

      <View
        className="shadow-xl shadow-black/20"
        style={{
          height: screenHeight * 0.7,
        }}
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="text-2xl font-bold mt-4">{original_title}</Text>
        <Text className="text-lg font-semibold text-gray-500">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
