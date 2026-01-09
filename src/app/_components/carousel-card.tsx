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
      <div className="relative text-white  ">
        <img
          className="object-cover h-[220px] sm:h=[320px] md:h-[420px] w-full"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-4 sm:px-8 sm:py-8 gap-1">
            <p className="text-xs sm:text-sm opacity-80">Now Playing</p>
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl line-clamp-2">
              {title}
            </h2>
            <p className="flex items-center gap-1 text-sm sm:text-base">
              <IconStar />
              {vote_average}/10
            </p>
            <p className="text-xs sm:text-sm md:text-base line-clamp-3 max-w-2xl">
              {overview}
            </p>
            <Button className="text-black w-fit gap-2">
              <IconPlay />
              Watch trailer
            </Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
