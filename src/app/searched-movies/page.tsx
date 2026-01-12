"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchMovies } from "@/lib/search-movies";
import { Genre, MovieType } from "@/lib/type";
import { Cards } from "../_components/card";
import { axiosInstance } from "../_components/functions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SkeletonCard } from "../_components/skeleton-card";

export default function SearchedMovies() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const pageFromUrl = Number(searchParams.get("page") || 1);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const results = await searchMovies(query, currentPage);
        setMovies(results || []);
      } catch (err) {
        console.error(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query, currentPage]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axiosInstance.get(`/genre/movie/list?language=en`);
        setGenres(res.data.genres);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="px-3 sm:px-5 md:px-6 lg:px-8 py-6 md:py-8">
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-5">
        Search results for "{query}"
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-full md:w-2/3 md:border-r md:pr-6 lg:pr-8">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : movies.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No movies found matching "{query}"
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {movies.map((movie) => (
                <Cards movie={movie} key={movie.id} />
              ))}
            </div>
          )}
          {!loading && movies.length > 0 && (
            <div className="flex justify-center items-center mt-8 md:mt-12 gap-3 sm:gap-6">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => {
                  const prev = Math.max(1, currentPage - 1);
                  setCurrentPage(prev);
                  router.push(
                    `/searched-movies?query=${encodeURIComponent(
                      query
                    )}&page=${prev}`
                  );
                }}
              >
                Previous
              </Button>

              <span className="px-5 py-2.5 bg-muted rounded-md text-sm sm:text-base">
                Page {currentPage}
              </span>

              <Button
                variant="outline"
                onClick={() => {
                  const next = currentPage + 1;
                  setCurrentPage(next);
                  router.push(
                    `/searched-movies?query=${encodeURIComponent(
                      query
                    )}&page=${next}`
                  );
                }}
              >
                Next
              </Button>
            </div>
          )}
        </div>

        {/* Genres sidebar */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold mb-4 text-lg">Search by genre</h3>
          <div className="flex flex-wrap md:flex-col gap-2 md:gap-3 pb-3 md:pb-0 ">
            {genres.map((genre) => (
              <Button
                key={genre.id}
                size="sm"
                variant="outline"
                asChild
                className="whitespace-nowrap flex-shrink-0"
              >
                <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
