import { Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

import { MovieForm } from "../../shared-components/MovieForm";
import { ModalTemplate } from "../ModalTemplate";

export function AddMovieDialog(props) {
  return (
    <ModalTemplate
      content={
        <>
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
        </>
      }
      isOpen={props.isDialogOpened}
      toggle={props.closeDialog}
    ></ModalTemplate>
  );
}

AddMovieDialog.propTypes = {
  isDialogOpened: PropTypes.bool,
  closeDialog: PropTypes.func,
};
