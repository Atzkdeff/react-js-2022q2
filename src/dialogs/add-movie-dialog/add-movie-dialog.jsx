import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

import { MovieForm } from "../../shared-components/movie-form/movie-form";

export function AddMovieDialog(props) {
  return (
    <Modal isOpen={props.isDialogOpened} toggle={props.closeDialog}>
      <ModalHeader toggle={props.closeDialog}>Add movie</ModalHeader>
      <ModalBody>
        <MovieForm></MovieForm>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={function noRefCheck() {}}>
          Submit
        </Button>{" "}
        <Button onClick={props.closeDialog}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

AddMovieDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  closeDialog: PropTypes.func,
};
