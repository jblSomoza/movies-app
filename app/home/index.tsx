import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'

const HomeScreen = () => {
    const { nowPlayingQuery } = useMovies();
    
  return (
    <View>
      <Text>HomeScreen</Text>

      <Text>{JSON.stringify(nowPlayingQuery.data,null,4)}</Text>
    </View>
  )
}

export default HomeScreen