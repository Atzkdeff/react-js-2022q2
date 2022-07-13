import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

import { ModalTemplate } from "../ModalTemplate";

export function DeleteMovieDialog(props) {
  return (
    <ModalTemplate
      content={
        <>
          <ModalHeader toggle={props.closeDialog}>Delete movie</ModalHeader>
          <ModalBody>Are you sure you want to delete this movie?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={function noRefCheck() {}}>
              Confirm
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

DeleteMovieDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  closeDialog: PropTypes.func,
  movieId: PropTypes.string,
};
