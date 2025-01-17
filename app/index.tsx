import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import "../global.css"

const MoviesApp = () => {
  return <Redirect href={'/home'} />
}

export default MoviesApp