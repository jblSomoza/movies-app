import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb.response";
import { MovieResponse } from "../interfaces/moviedb_movie.interface";

export class MovieMapper {
    static fromTheMovieDbToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}.jpg`
        }
    }

    static fromTheMovieDBToCompleteMovie = (movie: MovieResponse): CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}.jpg`,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(genre => genre.name),
            original_title: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        }
    }
}