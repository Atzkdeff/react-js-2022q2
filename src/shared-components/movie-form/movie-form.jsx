import { useState } from "react";
import {
  ButtonDropdown,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import PropTypes from "prop-types";

import "./movie-form.scss";
import { GENRES } from "../../constants";

export function MovieForm(props) {
  const [isDropdownOpen, setDropDownState] = useState(false);

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="movieTitle">Title</Label>
            <Input
              id="movieTitle"
              name="title"
              defaultValue={props.movie?.title}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="releaseDate">Release date</Label>
            <Input
              id="releaseDate"
              name="releaseDate"
              type="date"
              defaultValue={props.movie?.date}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="movieUrl">Movie url</Label>
            <Input
              id="movieUrl"
              name="url"
              type="url"
              defaultValue={props.movie?.url}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              defaultValue={props.movie?.rating}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <ButtonDropdown
              id="genre"
              isOpen={isDropdownOpen}
              toggle={(args) => {
                setDropDownState(!isDropdownOpen);
              }}
              className="movie-form__genre"
            >
              <DropdownToggle>Select genres</DropdownToggle>
              <DropdownMenu>
                {GENRES.map((genre) => (
                  <DropdownItem key={genre}>
                    <FormGroup
                      check
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Input
                        type="checkbox"
                        checked={props.movie?.genres.find(
                          (movieGenre) => movieGenre === genre
                        )}
                      />{" "}
                      <Label check>{genre}</Label>
                    </FormGroup>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="runtime">Runtime</Label>
            <InputGroup>
              <Input
                id="runtime"
                name="runtime"
                defaultValue={
                  props.movie?.runtime
                    ? props.movie?.runtime / (1000 * 60)
                    : undefined
                }
              />
              <InputGroupText>minutes</InputGroupText>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="overview">Overview</Label>
        <Input
          id="overview"
          name="overview"
          type="textarea"
          defaultValue={props.movie?.description}
        />
      </FormGroup>
    </Form>
  );
}

MovieForm.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  imageSource: PropTypes.string,
  description: PropTypes.string,
};
