import { Modal, Button, Form } from 'react-bootstrap';

const CrearNoticia = ({
  show,
  handleClose,
  handleChangeNoticias,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Nueva Noticia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} onChange={handleChangeNoticias}>
          <Form.Group controlId='portada'>
            <Form.Label>Portada</Form.Label>
            <Form.Control name='portada' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='titulo'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control name='titulo' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='fecha'>
            <Form.Label>Fecha</Form.Label>
            <Form.Control name='fecha' type='date' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='resumen'>
            <Form.Label>Resumen</Form.Label>
            <Form.Control name='resumen' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='noticia'>
            <Form.Label>Noticia</Form.Label>
            <Form.Control name='noticia' type='text' placeholder='' required />
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

export default CrearNoticia;
