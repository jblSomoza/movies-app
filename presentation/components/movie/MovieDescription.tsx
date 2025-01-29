import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface MovieDescriptionProps {
    movie: CompleteMovie,
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text >{movie.rating.toFixed(2)}</Text>
        <Text> - { movie.genres.join(', ') }</Text>
      </View>

      <Text className='font-bold mt-5'>Historia</Text>
      <Text>{movie.description}</Text>

      <Text className='font-bold mt-2 text-2xl'>{Formatter.formatCurrency(movie.budget)}</Text>
    </View>
  )
}

export default MovieDescription