import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardParticipantes = ({
  apellido,
  nombre,
  foto,
  equipo,
  nacionalidad,
}) => {
  return (
    <Card>
      <Image src={foto} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{equipo}</Card.Header>
        <Card.Meta>
          <span className='date'>{nacionalidad}</span>
        </Card.Meta>
        <Card.Description>
          {nombre} {apellido}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

function CardParticipante({ data }) {
  console.log(data);
  return (
    <div style={{ margin: '5em' }}>
      <Grid columns={3}>
        <Grid.Row>
          {data.map((participante) => {
            return (
              <Grid.Column>
                <CardParticipantes
                  nombre={participante.nombres}
                  apellido={participante.apellidos}
                  foto={participante.foto}
                  equipo={participante.equipo}
                  nacionalidad={participante.nacionalidad}
                />
                <br />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default CardParticipante;
