import ParticipanteId from '../../../components/Participantes/ParticipanteId';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';
import { useRouter } from 'next/router';

// const router = useRouter();
// const id = router.query.id || '';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(process.env.apiURL + `/participantes/${id}`);
  const data = res.data;
  console.log(data);

  return {
    props: { participante: data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ participante }) => {
  return (
    <div>
      <Layout>
        <h2 style={{ margin: '2em' }}>Participante</h2>
        hola
        <ParticipanteId participante={participante} />
      </Layout>
    </div>
  );
};

export default index;
