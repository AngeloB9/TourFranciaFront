import { useState } from 'react';
import AdminLayout from '../../../components/Layouts/AdminLayout';
import ParticipantesTable from '../../../components/Admin/Tables/Participantes';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/participantes');
  const data = res.data;
  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  const [participante, setparticipante] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    fecha_de_nacimiento: '',
    nacionalidad: '',
    equipo: '',
    foto: '',
    datos_relevantes: '',
  });

  const handleChangeParticipantes = (e) => {
    setparticipante({
      ...participante,
      [e.target.name]: e.target.value,
    });
    console.log(participante);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('holi');
    const response = await axios.post(
      `${process.env.apiURL}/participantes`,
      participante
    );
  };

  return (
    <AdminLayout>
      <ParticipantesTable
        data={data}
        handleChangeParticipantes={handleChangeParticipantes}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  );
};

export default index;
