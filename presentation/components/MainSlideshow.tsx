import { View, Text, useWindowDimensions } from 'react-native'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { useRef } from 'react';


interface Props {
    movies: Movie[];
}

//* No detecta cuando el dispositivo cambia de tamaño o rotación
//! Dimensions.get('screen').width;

const MainSlideshow = (props: Props) => {
    const { movies } = props;
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              height: 350,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>{item.title}</Text>
          </View>
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow