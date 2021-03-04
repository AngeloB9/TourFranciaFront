import { Navbar, Nav } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const NavBar = ({ logOut }) => {
  return (
    <Navbar expand='lg' style={{ background: '#FFC680' }}>
      <Navbar.Brand
        href='/'
        className='font-weight-bold font-italic'
        style={{ fontSize: 'xx-large' }}>
        Tour de Francia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='' onClick={logOut}>
            <i className='fas fa-sign-out-alt'></i>
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
