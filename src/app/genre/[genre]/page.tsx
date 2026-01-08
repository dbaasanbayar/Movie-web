"use client";

import { use } from "react";
import { Cards } from "@/app/_components/card";
import { axiosInstance } from "@/app/_components/functions";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/type";
import { useEffect, useState } from "react";
import Link from "next/link";

type Genre = {
  id: number;
  name: string;
};

export default function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [page, setPages] = useState(1);
  const { genre } = use(params);

  console.log({ genre });

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
        console.log("get movie data", res.data.results);
        setMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [genre, page]);

  return (
    <div className="flex">
      <div className="w-[30%] border-r px-5">
        {genres.map((genre) => (
          <Button key={genre.id} asChild>
            <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
          </Button>
        ))}
      </div>
      <div className="[w-70%] px-5">
        <h2>{genre}</h2>
        <div className="flex flex-wrap gap-2">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
