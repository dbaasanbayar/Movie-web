"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/lib/search-movies";
import Link from "next/link";
import { MovieType } from "@/lib/type";

export function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!searchValue) {
      setMovies([]);
      setHighlightedIndex(-1);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await searchMovies(searchValue.trim());
        setMovies(results);
        setHighlightedIndex(-1);
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
  useEffect(() => {
    const listEl = listRef.current;
    const inputEl = inputRef.current;
    const wrapperEl = wrapperRef.current;

    if (!listEl || !inputEl || !wrapperEl) return;

    const maxWidth = 375;
    const minWidth = 160;

    let widest = 0;

    const items = listEl.querySelectorAll("li");

    items.forEach((li) => {
      widest = Math.max(widest, li.scrollWidth);
    });

    const padding = 40;
    const finalWidth = Math.min(Math.max(widest + padding, minWidth), maxWidth);

    inputEl.style.width = `${finalWidth}px`;
    wrapperEl.style.width = `${finalWidth}px`;
  }, [filteredMovies, searchValue]);

  const handleSelectMovie = (movie: MovieType) => {
    router.push(`/details/${movie.id}`);
    setSearchValue("");
    setHighlightedIndex(-1);
    inputRef.current?.blur();
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
    <div
      ref={wrapperRef}
      className={`relative transition-all duration-200 
    w-[160px] 
    min-[375px]:w-[200px] 
    sm:w-[260px] 
    md:w-[320px] 
    max-w-full
   `}
    >
      <Input
        ref={inputRef}
        className="relative h-10 w-full max-w-md"
        value={searchValue}
        autoComplete="off"
        placeholder="Search..."
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
        <Card className="absolute top-12 z-50 w-full p-2 bg-background border shadow-lg">
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
          <ul ref={listRef} className="overflow-y-auto">
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
            <Link
              href={`/searched-movies?query=${encodeURIComponent(searchValue)}`}
              onClick={() => setSearchValue("")}
            >
              <div className="cursor-pointer hover:bg-muted px-2 py-1">
                See all results for
                <span className="font-semibold ml-1">{searchValue}</span>
              </div>
            </Link>
          </ul>
        </Card>
      )}
    </div>
  );
}
