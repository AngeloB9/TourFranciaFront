import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CardParticipante from '../../../components/MainPage/CardParticipante';
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
      <h2 style={{ margin: '2em' }}>Participantes</h2>
      <CardParticipante data={data} corte={false} />
    </div>
  );
};

export default index;
