import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'>
        <MDBCarouselInner>
          <MDBCarouselItem itemId='1'>
            <MDBView>
              <img
                className='d-block w-100 max-width: 100%'
                src='https://notinforma.com/wp-content/uploads/2020/09/tourdefranceftrjpg_123f1wsqkuivf1sxr2lpogqvs3.jpg'
                alt='First slide'
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='2'>
            <MDBView>
              <img
                className='d-block w-100'
                src='https://deportesimagenes.canalrcn.com/ImgDeportesNew/tourdefranciaetapas21egan11111.jpg'
                alt='Second slide'
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId='3'>
            <MDBView>
              <img
                className='d-block w-100'
                src='https://s.france24.com/media/display/ae72d042-e3d3-11ea-a376-005056a98db9/w:1280/p:16x9/6558ee73658087af41e50f7ab37b426595a8a662.webp'
                alt='Third slide'
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
