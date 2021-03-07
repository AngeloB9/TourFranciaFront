import styled from 'styled-components';
import { Image, Card } from 'semantic-ui-react';

export const ContainerTotal = styled.div`
   {
    width: 30em;
    height: 30em;
    margin-left: 7em;
    @media (max-width: 768px) {
      width: 15em;
      height: 15em;
      margin-left: 5em;
    }
    @media (max-width: 540px) {
      width: 8em;
      height: 20em;
      margin-left: '4em';
    }
    @media (max-width: 360px) {
      width: 6em;
      height: 20em;
    }
    @media (max-width: 280px) {
      width: 6em;
      height: 20em;
      margin-right: 15em;
    }
  }
`;

export const ImageC = styled(Image)`
  width: auto;
  height: 18em;
  @media (max-width: 768px) {
    width: auto;
    height: 10em;
    background-size: cover;
  }
`;

export const CardC = styled(Card)`
  width: auto;
  height: 30em;
  overflow: auto;
  @media (max-width: 768px) {
    width: auto;
    height: 20em;
    overflow: auto;
  }
`;
