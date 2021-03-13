import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import Figure from 'react-bootstrap/Figure';
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
    <div className='participante_imagen'>
      <h3>Datos Personales</h3>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <img width='100%' height='100%' src={foto} />
      </div>
      <style>text-align: center; border-style: solid; </style>
      <h4>
        {nombre} {apellido}
      </h4>

      <h5>Nacionalidad: {nacionalidad}</h5>
      <h5>Equipo:{equipo}</h5>
      <h5>Datos relevantes: {datos_relevantes}</h5>
    </div>
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
              datos_relevantes={participante.datos_relevantes}
            />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ParticipanteId;
