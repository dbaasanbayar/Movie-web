import { axiosInstance } from "@/app/_components/functions";
import { MovieType } from "@/lib/type";

export async function searchMovies(query: string): Promise<MovieType[]> {
  if (!query) return [];

  const res = await axiosInstance.get(
    `/search/movie?query=${query}&language=en-US&page=1`
  );
  return res.data.results;
}
