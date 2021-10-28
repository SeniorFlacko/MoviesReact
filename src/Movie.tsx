import React from "react";
import "./Movie.css";
import { IMovie, State } from "./store/types";
import useAppContext from "./store/useAppContext";

interface IProps extends IMovie {}

const Movie: React.FC<IProps> = ({
  id,
  image,
  name,
  releaseDate,
  category,
  description,
  rate,
  duration,
}) => {
  const { setCurrentMovie } = useAppContext() as State;

  return (
    <div className="movie-container">
      <img
        alt=""
        src={image}
        className="movie-image"
        onClick={() => {
          setCurrentMovie({
            id,
            name,
            releaseDate,
            category,
            image,
            description,
            rate,
            duration,
          });
        }}
      />
      <div className="movie-field">
        <div className="movie-name">{name}</div>
        <div className="movie-releaseDate">{releaseDate?.getFullYear()}</div>
      </div>
      <div className="movie-category">{category}</div>,
    </div>
  );
};

export default Movie;
