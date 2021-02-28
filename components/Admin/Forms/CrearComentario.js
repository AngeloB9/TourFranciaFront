import { Modal, Button, Form } from 'react-bootstrap';

const CrearComentario = ({
  show,
  handleClose,
  handleChangeComentarios,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Comentario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} onChange={handleChangeComentarios}>
          <Form.Group controlId='comentario'>
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              name='comentario'
              type='text'
              placeholder=''
              required
            />
          </Form.Group>

          <Form.Group controlId='numero_etapa'>
            <Form.Label>Numero de Etapa</Form.Label>
            <Form.Control
              name='numero_etapa'
              type='text'
              placeholder=''
              required
            />
          </Form.Group>

          <Button variant='danger' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' type='submit'>
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CrearComentario;
