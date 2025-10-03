import { CardTwo } from "@/app/_components/cardTwo";
import { Button } from "@/components/ui/button";
const moviesPop: MovieType[] = [
  {
    name: "The Shawshank Redemption",
    image: "/PopMovieList/shawshank.png",
    rate: 6.9,
  },
  {
    name: "The Godfather",
    image: "/PopMovieList/thegodfather.png",
    rate: 6.9,
  },
  {
    name: "The Dark Knight",
    image: "/PopMovieList/darkknight.png",
    rate: 6.9,
  },
  {
    name: "12 Angry Men",
    image: "/PopMovieList/12angrymen.png",
    rate: 6.9,
  },
  {
    name: "The Lord of the Rings: The  Return of the King",
    image: "/PopMovieList/thelotr.png",
    rate: 6.9,
  },
  {
    name: "Interstellar",
    image: "/PopMovieList/interstellar.png",
    rate: 6.9,
  },
  {
    name: "Se7en",
    image: "/PopMovieList/seven.png",
    rate: 6.9,
  },
  {
    name: "It’s a Wonderful life",
    image: "/PopMovieList/itiswonderful.png",
    rate: 6.9,
  },
  {
    name: "Seven samurai",
    image: "/PopMovieList/sevensamurai.png",
    rate: 6.9,
  },
  {
    name: "The Silence of the Lambs",
    image: "/PopMovieList/silenceoflambs.png",
    rate: 6.9,
  },
];
type MovieType = {
  name: string;
  image: string;
  rate: number;
};
export const PopularMovie = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Popular</h2>
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
        {moviesPop.map((moviePop, index) => {
          return <CardTwo key={index} moviePop={moviePop}></CardTwo>;
        })}
      </div>
    </div>
  );
};
