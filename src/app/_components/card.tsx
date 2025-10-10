import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieType } from "@/lib/type";
import Link from "next/link";
type MoviePropsType = {
  movie: MovieType;
};
export const Cards = ({ movie }: { movie: MovieType }) => {
  const { poster_path, vote_average, title, id } = movie;
  return (
    <Link href={`/details/${id}`}>
      <Card className="bg-amber-300 pt-0 pb-0 w-[230px] h-[439px] overflow-hidden">
        <CardContent className="bg-gray-100 p-0 flex flex-col w-[230px] h-[439px] ">
          <img
            className="w-229.73 h-[340px]"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
          <div className="pl-2 flex flex-col p-2">
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                <span>{vote_average}</span>/10
              </p>
            </div>
            <h1>{title}</h1>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
