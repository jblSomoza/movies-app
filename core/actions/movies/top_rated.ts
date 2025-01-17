import { movieApi } from "@/core/api/movie_api";
import { MoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await movieApi.get<MoviesResponse>('/top_rated', {
            params: {
                page,
            },
        });

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