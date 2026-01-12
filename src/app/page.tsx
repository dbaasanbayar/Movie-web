import { CarouselMovie } from "./_components/carousel";
import { UpComingMovie } from "./_components/upcomingmovie";
import { PopularMovie } from "./_components/popularmovie";
import { TopRatedMovie } from "./_components/topratedmovies";

export default function Home() {
  return (
    <div>
      <CarouselMovie />
      <div className="px-20">
        <UpComingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
    </div>
  );
}
