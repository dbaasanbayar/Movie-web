import Image from "next/image";
import { NavigationBar } from "./_components/navigationbar";
import { CarouselMovie } from "./_components/carousel";
import { UpComingMovie } from "./_components/upcomingmovie";
import { PopularMovie } from "./_components/popularmovie";
import { TopRatedMovie } from "./_components/topratedmovies";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div>
      <CarouselMovie />
      <div className="pl-[80] pr-[80px]">
        <UpComingMovie />
        <PopularMovie />
        <TopRatedMovie />
      </div>
    </div>
  );
}
