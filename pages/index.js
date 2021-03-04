import Cookies from 'universal-cookie';

const cookies = new Cookies();

const index = () => {
  return (
    <div>
      Soy el index
      <button
        onClick={() => {
          cookies.remove('usuario');
          window.location.replace('/');
        }}>
        Logout
      </button>
      <a href={`/login`} className='btn btn-primary'>
        Login
      </a>
    </div>
  );
};

export default index;
