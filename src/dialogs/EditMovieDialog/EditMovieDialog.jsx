import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

import { MovieForm } from "../../shared-components/MovieForm";
import { ModalTemplate } from "../ModalTemplate";

export function EditMovieDialog(props) {
  return (
    <ModalTemplate
      content={
        <>
          <ModalHeader toggle={props.closeDialog}>Edit movie</ModalHeader>
          <ModalBody>
            <MovieForm movie={props.movie}></MovieForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={function noRefCheck() {}}>
              Submit
            </Button>{" "}
            <Button onClick={props.closeDialog}>Cancel</Button>
          </ModalFooter>
        </>
      }
      isOpen={props.isDialogOpened}
      toggle={props.closeDialog}
    ></ModalTemplate>
  );
}

EditMovieDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  closeDialog: PropTypes.func,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
