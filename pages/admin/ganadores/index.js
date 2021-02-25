import AdminLayout from '../../../components/Layouts/AdminLayout';
import GanadoresTable from '../../../components/Admin/Tables/Ganadores';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/ganadores');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  return (
    <AdminLayout>
      <GanadoresTable data={data} />
    </AdminLayout>
  );
};

export default index;
