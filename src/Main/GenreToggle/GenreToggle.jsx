import { Button, ButtonGroup } from "reactstrap";

import { GENRES } from "../../constants";

export class GenreToggle extends React.Component {
  render() {
    return (
      <ButtonGroup>
        {GENRES.map((genre) => (
          <Button key={genre}>{genre}</Button>
        ))}
      </ButtonGroup>
    );
  }
}
