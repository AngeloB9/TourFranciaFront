import { Modal, Button, Form } from 'react-bootstrap';
import utils from '../../utils';

const EditarParticipante = ({
  show,
  handleClose,
  handleChangeParticipantesEdit,
  handleEdit,
  participante,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Editar Participante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group controlId='dni'>
            <Form.Label>DNI</Form.Label>
            <Form.Control
              name='dni'
              type='text'
              placeholder=''
              readOnly
              onChange={handleChangeParticipantesEdit}
              value={participante.dni}
              required
            />
          </Form.Group>

          <Form.Group controlId='nombres'>
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              name='nombres'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.nombres}
              required
            />
          </Form.Group>

          <Form.Group controlId='apellidos'>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              name='apellidos'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.apellidos}
              required
            />
          </Form.Group>

          <Form.Group controlId='fecha_de_nacimiento'>
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              name='fecha_de_nacimiento'
              type='date'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={utils.getFecha(participante.fecha_de_nacimiento)}
              required
            />
          </Form.Group>

          <Form.Group controlId='nacionalidad'>
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              name='nacionalidad'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.nacionalidad}
              required
            />
          </Form.Group>

          <Form.Group controlId='equipo'>
            <Form.Label>Equipo</Form.Label>
            <Form.Control
              name='equipo'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.equipo}
              required
            />
          </Form.Group>

          <Form.Group controlId='foto'>
            <Form.Label>Foto</Form.Label>
            <Form.Control
              name='foto'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.foto}
              required
            />
          </Form.Group>

          <Form.Group controlId='datos_relevantes'>
            <Form.Label>Datos Relevantes</Form.Label>
            <Form.Control
              name='datos_relevantes'
              type='text'
              placeholder=''
              onChange={handleChangeParticipantesEdit}
              value={participante.datos_relevantes}
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

export default EditarParticipante;
