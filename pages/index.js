import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Noticias from '../components/MainPage/Noticia'
import Participantes from '../components/Participantes/Participante'


const index = () => {
  return (
    <div>
      <NavBar/>
      <h1>Hola mundo</h1>
      <div style={{background:"white"}} className="w-100">
        <Carousel/>
      </div>
      <Noticias/>
      <Participantes/>
      <Footer/>
     
    </div>
    
  );
};

export default index;
