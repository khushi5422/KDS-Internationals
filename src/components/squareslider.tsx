import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SquareImageCarousel = () => {
    return (
        <>
            <style>{`
    .carousel-section {
        padding: 80px 0;
      }
      
      .square-image {
        width: calc(25% - 10px); /* Adjust the width and gap as needed */
        height: 200px; /* Adjust the height as needed */
        object-fit: cover;
        margin-right: 10px; /* Adjust the gap between images */
      }
      
      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        background-color: #000; /* Set arrow color to black */
      }
      
      @media (max-width: 768px) {
        .carousel-section {
          padding: 40px 0;
        }
      
        .square-image {
          width: calc(50% - 10px);
        }
      }
      
    `}</style>
           <section id="image-carousel" className="carousel-section">
      <Container>
        <Carousel
          prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
          nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
          indicators={false}
        >
          <Carousel.Item>
            <div className="d-flex justify-content-between">
            <Image
                src="/chillyflex.png"
                alt="Image 1"
                className="square-image"
              />
              <Image
                src="/blackcardemon.png"
                alt="Image 2"
                className="square-image"
              />
              <Image
                src="driedchillies.png"
                alt="Image 3"
                className="square-image"
              />
            <Image
                src="/chillyflex.png"
                alt="Image 1"
                className="square-image"
              />
              <Image
                src="/blackcardemon.png"
                alt="Image 2"
                className="square-image"
              />
              <Image
                src="driedchillies.png"
                alt="Image 3"
                className="square-image"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
            <Image
                src="/chillyflex.png"
                alt="Image 1"
                className="square-image"
              />
              <Image
                src="/blackcardemon.png"
                alt="Image 2"
                className="square-image"
              />
              <Image
                src="driedchillies.png"
                alt="Image 3"
                className="square-image"
              />
            <Image
                src="/chillyflex.png"
                alt="Image 1"
                className="square-image"
              />
              <Image
                src="/blackcardemon.png"
                alt="Image 2"
                className="square-image"
              />
              <Image
                src="driedchillies.png"
                alt="Image 3"
                className="square-image"
              />
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item for additional sets of images */}
        </Carousel>
      </Container>
    </section>
        </>
    );
};

export default SquareImageCarousel;
