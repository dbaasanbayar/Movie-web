import { axiosInstance } from "@/app/_components/functions";
import {MoviePageHeader} from "@/app/details/[id]/_component/header"
import {TrailerContainer} from "@/app/details/[id]/_component/trailercontainer"
import {MovieGenre} from "@/app/details/[id]/_component/genre"

const MovieDetails = async ({ params: { id } }: { params: { id: number } }) => {
  console.log(id, "init");
const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
const movieData = (response.data)

  return (
  <div className="pl-[180px] w-full pr-[180px] flex flex-col gap-6">
    <MoviePageHeader movieData={movieData} />
    <TrailerContainer movieData={movieData}/>
    <MovieGenre movieData={movieData} />
    </div>
  )
}; 
export default MovieDetails;
