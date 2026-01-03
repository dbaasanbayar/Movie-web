import { searchMovies } from "@/lib/search-movies";
import { Cards } from "@/app/_components/card";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";
  const movies = await searchMovies(query);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Cards key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
