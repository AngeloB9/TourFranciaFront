import { Modal, Button, Form } from 'react-bootstrap';

const CrearEtapa = ({
  show,
  handleClose,
  handleChangeEtapas,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Nueva Etapa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} onChange={handleChangeEtapas}>
          <Form.Group controlId='numero'>
            <Form.Label>Numero</Form.Label>
            <Form.Control name='numero' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='tipo'>
            <Form.Label>Tipo</Form.Label>
            <Form.Control name='tipo' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='fecha'>
            <Form.Label>Fecha</Form.Label>
            <Form.Control name='fecha' type='date' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='salida'>
            <Form.Label>Salida</Form.Label>
            <Form.Control name='salida' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='llegada'>
            <Form.Label>Llegada</Form.Label>
            <Form.Control name='llegada' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='longitud'>
            <Form.Label>Longitud</Form.Label>
            <Form.Control name='longitud' type='text' placeholder='' required />
          </Form.Group>

          <Form.Group controlId='desnivel_acumulado'>
            <Form.Label>Desnivel Acumulado</Form.Label>
            <Form.Control
              name='desnivel_acumulado'
              type='text'
              placeholder=''
              required
            />
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

export default CrearEtapa;
