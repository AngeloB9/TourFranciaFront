import { Table, Button } from 'react-bootstrap';

const Comentarios = ({
  data,
  handleModalDelete,
  handleModalEdit,
  createShow,
}) => {
  return (
    <div className='p-3'>
      <h1>Comentarios</h1>
      <Button variant='dark' onClick={createShow}>
        Nuevo Comentario
      </Button>

      {/*-----------------Tabla-------------*/}
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
          {data.map((comentario) => (
            <tr key={comentario._id}>
              <td>{comentario._id}</td>
              <td>{comentario.comentario}</td>
              <td>{comentario.numero_etapa}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => {
                    handleModalEdit(comentario);
                  }}>
                  <i className='fas fa-edit'></i>
                </Button>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => {
                    handleModalDelete(comentario._id);
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

export default Comentarios;
