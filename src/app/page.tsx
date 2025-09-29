import Image from "next/image";
import { NavigationBar } from "./_components/navigationbar";
import { CarouselMovie } from "./_components/carousel";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <CarouselMovie />
    </div>
  );
}
