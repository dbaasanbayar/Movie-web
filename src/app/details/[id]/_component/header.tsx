import { IconStar } from "@/app/_components/assets/icon-star";
import { MovieType } from "@/lib/type";

export const MoviePageHeader = ({ movieData }: { movieData: MovieType }) => {
  const { title, release_date, adult, vote_average, vote_count } = movieData;
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:item-center w-full">
      <div>
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          {title}
        </h1>
        <div className="flex gap-3 text-sm sm:text-base text-muted-foreground mt-1">
          <p>{release_date}</p>
          <span>•</span>
          <p>{adult ? "18+" : "PG"}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Rating</p>

          <div className="flex items-center gap-1 justify-end">
            <IconStar />

            <span className="font-semibold text-base sm:text-lg">
              {vote_average.toFixed(1)}
            </span>

            <span className="text-sm text-muted-foreground">/10</span>
          </div>

          <p className="text-xs text-muted-foreground">
            {vote_count.toLocaleString()} votes
          </p>
        </div>
      </div>
    </div>
  );
};
