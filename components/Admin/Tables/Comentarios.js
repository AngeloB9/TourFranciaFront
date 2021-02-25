import { Table, Button } from 'react-bootstrap';

const Comentarios = ({ data }) => {
  return (
    <div className='p-3'>
      <h1>Comentarios</h1>
      <Button variant='dark'>Nuevo Comentario</Button>
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Comentario</th>
            <th>Etapa</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((etapa) => (
            <tr key={etapa._id}>
              <td>{etapa._id}</td>
              <td>{etapa.comentario}</td>
              <td>{etapa.numero_etapa}</td>
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

export default Comentarios;
