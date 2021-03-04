import { Modal, Button } from 'react-bootstrap';

const WarningUser = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ups!</Modal.Title>
      </Modal.Header>
      <Modal.Body>El usuario ya existe!</Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarningUser;
