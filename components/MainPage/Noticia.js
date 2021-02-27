import React from 'react'
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardParticipantes=({nombre})=>{
    return (
        <Card>
        <Image src='https://www.indiewire.com/wp-content/uploads/2020/02/spider_man_far_from_home_peter_parker_1562394390.0.jpg?w=780' wrapped ui={false} />
        <Card.Content>
        <Card.Header>{nombre}</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
           Estudiante de Ingeniería
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Amigos
        </a>
        </Card.Content>
    </Card>
    )
}
const lista=[{nombre:'Angelo 1'}, {nombre:'Angelo 2'}, {nombre:'Angelo 3'}]

function Noticia() {
    return (
        <div style={{margin:'5em'}}>
            <Grid columns={3}>
                <Grid.Row>
                        {
                        lista.map(element =>{
                      return(
                        <Grid.Column>
                            <CardParticipantes nombre={element.nombre}/>
                            <br/>
                        </Grid.Column>
                      )
                        } )
                        }
                    
                    
                </Grid.Row>
                <Grid.Row>
                        {
                        lista.map(element =>{
                      return(
                        <Grid.Column>
                            <CardParticipantes nombre={element.nombre}/>
                            <br/>
                        </Grid.Column>
                      )
                        } )
                        }
                    
                    
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Noticia
