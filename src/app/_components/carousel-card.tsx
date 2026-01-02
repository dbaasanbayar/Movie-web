import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { IconStar } from "./assets/icon-star";
import { IconPlay } from "./assets/icon-play";

export const CarouselCard = ({ movie }: { movie: MovieType }) => {
  const { poster_path, overview, vote_average, title, backdrop_path } = movie;
  return (
    <CarouselItem>
      <div className="flex gap-[10px] relative text-white  ">
        <img
          className="bg-cover w-full h-[600px]"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        />
        <div className="absolute flex flex-col ml-[140px] gap-[16px] w-[404px] py-20">
          <div>
            <p>Now Playing</p>
            <h2 className="font-[700] text-[36px]">{title}</h2>
            <p className="flex gap-1 items-center">
              <IconStar />
              {vote_average}/10
            </p>
          </div>
          <p>{overview}</p>
          <Button className="text-black w-[145px]">
            <IconPlay />
            Watch trailer
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
};
