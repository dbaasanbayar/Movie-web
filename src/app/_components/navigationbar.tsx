"use client";
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
import { IconMovie } from "./assets/icon-movie";
import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { ArrowDownn } from "./assets/arrow-down";
import { IconSearch } from "./assets/icon-search";
import { IconMoon } from "./assets/icon-moon";

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
      <Link
        className={`cursor-pointer p-1 rounded hover:bg-gray-200`}
        href={"/"}
      >
        <div className="flex items-center gap-2">
          <IconMovie />
          <h2>Movie Z</h2>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 cursor-pointer items-center p py-1 px-2 border-1 rounded-md">
            <ArrowDownn />
            <span>Genre</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-5 py-5 ">
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex w-[577px] py-4 gap-4 flex-wrap ">
              {genres.map((genre, i) => {
                return (
                  <DropdownMenuItem key={i} className="border-1 w-fit">
                    <span>{genre}</span>
                    <ChevronRight />
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center">
          <IconSearch />
          <Input className="relative pl-10" placeholder="Search.." />
        </div>
      </div>
      <div>
        <Button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="w-[36px] cursor-pointer"
        >
          <IconMoon />
        </Button>
      </div>
    </div>
  );
};
