import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import Figure from 'react-bootstrap/Figure';
const NoticiaById = ({ id, foto, titulo, noticia }) => {
  return (
    <Figure>
      <div className='imagen'>
        <Figure.Image width={571} height={580} alt='' src={foto} />
        <style>text-align: center; border-style: solid;</style>
      </div>

      <Figure.Caption>Titulo:{titulo}</Figure.Caption>
      <Figure.Caption>{noticia}</Figure.Caption>
    </Figure>
  );
};

function NoticiasId({ noticia }) {
  return (
    <div>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <NoticiaById
              id={noticia.id}
              titulo={noticia.titulo}
              noticia={noticia.noticia}
              foto={noticia.portada}
            />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default NoticiasId;
