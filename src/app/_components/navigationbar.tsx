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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMovie } from "./assets/icon-movie";
import Link from "next/link";
import { ArrowDownn } from "./assets/arrow-down";
import { IconSearch } from "./assets/icon-search";
import { IconMoon } from "./assets/icon-moon";

export const NavigationBar = () => {
  // const [genres, setGen]
  // const getGenres =()=>{}
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) {
        router.push(`?q=${encodeURIComponent(query)}`);
      } else {
        router.replace("?");
      }
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [query, router]);

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
          <DropdownMenuTrigger className="flex gap-2 cursor-pointer items-center p py-1 px-2 border-1 rounded-md">
            <ArrowDownn />
            <span>Genre</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-5 py-5 ">
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center">
          <IconSearch />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="relative pl-10"
            placeholder="Search.."
          />
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
