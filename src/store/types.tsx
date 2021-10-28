export interface State {
  currentMovie: IMovie;
  setCurrentMovie: React.Dispatch<IMovie>;
  cleanState: () => void;
}

export interface IMovie {
  id?: string;
  image: string;
  name: string;
  releaseDate: Date | null;
  category: string;
  description?: string;
  rate?: string;
  duration?: string;
}
