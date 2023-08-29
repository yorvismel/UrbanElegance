import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const SeccionBottom = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://http2.mlstatic.com/D_NQ_NP_888070-MCO45824573522_052021-O.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>20 % de descuento</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://http2.mlstatic.com/D_NQ_NP_888070-MCO45824573522_052021-O.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Oferta especial</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://http2.mlstatic.com/D_NQ_NP_888070-MCO45824573522_052021-O.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Tercer Slide</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        


  );
};

export default SeccionBottom;
