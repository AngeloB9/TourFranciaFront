import { Modal, Button, Form } from 'react-bootstrap';
import utils from '../../utils';

const EditarGanador = ({
  show,
  handleClose,
  handleChangeGanadoresEdit,
  handleEdit,
  ganador,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Editar Ganador</Modal.Title>
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
              onChange={handleChangeGanadoresEdit}
              value={ganador.dni}
              required
            />
          </Form.Group>

          <Form.Group controlId='nombres'>
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              name='nombres'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.nombres}
              required
            />
          </Form.Group>

          <Form.Group controlId='apellidos'>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              name='apellidos'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.apellidos}
              required
            />
          </Form.Group>

          <Form.Group controlId='fecha_de_nacimiento'>
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              name='fecha_de_nacimiento'
              type='date'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={utils.getFecha(ganador.fecha_de_nacimiento)}
              required
            />
          </Form.Group>

          <Form.Group controlId='nacionalidad'>
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control
              name='nacionalidad'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.nacionalidad}
              required
            />
          </Form.Group>

          <Form.Group controlId='equipo'>
            <Form.Label>Equipo</Form.Label>
            <Form.Control
              name='equipo'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.equipo}
              required
            />
          </Form.Group>

          <Form.Group controlId='numero_etapa'>
            <Form.Label>Etapa Ganada</Form.Label>
            <Form.Control
              name='numero_etapa'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.numero_etapa}
              required
            />
          </Form.Group>

          <Form.Group controlId='foto'>
            <Form.Label>Foto</Form.Label>
            <Form.Control
              name='foto'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.foto}
              required
            />
          </Form.Group>

          <Form.Group controlId='datos_relevantes'>
            <Form.Label>Datos Relevantes</Form.Label>
            <Form.Control
              name='datos_relevantes'
              type='text'
              placeholder=''
              onChange={handleChangeGanadoresEdit}
              value={ganador.datos_relevantes}
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

export default EditarGanador;
