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
import { IconSearch } from "./assets/icon-search";

export type genreType = {
  id: number;
  name: string;
};

export const NavigationBar = () => {
  const [genres, setGenres] = useState<genreType[]>([]);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const el = document.getElementById("mobile-search");
      if (el && !el.contains(event.target as Node)) {
        setOpenSearch(false);
      }
    }

    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openSearch]);

  useEffect(() => {
    if (openSearch) {
      document.querySelector<HTMLInputElement>("input")?.focus();
    }
  }, [openSearch]);

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
    <div className="relative">
      <div className="h-[59px] flex justify-between items-center px-2 sm:px-4 bg-background border-b">
        <Link
          className="flex items-center gap-2 cursor-pointer p-1 rounded-md hover:bg-accent transition-colors shrink-0"
          href={"/"}
        >
          <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
            <IconMovie />
            <h2 className="text-lg font-bold  text-[#4338CA]">Movie Z</h2>
          </div>
        </Link>
        <div className="flex gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 py-1.5 px-2 rounded-md border">
              <ArrowDownn />
              <span>Genre</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-5 py-5 w-auto max-w-sm sm:max-w-md lg:max-w-lg">
              <DropdownMenuLabel>
                See lists of movies by genre
              </DropdownMenuLabel>
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

          <Button
            onClick={() => setOpenSearch((prev) => !prev)}
            className="min-[390px]:hidden justify-center"
            size="icon"
          >
            <IconSearch />
          </Button>

          <div className="hidden min-[390px]:block">
            <SearchInput />
          </div>
        </div>

        <Button size="icon" className="cursor-pointer">
          <IconMoon />
        </Button>
      </div>

      {openSearch && (
        <div
          id="mobile-search"
          className="min-[390px]:hidden w-full flex justify-center border-b shadow-md"
        >
          <div className="p-2">
            <SearchInput />
          </div>
        </div>
      )}
    </div>
  );
};
