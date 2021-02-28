import { Modal, Button } from 'react-bootstrap';

const DeleteModal = ({ handleClose, show, ID, handleDelete }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Seguro que deseas eliminar el registro con ID: {ID}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant='danger'
          onClick={() => {
            handleDelete(ID);
          }}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
