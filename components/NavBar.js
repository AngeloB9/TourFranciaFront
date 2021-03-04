import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' style={{ background: 'black' }}>
      <Navbar.Brand style={{ color: 'white' }} href='/'>
        <img
          alt=''
          src='https://cdn.todomountainbike.net/images/articles/2020/tour-de-francia-2020-aplazado.jpg'
          width='30'
          height='30'
          className='d-inline-block align-center'
        />{' '}
        Tour de Francia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link style={{ color: 'white' }} href='/invitado/noticias'>
            Noticias
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='#link'>
            Etapas
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='/invitado/participantes'>
            Participantes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
