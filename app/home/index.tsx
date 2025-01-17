import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
    const safeArea = useSafeAreaInsets();

    if(nowPlayingQuery.isLoading) {
      return (
        <View className='justify-center items-center h-full flex-1'>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      )
    }

  return (
    <ScrollView>
      <View
        className="mt-2 pb-10"
        style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* CARROUSEL */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* POPULAR MOVIES */}
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className={"mb-4"}
        />

        {/* TOP RATED MOVIES */}
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Top Rated"
          className={"mb-5"}
          loadNextPage={ topRatedQuery.fetchNextPage }
        />

        {/* UPCOMING MOVIES */}
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Upcoming"
          className={"mb-5"}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen