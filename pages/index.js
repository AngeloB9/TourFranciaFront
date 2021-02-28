import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';
import Noticia_Participante from '../components/MainPage/Noticia_Participante';
import Participantes from '../components/Participantes/Participante';

const index = () => {
  return (
    <div>
      <NavBar />
      <h1>Hola mundo</h1>
      <div style={{ background: 'white' }} className='w-100'>
        <Carousel />
      </div>
      <Noticia_Participante />
      <Participantes />
      <Footer />
    </div>
  );
};

export default index;
