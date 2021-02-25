import { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import utils from '../../utils';

const Participantes = ({ data, handleSubmit, handleChangeParticipantes }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='p-3'>
      <h1>Participantes</h1>

      <Button variant='dark' onClick={handleShow}>
        Nuevo Participante
      </Button>

      {/*-----------Modal-------------- */}
      <Modal show={show} onHide={handleClose}>
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
              <Form.Control
                name='nombres'
                type='text'
                placeholder=''
                required
              />
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
      {/*-----------------Tabla-----------*/}
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Foto</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Nacimiento</th>
            <th>Nacionalidad</th>
            <th>Equipo</th>
            <th>Datos Relevantes</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((participante) => (
            <tr key={participante._id}>
              <td>{participante.dni}</td>
              <td>{participante.foto}</td>
              <td>{participante.nombres}</td>
              <td>{participante.apellidos}</td>
              <td>{utils.getFecha(participante.fecha_de_nacimiento)}</td>
              <td>{participante.nacionalidad}</td>
              <td>{participante.equipo}</td>
              <td>{participante.datos_relevantes}</td>
              <td>
                <Button variant='primary'>
                  <i className='fas fa-edit'></i>
                </Button>
              </td>
              <td>
                <Button variant='danger'>
                  <i className='fas fa-trash-alt'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Participantes;
//action='http://localhost:9000/participantes' method='POST'
