import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

export function DeleteMovieDialog(props) {
  return (
    <Modal isOpen={props.isDialogOpened} toggle={props.closeDialog}>
      <ModalHeader toggle={props.closeDialog}>Delete movie</ModalHeader>
      <ModalBody>Are you sure you want to delete this movie?</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={function noRefCheck() {}}>
          Confirm
        </Button>{" "}
        <Button onClick={props.closeDialog}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

DeleteMovieDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  closeDialog: PropTypes.func,
};
