import ParticipanteId from '../../../components/Participantes/ParticipanteId';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';

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
    <Layout>
      <div style={{ height: '100vh', padding: '2%' }}>
        <h2>Participante</h2>
        <ParticipanteId participante={participante} />
      </div>
    </Layout>
  );
};

export default index;
