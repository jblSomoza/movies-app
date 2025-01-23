import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();
    const { movieQuery } = useMovie(+id);


    if(movieQuery.isLoading) {
      return (
        <View className='flex flex-1 justify-center items-center'>
          <Text className='mb-4'>Espere por favor</Text>
          <ActivityIndicator color={'purple'} size={34} />
        </View>
      )
    }

  return (
    <ScrollView>
      <Text>{movieQuery.data?.title ?? 'No tiene'}</Text>
    </ScrollView>
  )
}

export default MovieScreen