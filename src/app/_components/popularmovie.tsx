import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { Cards } from "@/app/_components/card";
import { axiosInstance } from "@/app/_components/functions";
import Link from "next/link";
import { ArrowRigth } from "./assets/arrow-right";

export const PopularMovie = async () => {
  const PopularMovies = async () => {
    const response = await axiosInstance.get(
      "/movie/popular?language=en-US&page=1"
    );
    return response.data;
  };
  const PopularMovieResults = await PopularMovies();
  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Popular</h2>
        <Link href={"/popular"}>
          <Button>
            See more
            <ArrowRigth />
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 ">
        {PopularMovieResults.results.splice(5, 10).map((movie: MovieType) => {
          return <Cards key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
