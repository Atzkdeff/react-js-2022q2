import './movie-list.scss'
import {MovieCard} from "./movie-card/movie-card";

export function MovieList(props) {
    return (
        <div className="movie-list">
            {props.movies.map(movie => <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.description}
                imageSource={movie.imageSource}
                date={movie.date}
                genre={movie.genre} />)
            }
        </div>
    );
}
