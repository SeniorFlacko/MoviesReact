import React from "react";
import "./MovieDetails.css";
import { IMovie, State } from "./store/types";
import useAppContext from "./store/useAppContext";
import { VscSearch } from "react-icons/vsc";

interface IProps extends IMovie {}

const MovieDetails: React.FC<IProps> = ({
  id,
  image,
  name,
  releaseDate,
  category,
  description,
  rate,
  duration,
}) => {
  const { cleanState } = useAppContext() as State;

  return (
    <div className="moviedetail-container">
      <div className="header-header">
        <div className="netflix-roulette">
          <b>netflix</b>roulette
        </div>
        <div>
          <VscSearch
            color="f65261"
            size={30}
            cursor="pointer"
            onClick={() => {
              cleanState();
            }}
          />
        </div>
      </div>

      <div className="moviedetails-container">
        <div className="image-movie-container">
          <img alt="" src={image} className="movie-image" />
        </div>
        <div className="information-container">
          <div className="title-points">
            <div className="name-movie">{name}</div>
            <div className="movie-points">{rate}</div>
          </div>

          <div className="category-movie">{category}</div>
          <div className="duration-year">
            <div className="year-movie">{releaseDate?.getFullYear()}</div>
            <div className="duration-movie">{duration}</div>
          </div>
          <div className="description-movie">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
