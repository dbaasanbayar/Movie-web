import { axiosInstance } from "@/app/_components/functions";
import { TrailerBox } from "@/app/details/[id]/_component/trailer-box";
import { MovieType } from "@/lib/type";

export const TrailerContainer = async ({
  movieData,
}: {
  movieData: MovieType;
}) => {
  const { backdrop_path, poster_path, id } = movieData;

  const response = await axiosInstance.get(
    `/movie/${id}/videos?language=en-US`
  );
  const trailer =
    response.data.results?.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube"
    ) || response.data.results?.find((v: any) => v.site === "YouTube");

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full items-stretch">
      <img
        className="w-full sm:w-[260px] lg:w-[300px] h-auto object-cover rounded-md shadow"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Poster"
        loading="lazy"
      />
      <div className=" flex-1 relative">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt="Backdrop"
          loading="lazy"
        />
        <div className="absolute inset-1 flex flex-col justify-end">
          <TrailerBox trailer={trailer} />
        </div>
      </div>
    </div>
  );
};
