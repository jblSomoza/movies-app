import { View, Text } from "react-native";
import React from "react";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { FlatList } from "react-native-gesture-handler";
import { ActorCard } from "./ActorCard";

interface MovieCastProps {
  casts: Cast[];
}

const MovieCast = ({ casts }: MovieCastProps) => {
  return (
    <View className="mt-5 mb-52">
      <Text className='font-bold text-2xl mx-5'>Cast</Text>

      <FlatList
        data={casts}
        renderItem={({ item }) => <ActorCard actor={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieCast;
