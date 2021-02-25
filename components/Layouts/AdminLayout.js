import SideNav from '../Admin/SideNav/SideNav';
import NavBar from '../Admin/NavBar.js/NavBar';

const AdminLayout = ({ children }) => {
  return (
    <div className='d-flex'>
      <SideNav />
      <div className='d-block w-100'>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
