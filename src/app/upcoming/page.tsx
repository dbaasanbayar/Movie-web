import { MovieType } from "@/lib/type";
import { axiosInstance } from "../_components/functions";
import { Cards } from "../_components/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function UpComingMoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const currentPage = Number(sp.page) || 1;

  const response = await axiosInstance.get(
    `/movie/upcoming?language=en-US&page=${currentPage}`
  );
  // console.log(response.data.results);

  const upcomingMovies: MovieType[] = response.data.results;
  const totalPages = response.data.total_pages;

  return (
    <div className="flex flex-col mx-auto gap-8 px-[80px]">
      <h2 className="text-[#09090B] font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.75px]">
        Upcoming movies
      </h2>
      <div className="flex flex-wrap gap-2">
        {upcomingMovies.slice(0, 10).map((movie) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-6 mt-12">
          <Link href={`/upcoming?page=${currentPage - 1}`}>
            <Button disabled={currentPage === 1} variant="outline">
              Previous
            </Button>
          </Link>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Link href={`/upcoming?page=${currentPage + 1}`}>
            <Button disabled={currentPage === totalPages} variant="outline">
              Next
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
