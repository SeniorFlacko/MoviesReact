import useAxios from "axios-hooks";
import { IMoviesList } from "./types";

const useGetMoviesList = () => {
  const [{ data, loading, error }, getMoviesList] = useAxios<IMoviesList>(
    `http://localhost:4000/movies`,
    { manual: false }
  );

  return {
    data,
    loading,
    error,
    getMoviesList,
  };
};

export default useGetMoviesList;
