import { crewType, genresType, MovieType, castType } from "@/lib/type";
import { axiosInstance } from "@/app/_components/functions";

export async function MovieGenre({ movieData }: { movieData: MovieType }) {
  const { overview, id, genres } = movieData;

  const response = await axiosInstance.get(
    `/movie/${id}/credits?language=en-US`
  );

  const credits = response.data;

  const directors = credits.crew.filter(
    (director: crewType) => director.job === "Director"
  );
  const writers = credits.crew.filter(
    (writer: crewType) => writer.job === "Screenplay" || writer.job === "Writer"
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {movieData.genres.map((genre: genresType) => {
          return (
            <span
              className="border text-xs sm:text-sm bg-muted/40 whitespace-nowrap rounded-full px-3 py-1"
              key={genre.id}>
              {genre.name}
            </span>
          );
        })}
      </div>
      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
        {overview}
      </p>
      <div className="flex flex-col gap-3 text-sm sm:text-base">
        <InfoRow
          label="Director"
          values={directors.map((director: crewType) => director.name)}
        />
        <InfoRow
          label="Writers"
          values={directors.map((writer: crewType) => writer.name)}
        />
        <InfoRow
          label="Cast"
          values={credits.cast
            .slice(0, 4)
            .map((casting: castType) => casting.name)}
        />
      </div>
    </div>
  );
}

function InfoRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      <span className="font-semibold">{label}:</span>
      <span className="text-muted-foreground">{values.join(", ")}</span>
    </div>
  );
}
