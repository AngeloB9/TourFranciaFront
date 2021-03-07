import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const NavBar = () => {
  return (
    <Navbar variant='dark' expand='lg' style={{ background: 'black' }}>
      <Navbar.Brand style={{ color: 'white' }} href='/'>
        <img
          alt=''
          src='https://cdn.todomountainbike.net/images/articles/2020/tour-de-francia-2020-aplazado.jpg'
          width='30'
          height='30'
          className='d-inline-block align-center'
        />
        Tour de Francia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' style={{ color: 'white' }}>
        <Nav className='mr-auto'>
          <Nav.Link style={{ color: 'white' }} href='/invitado/noticias'>
            Noticias
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='/etapas'>
            Etapas
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href='/invitado/participantes'>
            Participantes
          </Nav.Link>
        </Nav>
        <Nav>
          {cookie.get('usuario') && (
            <NavDropdown
              title='Perfil'
              id='basic-nav-dropdown'
              style={{ marginLeft: 'auto' }}>
              <NavDropdown.Item href='/admin/participantes'>
                Admin
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  cookie.remove('usuario', { path: '/' });
                  window.location.replace('/');
                }}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {!cookie.get('usuario') && (
            <Nav.Link
              style={{ color: 'black' }}
              href='/login'
              className='btn btn-light'>
              Log In
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
