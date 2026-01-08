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
      } catch (error) {
        console.error("Failed to fetch genres", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="h-[59px] flex justify-between items-center px-2 bg-background border-b">
      <Link
        className={`flex items-center gap-2 cursor-pointer p-1 rounded-md  hover:bg-accent transition-colors`}
        href={"/"}
      >
        <div className="flex items-center gap-2">
          <IconMovie />
          <h2 className="text-lg font-bold  text-[#4338CA]">Movie Z</h2>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 py-2 px-2 rounded-md border">
            <ArrowDownn />
            <span>Genre</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-5 py-5 w-auto max-w-sm sm:max-w-md lg:max-w-lg">
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
              {genres.map((genre) => (
                <Link key={genre.id} href={`/genre/${genre.id}`}>
                  <DropdownMenuItem className="hover:bg-muted border">
                    {genre.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <SearchInput />
      </div>
      <div className="w-10 h-10 rounded-full">
        <Button
          size="icon"
          // onClick={() => document.documentElement.classList.toggle("dark")}
          className="cursor-pointer"
        >
          <IconMoon />
        </Button>
      </div>
    </div>
  );
};
