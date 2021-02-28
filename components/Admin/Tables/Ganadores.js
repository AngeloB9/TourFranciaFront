import { Table, Button } from 'react-bootstrap';
import utils from '../../utils';

const Ganadores = ({
  data,
  handleModalDelete,
  handleModalEdit,
  createShow,
}) => {
  return (
    <div className='p-3'>
      <h1>Ganadores</h1>
      <Button variant='dark' onClick={createShow}>
        Nuevo Ganador
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
            <th>Etapa</th>
            <th>Datos Relevantes</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ganador) => (
            <tr key={ganador._id}>
              <td>{ganador.dni}</td>
              <td>
                <img width='60' height='60' src={ganador.foto} />
              </td>
              <td>{ganador.nombres}</td>
              <td>{ganador.apellidos}</td>
              <td>{utils.getFecha(ganador.fecha_de_nacimiento)}</td>
              <td>{ganador.nacionalidad}</td>
              <td>{ganador.equipo}</td>
              <td>{ganador.numero_etapa}</td>
              <td>{ganador.datos_relevantes}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => {
                    handleModalEdit(ganador);
                  }}>
                  <i className='fas fa-edit'></i>
                </Button>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => {
                    handleModalDelete(ganador.dni);
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

export default Ganadores;
