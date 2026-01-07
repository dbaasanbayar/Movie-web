"use client";

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
import { ArrowDownn } from "./assets/arrow-down";
import { IconMoon } from "./assets/icon-moon";
import { SearchInput } from "./search-input";
import { useEffect, useState } from "react";
import { axiosInstance } from "./functions";

export type genreType = {
  id: number;
  name: string;
};

export const NavigationBar = () => {
  const [genres, setGenres] = useState<genreType[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axiosInstance.get(`/genre/movie/list?language=en`);
        setGenres(res.data.genres);
        console.log("data awah", res.data.genres);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="h-[59px] flex justify-between items-center px-4">
      <Link
        className={`cursor-pointer p-1 rounded hover:bg-gray-200`}
        href={"/"}
      >
        <div className="flex items-center gap-2">
          <IconMovie />
          <h2 className="text-[16px] font-inter leading-[20px] tracking-[0.32px] text-[#4338CA] font-[700]">
            Movie Z
          </h2>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 h-10 px-4 rounded-md border">
            <ArrowDownn />
            <span>Genre</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-5 py-5 w-auto max-w-sm sm:max-w-md lg:max-w-lg">
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Link key={genre.id} href={`/genre/${genre.name}`}>
                  <Button className="hover:bg-muted flex-none">
                    {genre.name}
                  </Button>
                </Link>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <SearchInput />
      </div>
      <div>
        <Button
          // onClick={() => document.documentElement.classList.toggle("dark")}
          className="w-[36px] cursor-pointer"
        >
          <IconMoon />
        </Button>
      </div>
    </div>
  );
};
