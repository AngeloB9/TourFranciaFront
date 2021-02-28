import { Table, Button, Modal, Form } from 'react-bootstrap';
import utils from '../../utils';

const Participantes = ({
  data,
  handleModalDelete,
  handleModalEdit,
  createShow,
}) => {
  return (
    <div className='p-3'>
      <h1>Participantes</h1>

      <Button variant='dark' onClick={createShow}>
        Nuevo Participante
      </Button>

      {/*-----------------Tabla-------------*/}
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
              <td>
                <img width='60' height='60' src={participante.foto} />
              </td>
              <td>{participante.nombres}</td>
              <td>{participante.apellidos}</td>
              <td>{utils.getFecha(participante.fecha_de_nacimiento)}</td>
              <td>{participante.nacionalidad}</td>
              <td>{participante.equipo}</td>
              <td>{participante.datos_relevantes}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => {
                    handleModalEdit(participante);
                  }}>
                  <i className='fas fa-edit'></i>
                </Button>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => {
                    handleModalDelete(participante.dni);
                  }}>
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
