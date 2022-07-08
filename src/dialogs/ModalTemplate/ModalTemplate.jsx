import { Modal } from "reactstrap";
import PropTypes from "prop-types";

import "./ModalTemplate.css";

export function ModalTemplate(props) {
  console.log(props);
  return (
    <Modal
      className="modal-template"
      isOpen={props.isOpen}
      toggle={props.closeDialog}
    >
      {props.content}
    </Modal>
  );
}

ModalTemplate.propTypes = {
  isOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  content: PropTypes.element,
};
