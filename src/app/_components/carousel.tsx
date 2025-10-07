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

const tokenFromTMDB =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDE5YTkwYzFjNDE4NTZiZTcwNzk4YjQ5ZTQ3YjIzYyIsIm5iZiI6MTc1OTQ4NTQyMi4yOSwic3ViIjoiNjhkZjlkZWVkNWE3MGM0NGNkM2I4Yzk5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ijRLOMXEhM1v5dDDUFobPzRBus-kS8GEjaJ2S09ruO0";

export const CarouselMovie = async () => {
  const getPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

      {
        headers: {
          Authorization: `Bearer ${tokenFromTMDB}`,
        },
      }
    );
    return response.data;
  };

  const movieCarousel = await getPopularMovies();

  return (
    <Carousel>
      <CarouselContent>
        {movieCarousel.results.slice(0 - 5).map((movie: MovieType) => {
          return <CarouselCard key={movie.id} movie={movie} />;
        })}
      </CarouselContent>
      <CarouselPrevious className="ml-[100px]" />
      <CarouselNext className="mr-[100px]" />
    </Carousel>
  );
};
