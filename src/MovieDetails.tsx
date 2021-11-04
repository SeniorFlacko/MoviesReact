import React from "react";
import "./MovieDetails.css";
import { VscSearch } from "react-icons/vsc";
import { IMovie } from "./services/types";
import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "./MoviesSlice";

interface IProps extends IMovie {}

const MovieDetails: React.FC<IProps> = ({
  id,
  poster_path,
  title,
  release_date,
  genres,
  overview,
  vote_average,
  runtime,
  tagline,
  vote_count,
  budget,
  revenue,
}) => {
  const dispatch: AppDispatch = useDispatch();

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
              dispatch(setSelectedMovie({}));
            }}
          />
        </div>
      </div>

      <div className="moviedetails-container">
        <div className="image-movie-container">
          <img alt="" src={poster_path} className="movie-image" />
        </div>
        <div className="information-container">
          <div className="title-points">
            <div className="name-movie">{title}</div>
            <div className="movie-points">{vote_average}</div>
          </div>

          <div className="category-movie">
            {genres?.map((g) => (
              <div>{g}</div>
            ))}
          </div>
          <div className="duration-year">
            <div className="year-movie">
              {release_date && new Date(release_date).getFullYear()}
            </div>
            <div className="duration-movie">{runtime} min.</div>
          </div>
          <div className="description-movie">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
