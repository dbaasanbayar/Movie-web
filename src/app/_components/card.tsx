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
import { IconStar } from "./assets/icon-star";
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
              <IconStar />
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
