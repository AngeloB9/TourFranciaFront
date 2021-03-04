import { Form, Button, Container, Alert } from 'react-bootstrap';
import {
  Icon,
  FormContainer,
  ImageContainer,
  LogInContainer,
  Image,
} from './LogInStyles';

const LogIn = ({ handleSubmit, error, handleSignUpOpen }) => {
  return (
    <LogInContainer>
      <ImageContainer>
        <Image src='/tourLogin.jpg' alt='' />
      </ImageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1 className='font-weight-bold mb-5'>Log In</h1>

          {error && (
            <Alert variant='danger' style={{ width: '100%' }}>
              Usuario o contraseña incorrectos
            </Alert>
          )}

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
          <span
            style={{ color: 'yellow', cursor: 'pointer' }}
            onClick={handleSignUpOpen}>
            Registrate
          </span>
          <br />
          <Button className='mt-5' variant='light' type='submit'>
            Log In
          </Button>
        </Form>
      </FormContainer>
    </LogInContainer>
  );
};

export default LogIn;
