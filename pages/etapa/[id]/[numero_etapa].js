import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';

export const getServerSideProps = async (ctx) => {
  const etapa = await axios.get(`${process.env.apiURL}/etapas/${ctx.query.id}`);
  const comentarios = await axios.get(
    `${process.env.apiURL}/comentarios_etapas/${ctx.query.numero_etapa}`
  );

  return {
    props: {
      etapa: etapa.data,
      comentarios: comentarios.data,
    },
  };
};

const index = ({ etapa, comentarios }) => {
  return (
    <Layout>
      <div style={{ padding: '2%', height: '100vh' }}>
        <h1>Comentarios de la etapa numero {etapa.numero}:</h1>
        <br />
        {comentarios.map((comentario) => (
          <Jumbotron key={comentario._id}>
            <p>{comentario.comentario}</p>
          </Jumbotron>
        ))}
      </div>
    </Layout>
  );
};

export default index;
