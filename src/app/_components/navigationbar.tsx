import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export const NavigationBar = () => {
  return (
    <div className="h-[59px] flex justify-between items-center px-4">
      <div className="flex gap-2">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1>Movie Z</h1>
      </div>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center p py-1 px-2 border-1 rounded-md">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6.5L8 10.5L12 6.5"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Genre</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-5 py-5 ">
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex w-[577px] py-4 gap-4 flex-wrap ">
              {genres.map((genre, i) => {
                return (
                  <DropdownMenuItem className="border-1 w-fit">
                    <p key={i}>{genre}</p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="#09090B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center">
          <svg
            className="absolute ml-4"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M6.93359 3.1333C9.30835 3.1333 11.2333 5.05837 11.2334 7.43311C11.2334 8.44873 10.8824 9.38107 10.2939 10.1167L10.0137 10.4663L13.3574 13.8101C13.3638 13.8166 13.3672 13.825 13.3672 13.8335L13.3574 13.8569C13.3444 13.8698 13.3236 13.8697 13.3105 13.8569L9.9668 10.5132L9.61719 10.7935C8.88156 11.3819 7.94922 11.7329 6.93359 11.7329C4.55886 11.7328 2.63379 9.80786 2.63379 7.43311C2.63389 5.05844 4.55893 3.13341 6.93359 3.1333ZM6.93359 3.19971C4.59574 3.19981 2.7003 5.09525 2.7002 7.43311C2.7002 9.77105 4.59567 11.6664 6.93359 11.6665C9.2716 11.6665 11.167 9.77111 11.167 7.43311C11.1669 5.09519 9.27154 3.19971 6.93359 3.19971Z"
                fill="#09090B"
                stroke="#09090B"
              />
            </g>
          </svg>
          {/* <img className="absolute p-4" src="Vector.png" alt="" /> */}
          <Input className="relative pl-10" placeholder="Search.." />
        </div>
      </div>
      <div>
        <Button className="w-[36px]">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.5C7.20435 3.29565 6.75736 4.37478 6.75736 5.5C6.75736 6.62522 7.20435 7.70435 8 8.5C8.79565 9.29565 9.87478 9.74264 11 9.74264C12.1252 9.74264 13.2044 9.29565 14 8.5C14 9.68669 13.6481 10.8467 12.9888 11.8334C12.3295 12.8201 11.3925 13.5892 10.2961 14.0433C9.19975 14.4974 7.99335 14.6162 6.82946 14.3847C5.66558 14.1532 4.59648 13.5818 3.75736 12.7426C2.91825 11.9035 2.3468 10.8344 2.11529 9.67054C1.88378 8.50666 2.0026 7.30026 2.45673 6.2039C2.91085 5.10754 3.67989 4.17047 4.66658 3.51118C5.65328 2.85189 6.81331 2.5 8 2.5Z"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
