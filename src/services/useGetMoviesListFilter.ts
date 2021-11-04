import useAxios from "axios-hooks";
import { IMoviesList } from "./types";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setMoviesList } from "../MoviesSlice";

const useGetMoviesListFilter = (url: string) => {
  const dispatch: AppDispatch = useDispatch();

  const [{ data, loading, error }, getMoviesListFilter] = useAxios<IMoviesList>(
    url,
    {
      manual: true,
    }
  );

  const getMoviesFilter = async (genre: string, sortBy?: string) => {
    const { data: response } = await getMoviesListFilter({
      url:
        genre === "all"
          ? `http://localhost:4000/movies`
          : `http://localhost:4000/movies?${
              sortBy ? `?sortBy=${sortBy}&` : ""
            }filter=${genre}`,
    });

    dispatch(setMoviesList(response?.data));
  };

  return {
    data,
    loading,
    error,
    getMoviesFilter,
  };
};

export default useGetMoviesListFilter;
