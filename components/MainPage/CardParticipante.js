import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ContainerTotal, ImageC, CardC } from './CardParticipanteStyle';
import Link from 'next/link';

const CardParticipantes = ({
  apellido,
  nombre,
  foto,
  equipo,
  nacionalidad,
  id,
}) => {
  return (
    <ContainerTotal>
      <Link href={`/invitado/participanteid/${id}`}>
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
      </Link>
    </ContainerTotal>
  );
};

function CardParticipante({ data, corte }) {
  console.log(data);
  let dataCorte = [];
  corte ? (dataCorte = data.slice(0, 3)) : (dataCorte = data);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {dataCorte.map((participante) => {
            return (
              <Grid.Column key={participante.dni}>
                <CardParticipantes
                  id={participante.dni}
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
