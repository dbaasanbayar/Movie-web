import { MovieType } from "@/lib/type";
import { axiosInstance } from "../_components/functions";
import { Cards } from "../_components/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function PopularMoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const currentPage = Number(sp.page) || 1;
  const response = await axiosInstance.get(
    `/movie/popular?language=en-US&page=${currentPage}`
  );

  const popularMovies: MovieType[] = response.data.results;
  const totalPages = response.data.total_pages;
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 xl:px-10 py-8 md:py-12 mx-auto max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#09090B] mb-8 md:mb-10 tracking-tight">
        Popular movies
      </h2>
      <div
        className="
          grid 
          grid-cols-2        
          gap-4 sm:gap-6     
          sm:grid-cols-3     
          md:grid-cols-3     
          lg:grid-cols-4     
          xl:grid-cols-5     
          2xl:grid-cols-6    
        "
      >
        {popularMovies.map((movie) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6 mt-10 md:mt-12">
          <Link href={`/popular?page=${currentPage - 1}`}>
            <Button
              disabled={currentPage === 1}
              variant="outline"
              className="w-full sm:w-auto min-w-[120px]"
            >
              Previous
            </Button>
          </Link>
          <span className="text-base sm:text-lg font-medium text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Link href={`/popular?page=${currentPage + 1}`}>
            <Button
              disabled={currentPage === totalPages}
              variant="outline"
              className="w-full sm:w-auto min-w-[120px]"
            >
              Next
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
