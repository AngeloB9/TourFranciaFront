import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ParticipantebyId = ({
  apellido,
  nombre,
  foto,
  equipo,
  id,
  datos_relevantes,
  nacionalidad,
}) => {
  return (
    <section className='contenedorParticipantesID'>
      <div className='elementoParticipantesID'>
        <div className='nombreParticipantesID'>{nombre}</div>
        <div className='apellidoParticipantesID'>{apellido}</div>
        <div className='EquipoParticipantesID'>{equipo}</div>
        <div className='EquipoParticipantesID'>{nacionalidad}</div>
        <img alt='' src={foto} className='fotoParticipantesID ml-5' />
        <div className='datosrelevantesParticipantesID'>{datos_relevantes}</div>
      </div>
    </section>
  );
};

function ParticipanteId({ participante }) {
  return (
    <div>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <ParticipantebyId
              id={participante.dni}
              nombre={participante.nombres}
              apellido={participante.apellidos}
              foto={participante.foto}
              equipo={participante.equipo}
              nacionalidad={participante.nacionalidad}
              datos={participante.datos_relevantes}
            />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ParticipanteId;
