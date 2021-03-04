import { useState } from 'react';
import Loader from '../../../components/Loader/Loader';
import Error from '../../Error';
import AdminLayout from '../../../components/Layouts/AdminLayout';
import GanadoresTable from '../../../components/Admin/Tables/Ganadores';
import DeleteModal from '../../../components/Admin/Modals/DeleteModal';
import CreateModal from '../../../components/Admin/Forms/CrearGanador';
import EditModal from '../../../components/Admin/Forms/EditarGanador';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/ganadores');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  //Auth
  const router = useRouter();
  if (cookie.get('usuario')) {
    if (!cookie.get('usuario').admin) router.push('/admin/participantes');
  }

  //----------Estado de la pagina--------//
  const [ganador, setganador] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    fecha_de_nacimiento: '',
    nacionalidad: '',
    equipo: '',
    foto: '',
    datos_relevantes: '',
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //Ganador para editar
  const [ganadorEdit, setganadorEdit] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    fecha_de_nacimiento: '',
    nacionalidad: '',
    equipo: '',
    foto: '',
    datos_relevantes: '',
  });
  //Modal Crear
  const [createModal, setcreateModal] = useState(false);
  const createClose = () => setcreateModal(false);
  const createShow = () => setcreateModal(true);
  //Modal Editar
  const [editarModal, seteditarModal] = useState(false);
  const editClose = () => seteditarModal(false);
  const editShow = () => seteditarModal(true);
  //Modal de eliminar
  const [DNI, setDNI] = useState();
  const [deleteModal, setdeleteModal] = useState(false);
  const deleteClose = () => setdeleteModal(false);
  const deleteShow = () => setdeleteModal(true);

  //----------Funciones de la pagina-------------//
  //Cambia los datos del ganador
  const handleChangeGanadores = (e) => {
    setganador({
      ...ganador,
      [e.target.name]: e.target.value,
    });
  };
  //Cambia los datos del ganador a editar
  const handleChangeGanadoresEdit = (e) => {
    setganadorEdit({
      ...ganadorEdit,
      [e.target.name]: e.target.value,
    });
  };
  //Realiza el post del ganador
  const handleSubmit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      await axios.post(`${process.env.apiURL}/ganadores`, ganador);
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };
  const handleModalEdit = (editar_ganador) => {
    editShow();
    setganadorEdit(editar_ganador);
  };
  const handleModalDelete = (dni) => {
    deleteShow();
    setDNI(dni);
  };
  const handleEdit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.apiURL}/ganadores/${ganadorEdit.dni}`,
        ganadorEdit
      );
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };
  const handleDelete = async (dni) => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.apiURL}/ganadores/${dni}`
      );
      //console.log(response.status);

      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };

  if (error)
    return (
      <AdminLayout>
        <Error message={error}></Error>
      </AdminLayout>
    );
  if (loading)
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  return (
    <AdminLayout>
      <GanadoresTable
        data={data}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleModalDelete={handleModalDelete}
        handleModalEdit={handleModalEdit}
        createShow={createShow}
      />
      {/*-----------Modal para Editar-------------- */}
      <EditModal
        show={editarModal}
        handleChangeGanadoresEdit={handleChangeGanadoresEdit}
        handleClose={editClose}
        handleEdit={handleEdit}
        ganador={ganadorEdit}
      />
      {/*-----------Modal para Crear-------------- */}
      <CreateModal
        show={createModal}
        handleChangeGanadores={handleChangeGanadores}
        handleClose={createClose}
        handleSubmit={handleSubmit}
      />
      {/*-----------Modal para Eliminar-------------- */}
      <DeleteModal
        show={deleteModal}
        handleClose={deleteClose}
        ID={DNI}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
