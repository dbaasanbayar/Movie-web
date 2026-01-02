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
    <div className="flex gap-[32px] w-full">
      <img
        className="w-[30%] h-[428px]"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <div className="w-[70%] flex items-end relative">
        <div>
          <img
            className="h-[428px]"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          />
        </div>
        <TrailerBox trailer={trailer} />
      </div>
    </div>
  );
};
