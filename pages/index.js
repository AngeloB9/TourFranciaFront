import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'


const index = () => {
  return (
    <div>
      <NavBar/>
      <h1>Hola mundo</h1>
      <div style={{background:"blue"}} className="w-100">
        <Carousel/>
      </div>
      <Footer/>
     
    </div>
    
  );
};

export default index;
