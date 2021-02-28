import { Modal, Button, Form } from 'react-bootstrap';
import utils from '../../utils';

const EditarNoticia = ({
  show,
  handleClose,
  handleChangeNoticiasEdit,
  handleEdit,
  noticia,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Editar Noticia</Modal.Title>
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
              onChange={handleChangeNoticiasEdit}
              value={noticia._id}
              required
            />
          </Form.Group>

          <Form.Group controlId='portada'>
            <Form.Label>Portada</Form.Label>
            <Form.Control
              name='portada'
              type='text'
              placeholder=''
              onChange={handleChangeNoticiasEdit}
              value={noticia.portada}
              required
            />
          </Form.Group>

          <Form.Group controlId='titulo'>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              name='titulo'
              type='text'
              placeholder=''
              onChange={handleChangeNoticiasEdit}
              value={noticia.titulo}
              required
            />
          </Form.Group>

          <Form.Group controlId='fecha'>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              name='fecha'
              type='date'
              placeholder=''
              onChange={handleChangeNoticiasEdit}
              value={utils.getFecha(noticia.fecha)}
              required
            />
          </Form.Group>

          <Form.Group controlId='resumen'>
            <Form.Label>Resumen</Form.Label>
            <Form.Control
              name='resumen'
              type='text'
              placeholder=''
              onChange={handleChangeNoticiasEdit}
              value={noticia.resumen}
              required
            />
          </Form.Group>

          <Form.Group controlId='noticia'>
            <Form.Label>Noticia</Form.Label>
            <Form.Control
              name='noticia'
              type='text'
              placeholder=''
              onChange={handleChangeNoticiasEdit}
              value={noticia.noticia}
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

export default EditarNoticia;
