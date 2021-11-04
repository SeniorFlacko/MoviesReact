import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Movie from "./Movie";
import { IMovie } from "./services/types";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [] as IMovie[],
    selectedMovie: {} as IMovie,
  },
  reducers: {
    setMoviesList: (state, action) => {
      state.movies = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<IMovie>) => {
      state.selectedMovie = action.payload;
    },
  },
});
// each case under reducers becomes an action
export const { setMoviesList, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
