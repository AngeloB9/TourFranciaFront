import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Error from '../../Error';
import AdminLayout from '../../../components/Layouts/AdminLayout';
import ParticipantesTable from '../../../components/Admin/Tables/Participantes';
import DeleteModal from '../../../components/Admin/Modals/DeleteModal';
import CreateModal from '../../../components/Admin/Forms/CrearParticipante';
import EditModal from '../../../components/Admin/Forms/EditarParticipante';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(process.env.apiURL + '/participantes');
  const data = res.data;
  return {
    props: { data }, // se pasara la data automaticamente a la pagina como props
  };
}

const index = ({ data }) => {
  //----------Estado de la pagina--------//
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
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //Participante para editar
  const [participanteEdit, setparticipanteEdit] = useState({
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
  //Cambia los datos del participante
  const handleChangeParticipantes = (e) => {
    setparticipante({
      ...participante,
      [e.target.name]: e.target.value,
    });
  };
  //Cambia los datos del participante a editar
  const handleChangeParticipantesEdit = (e) => {
    setparticipanteEdit({
      ...participanteEdit,
      [e.target.name]: e.target.value,
    });
  };
  //Realiza el post del participante
  const handleSubmit = async (event) => {
    setloading(true);
    event.preventDefault();
    try {
      await axios.post(`${process.env.apiURL}/participantes`, participante);
      setloading(false);
      window.location.reload();
    } catch (Err) {
      console.log(Err);
      seterror(Err);
      setloading(false);
    }
  };
  const handleModalEdit = (editar_participante) => {
    editShow();
    setparticipanteEdit(editar_participante);
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
        `${process.env.apiURL}/participantes/${participanteEdit.dni}`,
        participanteEdit
      );
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const handleDelete = async (dni) => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.apiURL}/participantes/${dni}`
      );
      //console.log(response.status);
      setloading(false);
      window.location.reload();
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };

  if (error) return <Error message='error'></Error>;
  if (loading) return <Spinner></Spinner>;
  return (
    <AdminLayout>
      <ParticipantesTable
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
        handleChangeParticipantesEdit={handleChangeParticipantesEdit}
        handleClose={editClose}
        handleEdit={handleEdit}
        participante={participanteEdit}
      />
      {/*-----------Modal para Crear-------------- */}
      <CreateModal
        show={createModal}
        handleChangeParticipantes={handleChangeParticipantes}
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
