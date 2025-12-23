import { MovieType } from "@/lib/type";

export const MoviePageHeader = ({ movieData }: { movieData: MovieType }) => {
  const { title, release_date, adult, vote_average, vote_count } = movieData;
  return (
    <div className="flex justify-between w-full">
      <div>
        <p className="text-[36px] font-[700]">{title}</p>
        <div className="text-6 font-[400]">
          <p>{release_date}</p>
          <p>{adult}</p>
        </div>
      </div>
      <div>
        <p className="font-[500] text-[12px]">Rating</p>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M12.9997 1.33325L16.6047 8.63659L24.6663 9.81492L18.833 15.4966L20.2097 23.5233L12.9997 19.7316L5.78967 23.5233L7.16634 15.4966L1.33301 9.81492L9.39467 8.63659L12.9997 1.33325Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className="text-[16px font-[600]">{vote_average}</span>/10
            <p className="text-3 font-[400]">{vote_count}k</p>
          </div>
        </div>
      </div>
    </div>
  );
};
