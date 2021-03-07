import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ContainerTotal, ImageC, CardC } from './CardNoticiaStyle';
import Link from 'next/link';

const CardNoticias = ({ id, titulo, portada, resumen }) => {
  return (
    <ContainerTotal>
      <Link href={`/invitado/noticiaid/${id}`}>
        <CardC>
          <ImageC src={portada} />
          <Card.Content>
            <Card.Header>{titulo}</Card.Header>
            <Card.Meta>
              <span className='date'>"Noticias"</span>
            </Card.Meta>
            <Card.Description>{resumen}</Card.Description>
          </Card.Content>
        </CardC>
      </Link>
    </ContainerTotal>
  );
};

function CardNoticia({ data, corte }) {
  let dataCorte = [];
  corte ? (dataCorte = data.slice(0, 3)) : (dataCorte = data);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {dataCorte.map((noticias) => {
            console.log(noticias.portada);
            return (
              <Grid.Column key={noticias._id}>
                <CardNoticias
                  id={noticias._id}
                  titulo={noticias.titulo}
                  portada={noticias.portada}
                  resumen={noticias.resumen}
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

export default CardNoticia;
