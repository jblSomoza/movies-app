import { getMovieById } from '@/core/actions/movie/get_movie_by_id.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMovie = (id: number) => {
    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieById(id),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

  return {
    movieQuery,
  }
}
