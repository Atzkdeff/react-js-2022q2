import './genre-toggle.css'

const GENRES = ["All", "Documentary", "Comedy", "Horror", "Crime"]

export class GenreToggle extends React.Component {
    render() {
        return (
            <div className="genre-toggle">
                {GENRES.map(genre => <button key={genre}>{genre}</button>)}
            </div>
        );
    }
}
