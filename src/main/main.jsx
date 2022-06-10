import './main.scss';
import {GenreToggle} from "./genre-toggle/genre-toggle";
import {SortOrderSelector} from "./sort-order-selector/sort-order-selector";
import {SearchResultCounter} from "./search-result-counter/search-result-counter";
import {MovieList} from "./movie-list/movie-list";
import {MOVIES_LIST} from "./movies";

export function Main(props) {
  return(
    <main className={"main " + props.className}>
        <div className="main__header">
            <GenreToggle/>
            <SortOrderSelector/>
        </div>

        <SearchResultCounter className="main__search-result-counter" counter={39}/>
        <MovieList movies={MOVIES_LIST}/>
    </main>
  );
}
