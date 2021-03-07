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
    <Figure>
      <div className='imagen'>
        <Figure.Image width={571} height={580} alt='' src={foto} />
        <style>text-align: center; border-style: solid;</style>
      </div>

      <Figure.Caption>
        Nombres: {nombre} {apellido}
      </Figure.Caption>
      <Figure.Caption>Nacionalidad: {nacionalidad}</Figure.Caption>
      <Figure.Caption>Equipo: {equipo}</Figure.Caption>
      <Figure.Caption>Datos relevantes: {datos_relevantes}</Figure.Caption>
    </Figure>
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
