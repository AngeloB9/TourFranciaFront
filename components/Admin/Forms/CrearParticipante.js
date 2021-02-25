import { Table } from 'react-bootstrap';
import utils from '../../utils';

const CrearParticipante = ({ data }) => {
  return (
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
  );
};

export default CrearParticipante;
