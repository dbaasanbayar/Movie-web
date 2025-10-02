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
        <Button />
      </div>
      <div className="flex flex-wrap gap-8 ">
        {moviesTR.map((movieTR, index) => {
          return <CardThree key={index} movieTR={movieTR}></CardThree>;
        })}
      </div>
    </div>
  );
};
