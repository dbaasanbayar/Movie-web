import {axiosInstance} from "@/app/_components/functions"
import { MovieType } from "@/lib/type"
import {Cards} from "@/app/_components/card"

export const SimilarMoviesSuggestions = async ({movieData} : {movieData : MovieType}) => {
const {id} = movieData
     const getSimilarMovies = async (id: number) => {
            const answer = await axiosInstance.get(`/movie/${id}/similar?language=en-US&page=1`);
            return answer.data.results}
        const similarMovies = await getSimilarMovies(id)
        console.log(similarMovies, "RESPOnse")

return <div> 
    <div className="flex justify-between">{similarMovies.splice(0, 6).map((movie: MovieType) => {
        return < Cards movie={movie} key={movie.id}/>
})}</div></div>

} 