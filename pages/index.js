import Layout from '../components/Layouts/Layout';
import Carousel from '../components/Carousel';
import CardParticipante from '../components/MainPage/CardParticipante';
import CardNoticia from '../components/MainPage/CardNoticia';
import axios from 'axios';

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
        <div style={{ background: 'white' }} className='w-100'>
          <Carousel />
        </div>
        <h2 style={{ margin: '2em' }}>Participantes</h2>
        <CardParticipante data={data} />
        <h2 style={{ margin: '2em' }}>Noticias</h2>
        <CardNoticia data={data} />
      </Layout>
    </div>
  );
};

export default index;
