import { movieApi } from "@/core/api/movie_api";
import { MoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedAction = async () => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/top_rated');

        if (!data) {
            throw new Error('There was an error fetching the data');
        }

        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

        return movies;
    } catch (error) {
        console.log(error);
        throw error;
    }
};