
import { MovieType } from "@/lib/type"
import {Button} from "@/components/ui/button"

export const TrailerContainer = ({movieData} : {movieData : MovieType}) => {
    const { backdrop_path, poster_path } = movieData
return ( 
<div className="flex gap-[32px] w-full">
    <img className="w-[30%] h-[428px]" src= {`https://image.tmdb.org/t/p/w500${poster_path}`}  />
    <div className="w-[70%] flex items-end relative">
        <div><img className="h-[428px]" src= {`https://image.tmdb.org/t/p/w500${backdrop_path}`}  />
        </div>
        <div className="flex gap-3 absolute mb-[24px] ml-[24px] text-white items-center">
        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Button>
            <p>Play trailer </p>
            <p></p>
        </div>
    </div>
    
   
</div>)
}