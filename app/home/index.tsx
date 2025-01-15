import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/MainSlideshow';

const HomeScreen = () => {
    const { nowPlayingQuery } = useMovies();
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
    </View>
  )
}

export default HomeScreen