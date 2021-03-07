import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import Link from 'next/link';
const Footer = () => {
  var today = new Date(),
    date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

  return (
    <MDBFooter color='black' className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>
              © Tour de Francia - Todos los derechos reservados
            </h5>
            <p>
              <Link href='/about'>
                <a>Politicas de accesibilidad</a>
              </Link>
            </p>
          </MDBCol>
          <MDBCol md='6'>
            <h5 className='title'>Links</h5>
            <ul>
              <li className='list-unstyled'>
                <a href='#!'></a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 2</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 3</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className='footer-copyright text-center py-3'
        style={{ background: 'yellow', color: 'black' }}>
        <MDBContainer fluid>
          <a> Tour Francia - Fecha actual: {date} </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
