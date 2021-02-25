import AdminLayout from '../../../components/Layouts/AdminLayout';
import EtapasTable from '../../../components/Admin/Tables/Etapas';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/etapas');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  return (
    <AdminLayout>
      <EtapasTable data={data} />
    </AdminLayout>
  );
};

export default index;
