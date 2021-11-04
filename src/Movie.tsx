import React from "react";
import "./Movie.css";
import { State } from "./store/types";
import { IMovie } from "./services/types";
import useAppContext from "./store/useAppContext";
import { setSelectedMovie } from "./MoviesSlice";
import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";

interface IProps extends IMovie {}

const Movie: React.FC<IProps> = ({
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

  const addDefaultSrc = (ev: any) => {
    ev.target.src = "https://via.placeholder.com/500x750";
  };

  return (
    <div className="movie-container">
      <img
        alt=""
        src={poster_path}
        onError={addDefaultSrc}
        className="movie-image"
        onClick={() => {
          const currentMovie: IMovie = {
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
          };
          dispatch(setSelectedMovie(currentMovie));
        }}
      />
      <div className="movie-field">
        <div className="movie-name">{title}</div>
        <div className="movie-releaseDate">
          {release_date && new Date(release_date)?.getFullYear()}
        </div>
      </div>
      <div className="movie-category">
        {genres?.map((g) => (
          <div>{g}</div>
        ))}
      </div>
      ,
    </div>
  );
};

export default Movie;
