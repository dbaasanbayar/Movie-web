import { crewType, genresType, MovieType, castType } from "@/lib/type";
import { idProps } from "@/lib/type";
import { axiosInstance } from "@/app/_components/functions";

export async function MovieGenre({ movieData }: { movieData: MovieType }) {
  const { genres, overview, id } = movieData;

  const getCredits = async (movieId: number) => {
    const response = await axiosInstance.get(
      `/movie/${id}/credits?language=en-US`
    );
    return response.data;
  };
  const credits = await getCredits(id);

  const directors = credits.crew.filter(
    (director: crewType) => director.job === "Director"
  );
  const writers = credits.crew.filter(
    (writer: crewType) => writer.job === "Screenplay" || writer.job === "Writer"
  );

  return (
    <div>
      <div className="flex gap-3">
        {movieData.genres.map((genre: genresType) => {
          return (
            <div className="border-1 rounded-md px-1 py-1" key={genre.id}>
              {genre.name}
            </div>
          );
        })}
      </div>
      <p className="mb-5 mt-5">{overview}</p>
      <div>
        <div className="flex gap-2">
          <p>Director:</p>
          {directors.map((director: crewType) => {
            return <p key={director.name}>{director.name}</p>;
          })}
        </div>
        <div className="flex gap-2">
          <p>Writers:</p>
          {writers.map((writer: crewType) => {
            return <p key={writer.name}>{writer.name}</p>;
          })}
        </div>
        <div className="flex gap-2">
          <p>Casts:</p>
          {credits.cast.slice(0, 4).map((casting: castType) => {
            return <p key={casting.name}>{casting.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
