import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' style={{ background: '#FFC680' }}>
      <Navbar.Brand
        href='#home'
        className='font-weight-bold font-italic'
        style={{ fontSize: 'xx-large' }}>
        Tour de Francia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>
            <i className='fas fa-sign-out-alt'></i>
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
