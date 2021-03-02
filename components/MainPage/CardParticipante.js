import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ContainerTotal, ImageC, CardC } from './CardParticipanteStyle';

const CardParticipantes = ({
  apellido,
  nombre,
  foto,
  equipo,
  nacionalidad,
}) => {
  return (
    <ContainerTotal>
      <CardC>
        <ImageC src={foto} />
        <Card.Content>
          <Card.Header>{equipo}</Card.Header>
          <Card.Meta>
            <span className='date'>{nacionalidad}</span>
          </Card.Meta>
          <Card.Description>
            {nombre} {apellido}
          </Card.Description>
        </Card.Content>
      </CardC>
    </ContainerTotal>
  );
};

function CardParticipante({ data, corte }) {
  console.log(data);
  let dataCorte = [];
  corte ? (dataCorte = data.slice(0, 3)) : (dataCorte = data);
  return (
    <div style={{ margin: '5em' }}>
      <Grid columns={3}>
        <Grid.Row>
          {dataCorte.map((participante) => {
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
