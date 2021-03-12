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
    <div>
      <Layout>
        <h2 style={{ margin: '1em' }}>Participante</h2>
        <div style={{ padding: '3em 8%' }}>
          <ParticipanteId participante={participante} />
        </div>
      </Layout>
    </div>
  );
};

export default index;
