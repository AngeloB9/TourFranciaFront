import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Error from '../../Error';
import AdminLayout from '../../../components/Layouts/AdminLayout';
import ComentariosTable from '../../../components/Admin/Tables/Comentarios';
import DeleteModal from '../../../components/Admin/Modals/DeleteModal';
import CreateModal from '../../../components/Admin/Forms/CrearComentario';
import EditModal from '../../../components/Admin/Forms/EditarComentario';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/comentarios');
  const data = res.data;

  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  //----------Estado de la pagina--------//
  const [comentario, setcomentario] = useState({
    comentario: '',
    numero_etapa: '',
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //Comentario para editar
  const [comentarioEdit, setcomentarioEdit] = useState({
    comentario: '',
    numero_etapa: '',
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
  //Cambia los datos del comentario
  const handleChangeComentarios = (e) => {
    setcomentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };
  //Cambia los datos del comentario a editar
  const handleChangeComentariosEdit = (e) => {
    setcomentarioEdit({
      ...comentarioEdit,
      [e.target.name]: e.target.value,
    });
  };
  //Realiza el post de la comentario
  const handleSubmit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      await axios.post(`${process.env.apiURL}/comentarios`, comentario);
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const handleModalEdit = (editar_comentario) => {
    editShow();
    setcomentarioEdit(editar_comentario);
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
        `${process.env.apiURL}/comentarios/${comentarioEdit._id}`,
        comentarioEdit
      );
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const handleDelete = async (_id) => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.apiURL}/comentarios/${_id}`
      );
      //console.log(response.status);

      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };

  if (!loading && error != null) return <Error message={error} />;
  if (!loading && error === null)
    return (
      <AdminLayout>
        <ComentariosTable
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
          handleChangeComentariosEdit={handleChangeComentariosEdit}
          handleClose={editClose}
          handleEdit={handleEdit}
          comentario={comentarioEdit}
        />
        {/*-----------Modal para Crear-------------- */}
        <CreateModal
          show={createModal}
          handleChangeComentarios={handleChangeComentarios}
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
  return (
    <AdminLayout>
      <Spinner animation='border' variant='warning' />
    </AdminLayout>
  );
};

export default index;
