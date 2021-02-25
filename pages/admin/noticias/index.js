import AdminLayout from '../../../components/Layouts/AdminLayout';
import NoticiasTable from '../../../components/Admin/Tables/Noticias';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/noticias');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  return (
    <AdminLayout>
      <NoticiasTable data={data} />
    </AdminLayout>
  );
};

export default index;
