import { movieApi } from "@/core/api/movie_api";
import { MoviesResponse } from "@/infrastructure/interfaces/moviedb.response";

export const nowPlayingMovies = async () => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/now_playing');

        if (!data) {
            throw new Error('There was an error fetching the data');
        }

        console.log(data);
        

        return [];
    } catch (error) {
        console.log(error);
        throw error;
    }
};