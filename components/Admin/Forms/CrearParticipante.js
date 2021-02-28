import { Modal, Button, Form } from 'react-bootstrap';

const CrearParticipante = ({
  show,
  handleClose,
  handleChangeParticipantes,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Participante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} onChange={handleChangeParticipantes}>
          <Form.Group controlId='dni'>
            <Form.Label>DNI</Form.Label>
            <Form.Control name='dni' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='nombres'>
            <Form.Label>Nombres</Form.Label>
            <Form.Control name='nombres' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='apellidos'>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              name='apellidos'
              type='text'
              placeholder=''
              required
            />
          </Form.Group>

          <Form.Group controlId='fecha_de_nacimiento'>
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              name='fecha_de_nacimiento'
              type='date'
              placeholder=''
              required
            />
          </Form.Group>

          <Form.Group controlId='nacionalidad'>
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              name='nacionalidad'
              type='text'
              placeholder=''
              required
            />
          </Form.Group>

          <Form.Group controlId='equipo'>
            <Form.Label>Equipo</Form.Label>
            <Form.Control name='equipo' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='foto'>
            <Form.Label>Foto</Form.Label>
            <Form.Control name='foto' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='datos_relevantes'>
            <Form.Label>Datos Relevantes</Form.Label>
            <Form.Control
              name='datos_relevantes'
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

export default CrearParticipante;
