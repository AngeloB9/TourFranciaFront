import { Modal, Button, Form } from 'react-bootstrap';

const EditarComentario = ({
  show,
  handleClose,
  handleChangeComentariosEdit,
  handleEdit,
  comentario,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Editar Comentario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group controlId='_id'>
            <Form.Label>ID</Form.Label>
            <Form.Control
              name='_id'
              type='text'
              placeholder=''
              readOnly
              onChange={handleChangeComentariosEdit}
              value={comentario._id}
              required
            />
          </Form.Group>

          <Form.Group controlId='comentario'>
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              name='comentario'
              type='text'
              placeholder=''
              onChange={handleChangeComentariosEdit}
              value={comentario.comentario}
              required
            />
          </Form.Group>

          <Form.Group controlId='numero_etapa'>
            <Form.Label>Numero de Etapa</Form.Label>
            <Form.Control
              name='numero_etapa'
              type='text'
              placeholder=''
              onChange={handleChangeComentariosEdit}
              value={comentario.numero_etapa}
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

export default EditarComentario;
