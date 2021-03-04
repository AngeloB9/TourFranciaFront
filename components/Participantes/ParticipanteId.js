import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const ParticipanteId = ({
  datos_relevantes,
  nombre,
  foto,
  equipo,
  nacionalidad,
}) => {
  return (
    <section className='contenedorParticipantesID'>
      <div className='elementoParticipantesID'>
        <Link to='/invitado/participantes' className='botonParticipantesID btn'>
          Participantes
        </Link>
        <div className='tituloParticipantesID'>{nombre}</div>
        <div className='fechaParticipantesID'>{equipo}</div>
        <img alt='' src={foto} className='imagenParticipantesID ml-5' />
        <div className='textoParticipantesID'>{datos_relevantes}</div>
      </div>
    </section>
  );
};
function ParticipanteXId({ data }) {
  console.log(data);
  return (
    <div style={{ marginLeft: '7em' }}>
      {dataCorte.map((participante) => {
        return (
          <ParticipanteId
            nombre={participante.nombres}
            apellido={participante.apellidos}
            foto={participante.foto}
            equipo={participante.equipo}
            datos_relevantes={participante.datos_relevantes}
          />
        );
      })}
    </div>
  );
}

export default ParticipanteId;
