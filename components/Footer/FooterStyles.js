import styled from 'styled-components'

.contenedorBarrafoot {
    margin-top: auto;
    position: relative;
    bottom: 0;
    font-family: 'Georgia';
  }
  .barrafoot {
    background-color: #282120;
    color: white;
    font-size: 1em;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  .footIconTable {
    width: 70%;
    margin: 0px auto;
    table-layout: fixed;
  }
  .footItemTable {
    width: 70%;
    margin: 0px auto;
    table-layout: fixed;
  }
  .footTitle {
    font-size: 1.2em;
  }
  .footLink {
    color: white;
    font-size: 0.9em;
    text-decoration: none;
    /* no underline */
  }
  .footLink:hover {
    color: white;
    text-decoration: none;
    /* no underline */
  }
  .footLinkList {
    display: table;
    margin: 0 auto;
    list-style-type: none;
  }
  .footitem {
    padding: 1em;
    vertical-align: top;
  }
  .footicon {
    padding: 1em;
    color: #005795;
    font-size: 2em;
    text-align: center;
  }
  .footicon:hover {
    color: white;
  }
  .footInfo {
    background: #FAD02C;
    margin-top: 5em;
    padding: 2em;
    padding-bottom: 3.5em;
  }
  .footInfoTable {
    font-size: 0.7em;
    color: black;
    width: 100%;
    margin: 0px auto;
    table-layout: fixed;
  }
  .footLinea1 {
    box-shadow: 0px 50px 30px -50px #000000, 0px -50px 30px -50px #000000;
    margin: 0 auto;
    padding: 1px;
    width: 70%;
    margin-top: 1em;
    margin-bottom: 1em;
    
  }
  @media screen and (max-width: 768px) {
    .footLinea1 {
      width: 85%;
    }
  }
  .infoDerecha {
    text-align: right;
  }