import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
    const { nowPlayingQuery, popularQuery } = useMovies();
    const safeArea = useSafeAreaInsets();

    if(nowPlayingQuery.isLoading) {
      return (
        <View className='justify-center items-center h-full flex-1'>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      )
    }

  return (
    <View
      className='mt-2'
      style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}
    >
      <Text className='text-1xl font-bold px-4 mb-2'>Movies App</Text>

      {/* CARROUSEL */}
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />

      {/* POPULAR MOVIES */}
      <MovieHorizontalList movies={ popularQuery.data ?? [] } title='Populares'/>
    </View>
  )
}

export default HomeScreen