import { Cards } from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { axiosInstance } from "./functions";
import { ArrowRigth } from "./assets/arrow-right";

export const UpComingMovie = async () => {
  const upComingMovies = async () => {
    const data = await axiosInstance.get(
      "/movie/upcoming?language=en-US&page=1"
    );
    return data.data;
  };
  const getUpComingMovie = await upComingMovies();

  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Upcoming</h2>
        <Button className="px-10 cursor-pointer">
          <span>See more</span>
          <ArrowRigth />
        </Button>
      </div>
      <div className="flex flex-wrap gap-8 ">
        {getUpComingMovie.results.splice(0, 10).map((movie: MovieType) => {
          return <Cards key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
