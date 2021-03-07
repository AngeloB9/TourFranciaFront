import axios from 'axios';
import TablaEtapas from '../../components/TablaEtapas/TablaEtapas';

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
    <div>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <img width='100%' height='100%' src='/recorrido.jfif' />
      </div>
      <div style={{ padding: '1em 8%' }}>
        <TablaEtapas data={data} />
      </div>
    </div>
  );
};

export default index;
