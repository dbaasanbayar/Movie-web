import { axiosInstance } from "@/app/_components/functions";
import { MovieType } from "@/lib/type";
import { pages } from "next/dist/build/templates/app-page";

const IMAGE_BASE = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w92";

export async function searchMovies(
  searchValue: string,
  pages: number
): Promise<MovieType[]> {
  if (!searchValue) return [];

  const res = await axiosInstance.get("/search/movie", {
    params: {
      query: searchValue,
      language: "en-US",
      pages: 1,
    },
  });

  return res.data.results.map((movie: MovieType) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE}${POSTER_SIZE}${movie.poster_path}`
      : `${IMAGE_BASE}${POSTER_SIZE}${movie.backdrop_path}`,
  }));
}
