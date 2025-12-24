export type MovieType = {
  adult?: boolean;
  backdrop_path: string;
  genres: genresType[];
  id: string;
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
export type genresType = {
  name: string;
  id: string;
};

export type initType = {
  crew: crewType[];
  cast: castType[];
  id?: string;
};

export type crewType = {
  id: string;
  name: string;
  gender: string;
  job: string;
};

export type castType = {
  [x: string]: any;
  id: string;
  name: string;
  job: string;
  order: number;
};

export type idProps = {
  params: {
    id: string;
  };
};
