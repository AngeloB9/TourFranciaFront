import Login from '../pages/login';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const usuario = cookie.get('usuario');

    // If user is not logged in, return login component

    if (!usuario) {
      return <Login />;
    }

    // If user is logged in, return original component
    if (usuario) {
      return <Component {...props} />;
    }
  };

  // Copy getInitial props so it will run as well
  /*if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }*/

  return Auth;
};

export default withAuth;
