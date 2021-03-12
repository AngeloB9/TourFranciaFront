import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import Figure from 'react-bootstrap/Figure';
const NoticiaById = ({ id, foto, titulo, noticia }) => {
  return (
    <div className='imagen'>
      <h1>Título :{titulo}</h1>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <img width='100%' height='100%' src={foto} />
      </div>
      <style>text-align: center; border-style: solid;</style>
      <br></br>
      <h5>{noticia}</h5>
    </div>
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
