import "./App.css";

import SearchInput from "./SearchInput";
import Button from "./Button";
import MovieModal from "./MovieModal";
import DeleteModal from "./DeleteModal";
import { useEffect, useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import { State } from "./store/types";
import useAppContext from "./store/useAppContext";
import MovieDetails from "./MovieDetails";
import { useSelector, useDispatch } from "react-redux";
import { setMoviesList } from "./MoviesSlice";
import { AppDispatch, RootState } from "./store";
import useGetMoviesList from "./services/useGetMoviesList";
import Movie from "./Movie";

function App() {
  const onSearch = (searchTerm: any) => {
    alert(searchTerm);
  };

  const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const movsList = useSelector((state: RootState) => state.movies);

  const dispatch: AppDispatch = useDispatch();

  const [mode, setMode] = useState("add");

  const { data: response } = useGetMoviesList();

  useEffect(() => {
    dispatch(setMoviesList(response?.data));
    console.log(response?.data);
  }, [response?.data]);

  let content = (
    <Header>
      <div className="header-header">
        <div className="netflix-roulette">
          <b>netflix</b>roulette
        </div>
        <div>
          <Button
            title="+ add movie p"
            onClick={async () => {
              console.log(movsList);
            }}
          />
        </div>
      </div>
      <div className="container-header">
        <div className="title-header">FIND YOUR MOViE</div>
        <SearchInput onSearch={onSearch} />
      </div>
    </Header>
  );

  if (movsList.selectedMovie.title) {
    content = (
      <>
        <MovieDetails {...movsList.selectedMovie} />
      </>
    );
  }

  return (
    <div className="App">
      {content}
      <Filters />

      <div
        style={{
          display: "flex",
          margin: "auto 100px",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {movsList?.movies?.map((movie) => {
          return <Movie {...movie} />;
        })}
      </div>

      <Button
        title="+ add movie"
        onClick={() => {
          setMovieModalIsOpen(true);
          setMode("add");
        }}
      />
      <Button
        title="Edit"
        onClick={() => {
          setMovieModalIsOpen(true);
          setMode("edit");
        }}
      />
      <Button
        title="Delete"
        onClick={() => {
          setDeleteModalIsOpen(true);
        }}
      />

      <MovieModal
        modalIsOpen={movieModalIsOpen}
        setIsOpen={setMovieModalIsOpen}
        mode={mode}
      />
      <DeleteModal
        modalIsOpen={deleteModalIsOpen}
        setIsOpen={setDeleteModalIsOpen}
      />
    </div>
  );
}

export default App;
