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
      <Card className="group rounded-lg hover:shadow-lg border overflow-hidden">
        <CardContent className="p-0 flex flex-col h-full">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          <div className="p-2 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm">
              <IconStar />
              <span className="font-medium">{vote_average}</span>
              <span className="text-muted-foreground">/10</span>
            </div>
            <h3 className="font-semibold text-base line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
