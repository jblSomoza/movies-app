import { nowPlayingMovies } from "@/core/actions/movies/now_playing.action";
import { popularMoviewAction } from "@/core/actions/movies/popular";
import { topRatedAction } from "@/core/actions/movies/top_rated";
import { upcomingAction } from "@/core/actions/movies/upcoming";
import { useQuery } from "@tanstack/react-query";

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

    const topRatedQuery = useQuery({
        queryKey: ["movies", "topRated"],
        queryFn: topRatedAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
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