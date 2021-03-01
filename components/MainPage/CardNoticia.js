import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardNoticia = ({ titulo, foto, resumen }) => {
  return (
    <Card>
      <Image src={foto} wrapped ui={false} />
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
const lista = [
  { nombre: 'Angelo 1' },
  { nombre: 'Angelo 2' },
  { nombre: 'Angelo 3' },
  { nombre: 'Angelo 4' },
];

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
                  foto={noticias.foto}
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
