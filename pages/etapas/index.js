import axios from 'axios';
import TablaEtapas from '../../components/TablaEtapas/TablaEtapas';
import Layout from '../../components/Layouts/Layout';

export const getServerSideProps = async (ctx) => {
  const resp = await axios.get(`${process.env.apiURL}/etapas`);
  return {
    props: {
      data: resp.data,
    },
  };
};

const index = ({ data }) => {
  return (
    <Layout>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <img width='100%' height='100%' src='/recorrido.jfif' />
      </div>
      <div style={{ padding: '1em 8%' }}>
        <TablaEtapas data={data} />
      </div>
    </Layout>
  );
};

export default index;
