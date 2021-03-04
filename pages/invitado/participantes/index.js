import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CardParticipante from '../../../components/MainPage/CardParticipante';
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
        <h2 style={{ margin: '2em' }}>Participantes</h2>
        <CardParticipante data={data} corte={false} />
      </Layout>
    </div>
  );
};

export default index;
