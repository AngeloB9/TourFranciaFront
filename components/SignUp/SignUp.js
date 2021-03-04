import { Modal, Form, Button, Container } from 'react-bootstrap';
import { Icon } from '../LogIn/LogInStyles';

const SignUp = ({ show, handleClose, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='dni'>
            <Form.Label>DNI</Form.Label>
            <Container className='d-flex'>
              <Icon className='fas fa-user mr-3 mt-1'></Icon>
              <Form.Control name='dni' type='text' placeholder='DNI' required />
            </Container>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Container className='d-flex'>
              <Icon className='fas fa-key mr-3 mt-1'></Icon>
              <Form.Control
                name='password'
                type='password'
                placeholder='Contraseña'
                required
                autoComplete='on'
              />
            </Container>
          </Form.Group>
          <br />
          <Button className='mt-2' variant='light' type='submit'>
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
