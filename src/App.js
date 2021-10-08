import "./App.css";

import SearchInput from "./SearchInput";
import Title from "./Title";
import Button from "./Button";
import MovieModal from "./MovieModal";
import DeleteModal from "./DeleteModal";
import React, { useState } from "react";

function App() {
  const onSearch = (searchTerm) => {
    alert(searchTerm);
  };

  const [movieModalIsOpen, setMovieModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const [mode, setMode] = useState("add");

  return (
    <div className="App">
      <Title title="Search Title" />
      <SearchInput onSearch={onSearch} />
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
