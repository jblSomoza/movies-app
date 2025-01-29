import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieCast from '@/presentation/components/movie/MovieCast';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator color={"purple"} size={34} />
        <Text className="mb-4">Espere por favor</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        original_title={movieQuery.data.original_title}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      {castQuery.data && <MovieCast casts={castQuery.data} />}
    </ScrollView>
  );
};

export default MovieScreen