import { Table, Button } from 'react-bootstrap';
import utils from '../../utils';

const Etapas = ({ data, handleModalDelete, handleModalEdit, createShow }) => {
  return (
    <div className='p-3'>
      <h1>Etapas</h1>
      <Button variant='dark' onClick={createShow}>
        Nueva Etapa
      </Button>
      {/*-----------------Tabla-------------*/}
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Salida</th>
            <th>Llegada</th>
            <th>Longitud</th>
            <th>Desnivel Acumulado</th>
            <th>Datos Relevantes</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((etapa) => (
            <tr key={etapa._id}>
              <td>{etapa.numero}</td>
              <td>{etapa.tipo}</td>
              <td>{utils.getFecha(etapa.fecha)}</td>
              <td>{etapa.salida}</td>
              <td>{etapa.llegada}</td>
              <td>{etapa.longitud}</td>
              <td>{etapa.desnivel_acumulado}</td>
              <td>{etapa.datos_relevantes}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => {
                    handleModalEdit(etapa);
                  }}>
                  <i className='fas fa-edit'></i>
                </Button>
              </td>
              <td>
                <Button
                  variant='danger'
                  onClick={() => {
                    handleModalDelete(etapa._id);
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

export default Etapas;
