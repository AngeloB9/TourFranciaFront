import { Nav } from 'react-bootstrap';
import { NavStyle, Nav_link } from './SideNavStyles';

const SideNav = () => {
  return (
    <Nav defaultActiveKey='/home' className='flex-column' style={NavStyle}>
      <Nav.Item className='mb-5'>
        <img
          alt=''
          src='https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2020-08/000_1ia52u_0.jpg?itok=ZYPI8ZxE'
          width='110'
          height='90'
          className='d-block ml-auto mr-auto mt-5'
        />
      </Nav.Item>
      <Nav_link href='/admin/participantes' className='mb-3'>
        <i className='fas fa-users mr-2'></i>
        Participantes
      </Nav_link>
      <Nav_link href='/admin/noticias' className='mb-3'>
        <i className='fas fa-newspaper mr-2'></i>
        Noticias
      </Nav_link>
      <Nav_link href='/admin/etapas' className='mb-3'>
        <i className='fas fa-mountain mr-2'></i>
        Etapas
      </Nav_link>
      <Nav_link href='/admin/ganadores' className='mb-3'>
        <i className='fas fa-trophy mr-2'></i>
        Ganadores
      </Nav_link>
      <Nav_link href='/admin/comentarios'>
        <i className='fas fa-comments mr-2'></i>
        Comentarios
      </Nav_link>
    </Nav>
  );
};

export default SideNav;
