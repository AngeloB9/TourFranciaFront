import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardNoticia = ({ titulo, portada, resumen }) => {
  return (
    <Card>
      <Image
        style={{ height: '15em', width: '20.7em' }}
        src={portada}
        ui={true}
      />
      <Card.Content>
        <Card.Header>{titulo}</Card.Header>
        <Card.Meta>
          <span className='date'>"Noticias"</span>
        </Card.Meta>
        <Card.Description>{resumen}</Card.Description>
      </Card.Content>
    </Card>
  );
};

function Noticia({ data }) {
  console.log(data);
  return (
    <div style={{ margin: '5em' }}>
      <Grid columns={3}>
        <Grid.Row>
          {data.map((noticias) => {
            return (
              <Grid.Column>
                <CardNoticia
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

export default Noticia;
