import { useState } from 'react';

import Loader from '../../../components/Loader/Loader';
import Error from '../../Error';
import AdminLayout from '../../../components/Layouts/AdminLayout';
import NoticiasTable from '../../../components/Admin/Tables/Noticias';
import DeleteModal from '../../../components/Admin/Modals/DeleteModal';
import CreateModal from '../../../components/Admin/Forms/CrearNoticia';
import EditModal from '../../../components/Admin/Forms/EditarNoticia';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/noticias');
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
  const [noticia, setnoticia] = useState({
    portada: '',
    titulo: '',
    fecha: '',
    resumen: '',
    noticia: '',
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //Noticia para editar
  const [noticiaEdit, setnoticiaEdit] = useState({
    portada: '',
    titulo: '',
    fecha: '',
    resumen: '',
    noticia: '',
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
  const [_id, set_id] = useState();
  const [deleteModal, setdeleteModal] = useState(false);
  const deleteClose = () => setdeleteModal(false);
  const deleteShow = () => setdeleteModal(true);

  //----------Funciones de la pagina-------------//
  //Cambia los datos del noticia
  const handleChangeNoticias = (e) => {
    setnoticia({
      ...noticia,
      [e.target.name]: e.target.value,
    });
  };
  //Cambia los datos del noticia a editar
  const handleChangeNoticiasEdit = (e) => {
    setnoticiaEdit({
      ...noticiaEdit,
      [e.target.name]: e.target.value,
    });
  };
  //Realiza el post de la noticia
  const handleSubmit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      await axios.post(`${process.env.apiURL}/noticias`, noticia);
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };
  const handleModalEdit = (editar_noticia) => {
    editShow();
    setnoticiaEdit(editar_noticia);
  };
  const handleModalDelete = (_id) => {
    deleteShow();
    set_id(_id);
  };
  const handleEdit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.apiURL}/noticias/${noticiaEdit._id}`,
        noticiaEdit
      );
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };
  const handleDelete = async (_id) => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.apiURL}/noticias/${_id}`
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
      <NoticiasTable
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
        handleChangeNoticiasEdit={handleChangeNoticiasEdit}
        handleClose={editClose}
        handleEdit={handleEdit}
        noticia={noticiaEdit}
      />
      {/*-----------Modal para Crear-------------- */}
      <CreateModal
        show={createModal}
        handleChangeNoticias={handleChangeNoticias}
        handleClose={createClose}
        handleSubmit={handleSubmit}
      />
      {/*-----------Modal para Eliminar-------------- */}
      <DeleteModal
        show={deleteModal}
        handleClose={deleteClose}
        ID={_id}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
