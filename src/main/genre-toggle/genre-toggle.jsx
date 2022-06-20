import {Button, ButtonGroup} from "reactstrap";

const GENRES = ["All", "Documentary", "Comedy", "Horror", "Crime"]

export class GenreToggle extends React.Component {
    render() {
        return (
            <ButtonGroup>
                {GENRES.map(genre => <Button key={genre}>{genre}</Button>)}
            </ButtonGroup>
        );
    }
}
