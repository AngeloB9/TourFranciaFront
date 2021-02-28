import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' style={{ background: 'red' }}>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='https://cdn.todomountainbike.net/images/articles/2020/tour-de-francia-2020-aplazado.jpg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Tour de Francia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
