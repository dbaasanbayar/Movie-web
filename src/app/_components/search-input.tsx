"use client";

import { useEffect, useState, useRef } from "react";
import { IconSearch } from "./assets/icon-search";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { searchMovies, Movie } from "@/lib/search-movies";
import Link from "next/link";

export function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchValue) {
      setMovies([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await searchMovies(searchValue);
        console.log("Movie Coming:", results);
        setMovies(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  let filteredMovies = movies;
  const value = searchValue.toLowerCase().trim();

  if (value.length < 2) {
    filteredMovies = [];
  } else {
    const prefixMatches = movies
      .filter((movie) => movie.title.toLowerCase().startsWith(value))
      .sort((a, b) => a.title.length - b.title.length);

    const wordStartMatches = movies.filter(
      (movie) =>
        movie.title
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(value)) &&
        !movie.title.toLowerCase().startsWith(value)
    );

    const includesMatches = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(value) &&
        !movie.title.toLowerCase().startsWith(value)
    );
    filteredMovies = [
      ...prefixMatches,
      ...wordStartMatches,
      ...includesMatches,
    ];
  }

  const handleSelectMovie = (movie: { id: number; title: string }) => {
    router.push(`/details/${movie.id}`);
    setSearchValue("");
    console.log("Selected movie:", movie.id);
    setHighlightedIndex(-1);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSearchValue("");
        setHighlightedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [searchValue]);

  return (
    <div className="flex items-center relative w-full max-w-md">
      <IconSearch />
      <Input
        className="relative pl-10"
        value={searchValue}
        placeholder="Search.."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (filteredMovies.length === 0) return;

          if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
              prev < filteredMovies.length - 1 ? prev + 1 : 0
            );
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prev) =>
              prev > 0 ? prev - 1 : filteredMovies.length - 1
            );
          } else if (e.key === "Enter") {
            e.preventDefault();
            if (highlightedIndex >= 0) {
              handleSelectMovie(filteredMovies[highlightedIndex]);
            }
          }
        }}
      />
      {searchValue && filteredMovies.length > 0 && (
        <Card className="absolute top-12 z-1 w-full p-2 shadow-lg">
          {loading && (
            <p className="px-2 py-1 text-sm text-muted-foreground">
              Loading...
            </p>
          )}
          {!loading && movies.length === 0 && (
            <p className="px-2 py-1 text-sm text-muted-foreground">
              No results found
            </p>
          )}
          <ul className="overflow-y-auto">
            {filteredMovies.slice(0, 10).map((movie, id) => (
              <li
                key={movie.id}
                onClick={() => handleSelectMovie(movie)}
                className={`cursor-pointer hover:font-semibold rounded px-2 py-1 hover:bg-muted ${
                  highlightedIndex === id ? "bg-muted font-semibold" : ""
                }`}
              >
                <div className="flex gap-2 items-center">
                  {movie.poster_path ? (
                    <img
                      src={movie.poster_path}
                      alt={`${movie.title}`}
                      className="w-12 h-16 object-cover rounded shadow-sm flex-shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-18 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-gray-500">No image</span>
                    </div>
                  )}
                  <span className="truncate">{movie.title}</span>
                </div>
              </li>
            ))}
            <Link href={"/searched-movies"}>
              <div className="cursor-pointer hover:bg-muted">
                See all results for{" "}
                <span className="font-semibold">{searchValue}</span>
              </div>
            </Link>
          </ul>
        </Card>
      )}
    </div>
  );
}
