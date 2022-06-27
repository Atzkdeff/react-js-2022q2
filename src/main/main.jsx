import "./main.scss";
import { GenreToggle } from "./genre-toggle/genre-toggle";
import { SortOrderSelector } from "./sort-order-selector/sort-order-selector";
import { SearchResultCounter } from "./search-result-counter/search-result-counter";
import { MovieList } from "./movie-list/movie-list";
import { MOVIES_LIST } from "../constants";
import { ErrorBoundaries } from "../error-boundaries";
import { EditMovieDialog } from "../dialogs/edit-movie-dialog/edit-movie-dialog";
import { DeleteMovieDialog } from "../dialogs/delete-movie-dialog/delete-movie-dialog";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMovieDialogOpened: false,
      isDeleteMovieDialogOpened: false,
      movie: undefined,
    };
  }

  openEditMovieDialog(movie) {
    this.setState({
      isEditMovieDialogOpened: true,
      movie,
    });
  }

  closeEditMovieDialog() {
    this.setState({
      isEditMovieDialogOpened: false,
      movie: undefined,
    });
  }

  openDeleteMovieDialog(movie) {
    this.setState({
      isDeleteMovieDialogOpened: true,
      movie,
    });
  }

  closeDeleteMovieDialog() {
    this.setState({
      isDeleteMovieDialogOpened: false,
      movie: undefined,
    });
  }

  render() {
    return (
      <main className={"main " + this.props.className}>
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
              this.openEditMovieDialog(movie);
            }}
            deleteMovie={(movie) => {
              this.openDeleteMovieDialog(movie);
            }}
          />
        </ErrorBoundaries>
        <EditMovieDialog
          isDialogOpened={this.state.isEditMovieDialogOpened}
          movie={this.state.movie}
          closeDialog={() => this.closeEditMovieDialog()}
        />
        <DeleteMovieDialog
          isDialogOpened={this.state.isDeleteMovieDialogOpened}
          movieId={this.state.movie?.id}
          closeDialog={() => this.closeDeleteMovieDialog()}
        />
      </main>
    );
  }
}
