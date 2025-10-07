import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";

export const CarouselCard = ({ movie }: { movie: MovieType }) => {
  const { poster_path, overview, vote_average, title } = movie;
  return (
    <CarouselItem>
      <div className="flex gap-[10px] relative text-white  ">
        <img
          className="bg-cover w-full h-[600px]"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <div className="absolute flex flex-col ml-[140px] mt-[178px] gap-[16px] w-[404px]">
          <div>
            <p>Now Playing</p>
            <h2 className="font-[700] text-[36px]">{title}</h2>
            <p className="flex gap-1 items-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {vote_average}/10
            </p>
          </div>
          <p>{overview}</p>
          <Button className="text-black w-[145px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33301 2L12.6663 8L3.33301 14V2Z"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Watch trailer
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
};
