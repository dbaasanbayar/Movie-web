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
  const getSimilarMovies = async (id: string) => {
    const answer = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    return answer.data.results;
  };
  const similarMovies = await getSimilarMovies(id);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] text-[#09090B] font-[600] py-8 tracking-[-0.6px] leading-[32px]">
          More like this
        </h2>
        <Link href={`/details/${id}/similar`}>
          <Button variant="outline" className="flex items-center gap-2">
            <p>See more</p>
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {similarMovies.slice(0, 20).map((movie: MovieType) => (
          <div key={movie.id}>
            <Cards movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
