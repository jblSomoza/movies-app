import { nowPlayingMovies } from "@/core/actions/movies/now_playing.action";
import { popularMoviewAction } from "@/core/actions/movies/popular";
import { topRatedAction } from "@/core/actions/movies/top_rated";
import { upcomingAction } from "@/core/actions/movies/upcoming";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ["movies", "nowPlaying"],
        queryFn: nowPlayingMovies,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const popularQuery = useQuery({
        queryKey: ["movies", "popular"],
        queryFn: popularMoviewAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "topRated"],
        queryFn: ({ pageParam }) => {
            return topRatedAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    const upcomingQuery = useQuery({
        queryKey: ["movies", "upcoming"],
        queryFn: upcomingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }
};