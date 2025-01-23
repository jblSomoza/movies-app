import { movieApi } from "@/core/api/movie_api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieResponse } from "@/infrastructure/interfaces/moviedb_movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieById = async (id: number | string): Promise<CompleteMovie> => {
    try {
        const {data} = await movieApi.get<MovieResponse>(`/${id}`);

        return MovieMapper.fromTheMovieDBToCompleteMovie(data);
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching movie');
    }
}