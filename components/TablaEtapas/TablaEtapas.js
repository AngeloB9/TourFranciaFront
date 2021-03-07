import { Table, Button } from 'react-bootstrap';
import utils from '../../components/utils';
import Link from 'next/link';

const TablaEtapas = ({ data }) => {
  return (
    <Table responsive striped bordered hover variant='dark'>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>Etapa</th>
          <th>Tipo</th>
          <th>Fecha</th>
          <th>Salida y Meta</th>
          <th>Distancia</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: 'center' }}>
        {data.map((etapa) => (
          <tr key={etapa._id}>
            <td>{etapa.numero}</td>
            <td>{etapa.tipo}</td>
            <td>{utils.getFecha(etapa.fecha)}</td>
            <td>{`${etapa.salida} > ${etapa.llegada}`}</td>
            <td>{etapa.longitud}</td>
            <td>
              <Link href={`/etapa/${etapa._id}/${etapa.numero}`}>
                <a className='btn btn-primary'>
                  <i className='fas fa-info'></i>
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaEtapas;
