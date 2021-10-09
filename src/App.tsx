import "./App.css";

import SearchInput from "./SearchInput";
import Button from "./Button";
import MovieModal from "./MovieModal";
import DeleteModal from "./DeleteModal";
import { useEffect, useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Movie from "./Movie";
import { IMovie, State } from "./store/types";
import useAppContext from "./store/useAppContext";
import MovieDetails from "./MovieDetails";

const MOVIES_LIST: IMovie[] = [
  {
    image: "./assets/pulp.png",
    name: "Pulp Fiction",
    category: "Action & Adventure",
    releaseDate: new Date("01-01-2004"),
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    duration: "2h 34min",
    rate: "8.9",
  },
  {
    image: "./assets/rapsody.png",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    releaseDate: new Date("01-01-2003"),
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    duration: "2h 34min",
    rate: "8.9",
  },
];

function App() {
  const onSearch = (searchTerm: any) => {
    alert(searchTerm);
  };

  const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [moviesList, setMoviesList] = useState<IMovie[]>(MOVIES_LIST);

  const [mode, setMode] = useState("add");

  const { currentMovie } = useAppContext() as State;

  let content = (
    <Header>
      <div className="header-header">
        <div className="netflix-roulette">
          <b>netflix</b>roulette
        </div>
        <div>
          <Button title="+ add movie" onClick={() => {}} />
        </div>
      </div>
      <div className="container-header">
        <div className="title-header">FIND YOUR MOViE</div>
        <SearchInput onSearch={onSearch} />
      </div>
    </Header>
  );

  if (currentMovie.name) {
    content = (
      <>
        <MovieDetails {...currentMovie} />
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
        }}
      >
        {moviesList.map((movie) => {
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
