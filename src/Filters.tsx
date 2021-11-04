import React, { useState } from "react";
import "./Filters.css";
import useGetMoviesListFilter from "./services/useGetMoviesListFilter";

interface IProps {}

const Filters: React.FC<IProps> = ({}) => {
  const [option, setOption] = useState();
  const [currentGenre, setCurrentGenre] = useState("all");

  const { getMoviesFilter } = useGetMoviesListFilter("");

  const getMoviesFiltered = async (genre: string, sortBy?: string) => {
    await getMoviesFilter(genre, sortBy);
    setCurrentGenre((_) => genre);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    let sortBy = e.target.value;
    setOption((_) => e.target.value);
    getMoviesFiltered(currentGenre, sortBy);
  };

  return (
    <div className="filters-container">
      <div className="buttonsf-container">
        <button
          className="btn-filter"
          onClick={() => {
            getMoviesFiltered("all");
          }}
        >
          All
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            getMoviesFiltered("documentary");
          }}
        >
          Documentary
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            getMoviesFiltered("comedy");
          }}
        >
          Comedy
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            getMoviesFiltered("horror");
          }}
        >
          Horror
        </button>
        <button
          className="btn-filter"
          onClick={() => {
            getMoviesFiltered("cine");
          }}
        >
          Cine
        </button>
      </div>
      <div className="sort-container">
        <span className="sortby-label">Sort By</span>
        <select
          name="select"
          className="select-filter"
          value={option}
          onChange={handleChange}
        >
          <option value="release_date">Release Date</option>
          <option value="title">name</option>
          <option value="genres">category</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
