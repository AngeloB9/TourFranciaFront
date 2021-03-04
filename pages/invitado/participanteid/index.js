import ParticipanteId from '../../../components/Participantes/ParticipanteId';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/participantes');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}
const index = ({ data }) => {
  return (
    <div>
      <Layout>
        <h2 style={{ margin: '2em' }}>Participante</h2>
        <ParticipanteId data={data} />
      </Layout>
    </div>
  );
};

export default index;
