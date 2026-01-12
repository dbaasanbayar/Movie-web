import { CarouselCard } from "@/app/_components/carousel-card";
import { MovieType } from "@/lib/type";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { axiosInstance } from "@/app/_components/functions";

export const CarouselMovie = async () => {
  const response = await axiosInstance.get(
    "/movie/now_playing?language=en-US&page=1"
  );
  const movies: MovieType[] = response.data.results;

  const moviesWithTrailers = await Promise.all(
    movies.slice(0, 10).map(async (movie) => {
      const trailerRes = await axiosInstance.get(
        `/movie/${movie.id}/videos?language=en-US`
      );

      const videos = trailerRes.data.results;

      const trailer =
        videos.find((v: any) => v.type === "Trailer" && v.site === "YouTube") ||
        videos.find((v: any) => v.site === "YouTube");

      return {
        ...movie,
        trailerKey: trailer?.key || null,
      };
    })
  );
  return (
    <Carousel>
      <CarouselContent>
        {moviesWithTrailers.map((movie) => (
          <CarouselCard key={movie.id} movie={movie} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-[100px]" />
      <CarouselNext className="mr-[100px]" />
    </Carousel>
  );
};
