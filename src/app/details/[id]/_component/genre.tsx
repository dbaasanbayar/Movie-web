import { crewType, genresType, MovieType } from "@/lib/type"

import { axiosInstance } from "@/app/_components/functions"

export async function MovieGenre ({movieData} : {movieData : MovieType} ) {
    const {genres, overview, id} = movieData

    const getCredits = async (id: number) => { 
        const response = await axiosInstance.get(`/movie/${id}/credits?language=en-US` );
        return response.data
    }
 
    const credits = await getCredits(id)
    console.log(credits, "REsponSE")
    const directors = credits.crew.filter((director: crewType) => director.job === "Producer");
    // const topCast = cast.slice(0, 3);
   
    return(
        <div>
            <div className="flex gap-3">
            {movieData.genres.map((genre :genresType ) => {
                return(<div className="border-1 rounded-md px-1 py-1" key={genre.id}>{genre.name}</div>)
            })}
            </div>
            <p className="mb-5 mt-5">{overview}</p>
            <div>
                <div>
                    {directors.map((director : crewType) => {
                        <p>{director.job}</p>
                    })}
                    <p></p>
                </div>
            </div>
        </div>
    )
}

