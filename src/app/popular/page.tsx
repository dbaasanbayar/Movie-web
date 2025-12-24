// import { MovieType } from "@/lib/type";
// import { axiosInstance } from "../_components/functions";

// export default async function UpComingMoviesPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ page?: string }>;
// }) {
//   const sp = await searchParams;
//   const currentPage = Number(sp.page) || 1;

//   const response = await axiosInstance.get(
//     `/movie/upcoming?language=en-US&page=${currentPage}`
//   );
//   console.log(response.data.results);

//   const upcomingMovies: MovieType[] = response.data.results;
//   const totalPages = response.data.total_pages;

//   return (
//     <div>
//       <h2 className="text-[#09090B] font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.75px]">
//         Upcoming movies
//       </h2>
//     </div>
//   );
// }
