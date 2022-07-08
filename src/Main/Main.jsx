import { useState } from "react";

import "./Main.scss";
import { GenreToggle } from "./GenreToggle";
import { SortOrderSelector } from "./SortOrderSelector";
import { SearchResultCounter } from "./SearchResultCounter";
import { MovieList } from "./MovieList";
import { MOVIES_LIST } from "../constants";
import { ErrorBoundaries } from "../ErrorBoundaries";
import { EditMovieDialog } from "../dialogs/EditMovieDialog";
import { DeleteMovieDialog } from "../dialogs/DeleteMovieDialog";

export function Main(props) {
  const [isEditMovieDialogOpened, setEditMovieDialogState] = useState(false);
  const [isDeleteMovieDialogOpened, setDeleteMovieDialogState] =
    useState(false);
  const [movie, setMovieDialogState] = useState(undefined);

  const openEditMovieDialog = (movie) => {
    setEditMovieDialogState(true);
    setMovieDialogState(movie);
  };

  const closeEditMovieDialog = () => {
    setEditMovieDialogState(false);
    setMovieDialogState(undefined);
  };
  const openDeleteMovieDialog = (movie) => {
    setDeleteMovieDialogState(true);
    setMovieDialogState(movie);
  };

  const closeDeleteMovieDialog = () => {
    setDeleteMovieDialogState(false);
    setMovieDialogState(undefined);
  };

  return (
    <main className={"main " + props.className}>
      <div className="main__header">
        <GenreToggle />
        <SortOrderSelector />
      </div>

      <SearchResultCounter
        className="main__search-result-counter"
        counter={39}
      />
      <ErrorBoundaries>
        <MovieList
          movies={MOVIES_LIST}
          editMovie={(movie) => {
            openEditMovieDialog(movie);
          }}
          deleteMovie={(movie) => {
            openDeleteMovieDialog(movie);
          }}
        />
      </ErrorBoundaries>
      <EditMovieDialog
        isDialogOpened={isEditMovieDialogOpened}
        movie={movie}
        closeDialog={() => closeEditMovieDialog()}
      />
      <DeleteMovieDialog
        isDialogOpened={isDeleteMovieDialogOpened}
        movieId={movie?.id}
        closeDialog={() => closeDeleteMovieDialog()}
      />
    </main>
  );
}
