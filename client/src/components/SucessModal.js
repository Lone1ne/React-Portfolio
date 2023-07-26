import { Modal, Button } from "react-bootstrap";

function SuccessModal({ showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Message Sent!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for reaching out! I will get back to you as soon as
          possible.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SuccessModal;
