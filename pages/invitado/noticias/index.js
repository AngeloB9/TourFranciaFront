import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CardNoticia from '../../../components/MainPage/CardNoticia';
import axios from 'axios';
import Layout from '../../../components/Layouts/Layout';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/noticias');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}
const index = ({ data }) => {
  return (
    <Layout>
      <div style={{ height: '100vh' }}>
        <h2 style={{ margin: '2em' }}>Noticias</h2>
        <div style={{ padding: '3em 8%' }}></div>
        <CardNoticia data={data} corte={false} />
      </div>
    </Layout>
  );
};

export default index;
