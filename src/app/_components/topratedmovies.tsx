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
    <div className="w-full">
      <div className="flex items-center justify-between mt-8 mb-6 md:mt-10 md:mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Top Rated</h2>
        <Link href={"/top-rated"}>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-5 py-2 text-sm md:text-base"
          >
            See more
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div
        className="grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8
                      sm:grid-cols-3 
                      md:grid-cols-4 
                      lg:grid-cols-5 
                      xl:grid-cols-5 2xl:grid-cols-6"
      >
        {TopRatedMovieResults.results.splice(10, 20).map((movie: MovieType) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};
