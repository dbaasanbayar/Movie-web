export type MovieType = {
  adult: boolean;
  backdrop_path: string;
 genres:genresType[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

};
export type genresType ={
  name:string
  id:number
}

export type initType = {
  crew: crewType[];
  cast: castType[];
  id?: number;
};
 
export type crewType = {
  id: number;
  name: string;
  gender: string;
  job: string;
};
 
 
export type castType = {
  [x: string]: any;
  id: number;
  name: string;
    job: string;
  order: number;
};