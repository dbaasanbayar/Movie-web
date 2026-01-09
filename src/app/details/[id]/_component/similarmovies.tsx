import { axiosInstance } from "@/app/_components/functions";
import { MovieType } from "@/lib/type";
import { Cards } from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import { ArrowRigth } from "@/app/_components/assets/arrow-right";
import Link from "next/link";

export const SimilarMoviesSuggestions = async ({
  movieData,
}: {
  movieData: MovieType;
}) => {
  const { id } = movieData;

  const response = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=1`
  );

  const similarMovies: MovieType[] = response.data.results;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
          More like this
        </h2>
        <Link href={`/details/${id}/similar`}>
          <Button
            variant="outline"
            className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
            <span>See more</span>
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {similarMovies.slice(0, 20).map((movie: MovieType) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-180px lg:w-[200px]">
            <Cards movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
