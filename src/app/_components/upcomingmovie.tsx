import { Cards } from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { axiosInstance } from "./functions";
import { ArrowRigth } from "./assets/arrow-right";
import Link from "next/link";

export const UpComingMovie = async () => {
  const upComingMovies = async () => {
    const data = await axiosInstance.get(
      "/movie/upcoming?language=en-US&page=1"
    );
    return data.data.results;
  };
  const getUpComingMovie = await upComingMovies();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 justify-between mt-8 mb-6 md:mt-10 md:mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Upcoming</h2>
        <Link href={`/upcoming`}>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 px-5 py-2 text-sm md:text-base"
          >
            <span>See more</span>
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
        {getUpComingMovie.slice(0, 10).map((movie: MovieType) => {
          return <Cards key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
