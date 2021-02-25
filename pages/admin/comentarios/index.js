import AdminLayout from '../../../components/Layouts/AdminLayout';
import ComentariosTable from '../../../components/Admin/Tables/Comentarios';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/comentarios');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  return (
    <AdminLayout>
      <ComentariosTable data={data} />
    </AdminLayout>
  );
};

export default index;
