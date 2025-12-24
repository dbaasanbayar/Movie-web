import { MovieType } from "@/lib/type";
import { axiosInstance } from "../../../_components/functions";
import { Cards } from "@/app/_components/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function SimilarMoviesPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  console.log("--- DEBUG START ---");
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const sp = await searchParams;
  const currentPage = Number(sp.page) || 1;

  const response = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=${currentPage}`
  );

  const similarMovies: MovieType[] = response.data.results;
  const totalPages = response.data.total_pages;
  console.log(response.data);

  return (
    <div className="flex flex-col gap-8 px-[80px]">
      <h2 className="text-[#09090B] font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.75px]">
        More like this
      </h2>
      <div className="flex flex-wrap gap-2">
        {similarMovies.slice(0, 10).map((movie: MovieType) => {
          return <Cards movie={movie} key={movie.id} />;
        })}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-4 mt-12">
          <Link href={`/details/${id}/similar?page=${currentPage - 1}`}>
            <Button disabled={currentPage === 1}>Previous</Button>
          </Link>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <Link href={`/details/${id}/similar?page=${currentPage + 1}`}>
            <Button disabled={currentPage === totalPages}>Next</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
