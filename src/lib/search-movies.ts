import { axiosInstance } from "@/app/_components/functions";

export type Movie = {
  id: number;
  title: string;
  posterUrl: string | null;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
};

const IMAGE_BASE = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w92";

export async function searchMovies(searchValue: string): Promise<Movie[]> {
  if (!searchValue) return [];

  const res = await axiosInstance.get("/search/movie", {
    params: {
      query: searchValue,
      language: "en-US",
      page: 1,
    },
  });

  return res.data.results.map((movie: Movie) => ({
    id: movie.id,
    title: movie.title || movie.original_title,
    poster_path: movie.poster_path
      ? `${IMAGE_BASE}${POSTER_SIZE}${movie.poster_path}`
      : `${IMAGE_BASE}${POSTER_SIZE}${movie.backdrop_path}`,
  }));
}
