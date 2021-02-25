import { Table, Button } from 'react-bootstrap';
import utils from '../../utils';

const Ganadores = ({ data }) => {
  return (
    <div className='p-3'>
      <h1>Ganadores</h1>
      <Button variant='dark'>Nuevo Ganador</Button>
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr>
            <th>DNI</th>
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
              <td>{ganador.nombres}</td>
              <td>{ganador.apellidos}</td>
              <td>{utils.getFecha(ganador.fecha_de_nacimiento)}</td>
              <td>{ganador.nacionalidad}</td>
              <td>{ganador.equipo}</td>
              <td>{ganador.numero_etapa}</td>
              <td>{ganador.datos_relevantes}</td>
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

export default Ganadores;
