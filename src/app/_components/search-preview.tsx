import { searchMovies } from "@/lib/search-movies";
import { Cards } from "@/app/_components/card";
import Link from "next/link";

export async function SearchPreview({ query }: { query: string }) {
  if (!query) return null;

  const movies = await searchMovies(query);
  const preview = movies.slice(0, 5);
  console.log("Search query:", query);
  console.log("Movies from backend:", movies);
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md p-4 z-50">
      {preview.map((movie) => (
        <Cards key={movie.id} movie={movie} />
      ))}

      {movies.length > 5 && (
        <Link
          href={`/search?q=${encodeURIComponent(query)}`}
          className="block text-center mt-3 text-blue-600 hover:underline"
        >
          See more
        </Link>
      )}
    </div>
  );
}
