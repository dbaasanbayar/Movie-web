import { axiosInstance } from "@/app/_components/functions";
import { MoviePageHeader } from "@/app/details/[id]/_component/header";
import { TrailerContainer } from "@/app/details/[id]/_component/trailercontainer";
import { MovieGenre } from "@/app/details/[id]/_component/genre";
import { SimilarMoviesSuggestions } from "@/app/details/[id]/_component/similarmovies";
import { idProps } from "@/lib/type";

const MovieDetails = async ({ params }: idProps) => {
  const { id } = await params;
  const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
  const movieData = response.data;
  return (
    <div className="w-full flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24">
      <MoviePageHeader movieData={movieData} />
      <TrailerContainer movieData={movieData} />
      <MovieGenre movieData={movieData} />
      <SimilarMoviesSuggestions movieData={movieData} />
    </div>
  );
};
export default MovieDetails;

//server client
//Vercel, Hereglegchiin Pc-Utas
//

// Asynchronus ->

// console.log("1")
// await console.log("2")
// console.log("3")
