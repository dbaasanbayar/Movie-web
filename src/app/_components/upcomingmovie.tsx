import { Cards } from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { MovieType } from "@/lib/type";

export const UpComingMovie = async () => {
  const upComingMovies = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDE5YTkwYzFjNDE4NTZiZTcwNzk4YjQ5ZTQ3YjIzYyIsIm5iZiI6MTc1OTQ4NTQyMi4yOSwic3ViIjoiNjhkZjlkZWVkNWE3MGM0NGNkM2I4Yzk5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ijRLOMXEhM1v5dDDUFobPzRBus-kS8GEjaJ2S09ruO0`,
        },
      }
    );
    return data.data;
  };
  const getUpComingMovie = await upComingMovies();

  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Upcoming</h2>
        <Button>
          <p>See more</p>
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
        {getUpComingMovie.results.slice(0 - 10).map((movie: MovieType) => {
          return <Cards key={movie.id} movie={movie}></Cards>;
        })}
      </div>
    </div>
  );
};
