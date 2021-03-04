import styled from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  background: #b5a197;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const LogInContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;

export const Icon = styled.i`
  font-size: xx-large;
  color: #fee94e;
`;
export const FormContainer = styled.div`
  text-align: center;
  padding: 4em 1.5em;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
  background: #020301;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 600px;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }
`;
