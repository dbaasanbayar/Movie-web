import { CarouselCard } from "@/app/_components/carousel-card";
import { headers } from "next/headers";
import axios from "axios";
import { MovieType } from "@/lib/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { axiosInstance } from "@/app/_components/functions";

export const CarouselMovie = async () => {
  const getPopularMovies = async () => {
    const response = await axiosInstance.get(
      "/movie/popular?language=en-US&page=1"
    );
    return response.data;
  };

  const movieCarousel = await getPopularMovies();

  return (
    <Carousel>
      <CarouselContent>
        {movieCarousel.results.slice(0, 10).map((movie: MovieType) => {
          return <CarouselCard key={movie.id} movie={movie} />;
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-[100px]" />
      <CarouselNext className="mr-[100px]" />
    </Carousel>
  );
};
