import { Modal, Button, Form } from 'react-bootstrap';
import utils from '../../utils';

const EditarEtapa = ({
  show,
  handleClose,
  handleChangeEtapasEdit,
  handleEdit,
  etapa,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Editar Etapa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEdit}>
          <Form.Group controlId='numero'>
            <Form.Label>Numero</Form.Label>
            <Form.Control
              name='numero'
              type='text'
              readOnly
              onChange={handleChangeEtapasEdit}
              value={etapa.numero}
              required
            />
          </Form.Group>

          <Form.Group controlId='tipo'>
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              name='tipo'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.tipo}
              required
            />
          </Form.Group>

          <Form.Group controlId='fecha'>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              name='fecha'
              type='date'
              onChange={handleChangeEtapasEdit}
              value={utils.getFecha(etapa.fecha)}
              required
            />
          </Form.Group>

          <Form.Group controlId='salida'>
            <Form.Label>Salida</Form.Label>
            <Form.Control
              name='salida'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.salida}
              required
            />
          </Form.Group>

          <Form.Group controlId='llegada'>
            <Form.Label>llegada</Form.Label>
            <Form.Control
              name='llegada'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.llegada}
              required
            />
          </Form.Group>

          <Form.Group controlId='longitud'>
            <Form.Label>Longitud</Form.Label>
            <Form.Control
              name='longitud'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.longitud}
              required
            />
          </Form.Group>

          <Form.Group controlId='desnivel_acumulado'>
            <Form.Label>Desnivel Ac.</Form.Label>
            <Form.Control
              name='desnivel_acumulado'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.desnivel_acumulado}
              required
            />
          </Form.Group>

          <Form.Group controlId='datos_relevantes'>
            <Form.Label>Datos Relevantes</Form.Label>
            <Form.Control
              name='datos_relevantes'
              type='text'
              onChange={handleChangeEtapasEdit}
              value={etapa.datos_relevantes}
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

export default EditarEtapa;
