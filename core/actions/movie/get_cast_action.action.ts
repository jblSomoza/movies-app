import { movieApi } from "@/core/api/movie_api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/credits_response.interface";

export const getMovieCastAction = async(movieId: number): Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

        const cast: Cast[] = data.cast.map(actor => ({
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://i.stack.imgur.com/l60Hf.png',
        }));

        return cast;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
}