import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalStandart({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        Thank you for your inquiry. We will contact you shortly!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalStandart;
