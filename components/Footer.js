import React, { Component } from 'react';


//Versión 1 del navbar
class Footer extends Component {
  render() {
    return (
      <div className='contenedorBarrafoot'>
        <div className='barrafoot'>
          <table className='footIconTable'>
            <tbody>
              <tr>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.facebook.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-facebook '></i>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.twitter.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.youtube.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.instagram.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.google.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-google-plus-g'></i>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.spotify.com'
                    rel='noopener noreferrer'>
                    <i className='fab fa-spotify'></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='footLinea1'>
            <table className='footItemTable'>
              <tbody>
                <tr>
                  <td className='footitem'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Github</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href=''
                          target='_blank'
                          rel='noopener noreferrer'>
                          Frontend
                        </a>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href=''
                          target='_blank'
                          rel='noopener noreferrer'>
                          Backend
                        </a>
                      </li>
                    
                    </ul>
                  </td>
                  <td className='footitem'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Texto</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href=''
                          target='_blank'
                          rel='noopener noreferrer'>
                          Texto
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='footInfo'>
            <table className='footInfoTable'>
              <tbody>
                <tr>
                  <td>Políticas de accesibilidad</td>
                  <td className='infoDerecha'>Tour de Francia - Todos los derechos reservados</td>
                </tr>
                <tr>
                    <td> Fecha:</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;