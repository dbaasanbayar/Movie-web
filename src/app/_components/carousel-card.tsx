"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MovieType } from "@/lib/type";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { IconPlay } from "./assets/icon-play";
import { Button } from "@/components/ui/button";

export const CarouselCard = ({
  movie,
}: {
  movie: MovieType & { trailerKey?: string };
}) => {
  const {
    poster_path,
    overview,
    vote_average,
    title,
    backdrop_path,
    trailerKey,
  } = movie;

  return (
    <CarouselItem>
      <div className="relative text-white">
        <img
          className="bg-cover h-[220px] sm:h-[320px] md:h-[600px] w-full"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-4 sm:px-8 sm:py-8 gap-1">
            <p className="text-xs sm:text-sm opacity-80">Now Playing</p>
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl line-clamp-2">
              {title}
            </h2>
            <p className="flex items-center gap-1 text-sm sm:text-base">
              ⭐ {vote_average}/10
            </p>
            <p className="text-xs sm:text-sm md:text-base line-clamp-3 max-w-2xl">
              {overview}
            </p>
            <div className="flex items-center gap-2">
              {trailerKey && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="rounded-full hover:scale-105 transition"
                      size="icon"
                      variant="outline"
                    >
                      <IconPlay />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] flex flex-col justify-center max-w-[1000px] h-[60vh] sm:h-[70vh] text-white bg-black p-3 sm:p-4 border-none">
                    <DialogHeader>
                      <DialogTitle className="text-sm sm:text-base">
                        {movie.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center justify-center h-full">
                      {trailerKey && (
                        <div className="w-full aspect-video max-w-[960px]">
                          <LiteYouTubeEmbed
                            id={trailerKey}
                            title={movie.title}
                          />
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              <p className="hidden sm:block text-sm font-semibold">
                Play trailer
              </p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
