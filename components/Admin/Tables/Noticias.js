import { Table, Button } from 'react-bootstrap';
import utils from '../../utils';

const Noticias = ({ data }) => {
  return (
    <div className='p-3'>
      <h1>Noticias</h1>
      <Button variant='dark'>Nueva Noticia</Button>
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Portada</th>
            <th>Título</th>
            <th>Fecha</th>
            <th>Resumen</th>
            <th>Noticia</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((noticia) => (
            <tr key={noticia._id}>
              <td>{noticia._id}</td>
              <td>
                <img width='60' height='60' src={noticia.portada} />
              </td>
              <td>{noticia.titulo}</td>
              <td>{utils.getFecha(noticia.fecha)}</td>
              <td>{noticia.resumen}</td>
              <td>{noticia.noticia}</td>
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

export default Noticias;
