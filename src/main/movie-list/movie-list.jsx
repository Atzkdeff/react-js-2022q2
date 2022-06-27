import PropTypes from "prop-types";

import "./movie-list.scss";
import { MovieCard } from "./movie-card/movie-card";

export function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          editMovie={() => {
            props.editMovie(movie);
          }}
          deleteMovie={() => props.deleteMovie(movie.id)}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  editMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
};
