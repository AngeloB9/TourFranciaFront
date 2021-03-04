import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ContainerTotal, ImageC, CardC } from './CardNoticiaStyle';

const CardNoticias = ({ titulo, portada, resumen }) => {
  return (
    <ContainerTotal>
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
    </ContainerTotal>
  );
};

function CardNoticia({ data, corte }) {
  console.log(data);
  let dataCorte = [];
  corte ? (dataCorte = data.slice(0, 3)) : (dataCorte = data);
  return (
    <div style={{ margin: '7em' }}>
      <Grid columns={3}>
        <Grid.Row>
          {data.map((noticias) => {
            return (
              <Grid.Column>
                <CardNoticias
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
