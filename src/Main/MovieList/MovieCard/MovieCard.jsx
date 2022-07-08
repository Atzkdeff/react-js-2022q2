import { useState } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./MovieCard.scss";

export function MovieCard({ movie, editMovie, deleteMovie }) {
  const [isDropdownOpen, setDropDownState] = useState(false);

  return (
    <div className={"movie-card"}>
      <div className="movie-card__img">
        <img src={movie.imageSource} alt={movie.description} />
      </div>
      <ButtonDropdown
        isOpen={isDropdownOpen}
        toggle={(args) => {
          setDropDownState(!isDropdownOpen);
        }}
        className="movie-card__menu"
      >
        <DropdownToggle>
          <FontAwesomeIcon icon={solid("ellipsis-vertical")} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem key={"edit"} onClick={() => editMovie()}>
            Edit
          </DropdownItem>
          <DropdownItem key={"delete"} onClick={() => deleteMovie()}>
            Delete
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <div className="movie-card__details">
        <span className={"movie-card__title"}>{movie.title}</span>
        <span className={"movie-card__date"}>
          {new Date(movie.date).getFullYear()}
        </span>
        <span className={"movie-card__genre"}>{movie.genres.join(", ")}</span>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  editMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
};
