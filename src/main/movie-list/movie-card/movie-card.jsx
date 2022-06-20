import PropTypes from "prop-types";

import './movie-card.scss'

export function MovieCard({imageSource, description, title, date, genre}) {
    return (
        <div className={"movie-card"}>
           <div className="movie-card__img">
               <img src={imageSource}
                    alt={description}/>
           </div>
            <div className="movie-card__details">
                    <span className={"movie-card__title"}>{title}</span>
                    <span className={"movie-card__date"}>{date}</span>
                    <span className={"movie-card__genre"}>{genre}</span>
                </div>
        </div>
    );
}

MovieCard.propTypes = {
    imageSource: PropTypes.string.isRequired,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
}
