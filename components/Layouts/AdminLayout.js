import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Loader from '../Loader/Loader';
import SideNav from '../Admin/SideNav/SideNav';
import NavBar from '../Admin/NavBar/NavBar';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const AdminLayout = ({ children, router }) => {
  useEffect(() => {
    const redirect = () => {
      cookie.get('usuario') ? '' : router.push('/');
    };
    redirect();
  }, []);

  const logOut = () => {
    cookie.remove('usuario', { path: '/' });
    router.push('/');
  };

  return (
    <div className='d-flex'>
      <SideNav />
      <div className='d-block w-100'>
        <NavBar logOut={logOut} />
        {children}
      </div>
    </div>
  );
};

export default withRouter(AdminLayout);
