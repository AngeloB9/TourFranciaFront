import { useState } from 'react';
import { useRouter } from 'next/router';
import LogIn from '../../components/LogIn/LogIn';
import { LoginPage } from '../../components/LogIn/LogInStyles';
import SignUp from '../../components/SignUp/SignUp';
import SignUpWarning from '../../components/SignUp/WarningSignUp';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookie = new Cookies();

const index = () => {
  //Modal de sign up
  const [signupModal, setsignupModal] = useState(false);
  const signupModalClose = () => setsignupModal(false);
  const signupModalShow = () => setsignupModal(true);
  const [errorSignUp, seterrorSignUp] = useState();
  //Modal de warning al registrarse
  const [warningSignUp, setwarningSignUp] = useState(false);
  const warningSignUpClose = () => setwarningSignUp(false);
  const warningSignUpShow = () => setwarningSignUp(true);

  const [error, seterror] = useState();
  cookie.get('usuario') ? useRouter().push('/admin/participantes') : '';
  //Login Handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${process.env.apiURL}/usuario/auth`, {
        headers: {
          Authorization: `${event.target.dni.value}:${event.target.password.value}`,
        },
      });
      cookie.set('usuario', response.data, { path: '/' });
      window.location.replace('/');
    } catch (error) {
      console.log(error);
      seterror(error);
    }
  };
  //Sign Up handler
  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.apiURL}/usuarios`, {
        dni: event.target.dni.value,
        password: event.target.password.value,
        admin: false,
      });
      cookie.set(
        'usuario',
        {
          usuario: response.data.dni,
          admin: response.data.admin,
        },
        { path: '/' }
      );
      window.location.replace('/');
    } catch (error) {
      seterrorSignUp(error);
      warningSignUpShow();
    }
  };

  return (
    <LoginPage className='d-flex justify-content-center align-items-center'>
      <LogIn
        handleSubmit={handleSubmit}
        error={error}
        handleSignUpOpen={signupModalShow}
      />
      {/*-------------Modal de registro--------*/}
      <SignUp
        show={signupModal}
        handleClose={signupModalClose}
        handleSubmit={handleSignUpSubmit}
      />
      {/*-------------Modal de Warning en el registro----- */}
      <SignUpWarning show={warningSignUp} handleClose={warningSignUpClose} />
    </LoginPage>
  );
};

export default index;
