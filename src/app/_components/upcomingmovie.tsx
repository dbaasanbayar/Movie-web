import { CardOne } from "@/app/_components/cardOne";
import { Button } from "@/components/ui/button";
const moviesUp: MovieType[] = [
  { name: "Dear Santa", image: "/movieList/dear_santa.png", rate: 6.9 },
  {
    name: "How To Train Your Dragon Live Action",
    image: "/movieList/how_to_dragon.png",
    rate: 6.9,
  },
  { name: "Alien Romulus", image: "/movieList/alien.png", rate: 6.9 },
  { name: "From the Ashes", image: "/movieList/from_the_ashes.png", rate: 6.9 },
  { name: "Space Dogg", image: "/movieList/space_dog.png", rate: 6.9 },
  { name: "The Order", image: "/movieList/the_order.png", rate: 6.9 },
  { name: "Y2K", image: "/movieList/y2k.png", rate: 6.9 },
  {
    name: "Solo Leveling: ReAwakening",
    image: "/movieList/solo_leveling.png",
    rate: 6.9,
  },
  {
    name: "Get Away",
    image: "/movieList/get_away.png",
    rate: 6.9,
  },
  {
    name: "Sonic the Hedgehog 3",
    image: "/movieList/sonic-3.png",
    rate: 6.9,
  },
];
type MovieType = {
  name: string;
  image: string;
  rate: number;
};
export const UpComingMovie = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-[44px] mb-[32px] ">
        <h2 className="text-[24px] font-semibold ">Upcoming</h2>
        <Button />
      </div>
      <div className="flex flex-wrap gap-8 ">
        {moviesUp.map((movieUp, index) => {
          return <CardOne key={index} movieUp={movieUp}></CardOne>;
        })}
      </div>
    </div>
  );
};
