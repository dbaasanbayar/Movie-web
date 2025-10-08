import axios from "axios";
export const getImageUrl = (imagePath: string, width: number = 500) => {
  return;
};
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  },
});
