import { CardThree } from "@/app/_components/cardthree";
import { Button } from "@/components/ui/button";
const moviesTR: MovieType[] = [
  {
    name: "Pulp Fiction",
    image: "/_topratedmovielist/pulpfiction.png",
    rate: 6.9,
  },
  {
    name: "The Lord of the Rings: Fellowship of the Kings",
    image: "/_topratedmovielist/lotr-1.png",
    rate: 6.9,
  },
  {
    name: "The Good, the Bad and the Ugly",
    image: "/_topratedmovielist/gbu.png",
    rate: 6.9,
  },
  {
    name: "Forrest Gump",
    image: "/_topratedmovielist/forestgump.png",
    rate: 6.9,
  },
  {
    name: "Fight Club",
    image: "/_topratedmovielist/fightclub.png",
    rate: 6.9,
  },
  {
    name: "Saving Private Ryan",
    image: "/_topratedmovielist/pirateryan.png",
    rate: 6.9,
  },
  {
    name: "City of God",
    image: "/_topratedmovielist/cityofgod.png",
    rate: 6.9,
  },
  {
    name: "The Green Mile",
    image: "/_topratedmovielist/greenmile.png",
    rate: 6.9,
  },
  {
    name: "Life is Beautiful",
    image: "/_topratedmovielist/lifeisbeautiful.png",
    rate: 6.9,
  },
  {
    name: "Terminator 2: Judgement Day",
    image: "/_topratedmovielist/terminator-2.png",
    rate: 6.9,
  },
];
type MovieType = {
  name: string;
  image: string;
  rate: number;
};
export const TopRatedMovie = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Top Rated</h2>
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
        {moviesTR.map((movieTR, index) => {
          return <CardThree key={index} movieTR={movieTR}></CardThree>;
        })}
      </div>
    </div>
  );
};
