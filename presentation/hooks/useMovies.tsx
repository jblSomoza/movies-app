import { nowPlayingMovies } from "@/core/actions/movies/now_playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ["movies", "nowPlaying"],
        queryFn: nowPlayingMovies,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery,
    }
};