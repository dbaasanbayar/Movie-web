import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { Cards } from "@/app/_components/card";
import { axiosInstance } from "./functions";
import Link from "next/link";
import { ArrowRigth } from "./assets/arrow-right";
export const TopRatedMovie = async () => {
  const TopRatedMovies = async () => {
    const response = await axiosInstance.get(
      "/movie/top_rated?language=en-US&page=1"
    );
    return response.data;
  };
  const TopRatedMovieResults = await TopRatedMovies();

  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Top Rated</h2>
        <Link href={"/top-rated"}>
          <Button>
            See more
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-8">
        {TopRatedMovieResults.results.splice(10, 20).map((movie: MovieType) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};
