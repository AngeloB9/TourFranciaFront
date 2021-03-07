import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layouts/Layout';
const about = () => {
  return (
    <Layout>
      <div style={{ padding: '2%' }}>
        <h1>Política de Accesibilidad</h1>
        <br />
        <Jumbotron>
          <p>
            Esta política de accesibilidad establece la información que detalla
            la disponibilidad del sitio web de Tour Francia. (“TF”) en el
            dominio (el “sitio web de TF”) para usuarios con necesidades
            diferentes. La política de accesibilidad cubre los objetivos y el
            enfoque relativo a la accesibilidad, las funciones principales que
            un usuario del sitio web de TF debe ser capaz de realizar y qué está
            haciendo TF para mejorar la accesibilidad al sitio web de TF.
          </p>
          <p>
            <strong>Introducción </strong>
            <br />
            <br />
            Tour Francia reconoce que muchas formas de discapacidad diferentes
            afectan al acceso al sitio web de Tour Francia. Se ha adoptado un
            enfoque proactivo para mejorar el sitio web de Tour Francia y los
            servicios ofrecidos a través del mismo. Tour Francia tiene como
            objetivo para el sitio web de Tour Francia satisfacer las
            necesidades de los usuarios con discapacidades y ofrecer servicios e
            información accesible. Tour Francia realiza esfuerzos para avanzar
            en el cumplimiento de los estándares Web Content Accessibility
            Guidelines 1.0 AA (Pautas de accesibilidad para el contenido web 1.0
            AA) del World Wide Web Consortium (WC3). Tour Francia busca
            proporcionar una buena experiencia a los usuarios del sitio web de
            Tour Francia con necesidades especiales.
            <br />
            <br />
            <strong>Enfoque</strong> <br />
            <br />
            El enfoque de Tour Francia de cara a la accesibilidad es el de
            intentar hacer que el sitio y los servicios de Tour Francia sean
            fáciles de usar y entendibles para todos los usuarios, incluida la
            personalización de dispositivos informáticos. Se reconoce que no
            solo la gente con discapacidad está afectada con problemas de
            accesibilidad. Las páginas del sitio web de Tour Francia pretenden
            ser claras y tener un contenido sencillo de entender.
            <br />
            <br />
            <strong>Uso del Sitio Web de Tour Francia</strong> <br />
            <br />
            El sitio web de Tour Francia ha sido desarrollado de modo que todos
            los títulos, enlaces y otros contenidos de textos sean totalmente
            compatibles con HTML 5. Esto permite que los lectores de texto
            puedan leer el texto y los navegadores compatibles con HTML 5 puedan
            ajustar las fuentes. El sitio web de Tour Francia responde a los
            cambios de factor de forma y tamaño de la fuente asumiendo un uso
            razonable. El sitio web de Tour Francia incluye lo siguiente: Un
            mapa del sitio. Datos de contacto con Tour Francia. Datos de
            contacto para que los usuarios puedan dar su opinión sobre las
            formas de mejorar la accesibilidad del sitio web de Tour Francia.
          </p>
        </Jumbotron>
      </div>
    </Layout>
  );
};

export default about;
