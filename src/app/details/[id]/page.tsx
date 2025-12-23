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
  console.log("need to check id number or string", movieData);
  // console.log("id that i caught", movieData.id);

  return (
    <div className="pl-[180px] w-full pr-[180px] flex flex-col gap-6">
      <MoviePageHeader movieData={movieData} />
      <TrailerContainer movieData={movieData} />
      <MovieGenre movieData={movieData} />
      <SimilarMoviesSuggestions movieData={movieData} />
    </div>
  );
};
export default MovieDetails;
