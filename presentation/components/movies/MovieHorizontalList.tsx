import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
}

const MovieHorizontalList = (props: Props) => {
    const { movies, title } = props;
  return (
    <View>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default MovieHorizontalList