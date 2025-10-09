import { axiosInstance } from "@/app/_components/functions";

const MovieDetails = ({ params: { id } }: { params: { id: number } }) => {
  console.log(id, "init");
  axiosInstance.get(`/movie/${movieId}?language=en-US`);
  return <div>{movie.id}</div>;
};
export default MovieDetails;
