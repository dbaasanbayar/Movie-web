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
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[24px] text-[#09090B] font-[600] tracking-[-0.6px] leading-[32px]">
          More like this
        </h2>
        <Link href={`/details/${id}/similar`}>
          <Button variant="outline" className="flex items-center gap-2">
            <p>See more</p>
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div className="flex justify-between">
        {similarMovies.slice(0, 5).map((movie: MovieType) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

// color: var(--text-text-foreground, #09090B);

// /* h3 */
// font-family: Inter;
// font-size: 24px;
// font-style: normal;
// font-weight: 600;
// line-height: 32px; /* 133.333% */
// letter-spacing: -0.6px;
