"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { use } from "react";
import { Cards } from "@/app/_components/card";
import { axiosInstance } from "@/app/_components/functions";
import { Button } from "@/components/ui/button";
import { Genre, MovieType } from "@/lib/type";
import { useEffect, useState } from "react";

export default function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [page, setPages] = useState(1);
  const { genre } = use(params);

  useEffect(() => {
    const getGenre = async () => {
      try {
        const res = await axiosInstance.get(`/genre/movie/list?language=en`);
        setGenres(res.data.genres);
      } catch (error) {
        console.error("aldaa medegdeh");
      }
    };
    getGenre();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axiosInstance.get(
          `/discover/movie?language=en&with_genres=${genre}&page=${page}`
        );

        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [genre, page]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {genres.find((g) => g.id.toString() === genre)?.name || "Movies"}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} />
            ))}
          </div>

          {movies.length > 0 && (
            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPages((prev) => Math.max(1, prev - 1))}
              >
                Previous
              </Button>
              <span className="py-2 px-4 bg-muted rounded">Page {page}</span>
              <Button
                variant="outline"
                onClick={() => setPages((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
