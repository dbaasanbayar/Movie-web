import { Cards } from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { MovieType } from "@/lib/type";
import { axiosInstance } from "./functions";
import Link from "next/link";

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
        <Button>
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33398 8.00004H12.6673M12.6673 8.00004L8.00065 3.33337M12.6673 8.00004L8.00065 12.6667"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
