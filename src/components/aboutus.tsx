import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
      <style>{`
    .about_section {
        padding: 80px 0;
      }
      
      .about_content {
        text-align: left;
      }
      
      .about_title {
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
      }
      
      .about_paragraph {
        font-size: 18px;
        margin-bottom: 30px;
      }
      
      .about_image {
        text-align: center;
        display: flex;
       align-items: center;
        justify-content: center;
      }
      .mid{
        font-size: medium;
        margin-top: 3vh;
      }
      .img_fluid{
        max-width: 100%;
    height: 60vh;
      }
      
      @media (max-width: 768px) {
        .about_content,
        .about_image {
          text-align: center;
          padding: 5vw 
        }
      }
    `}</style>
      <section id="about-us" className="about-section mt-5 mb-5">
        <Container className=''>
          <Row>
            <Col lg={6} md={12}>
              <div className="about_image">
                <img
                  src="/fullspice.png" // Update the path to your image
                  alt="About Us"
                  className="img_fluid"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="about_content">
                <h2 className="about_title">ABOUT JK Exports</h2>
                <h3>Introducing JK Export- Your Trusted Source for Quality Products</h3>
                <p className='mid'>Nestled in <b>Ahmedabad</b>, the heart of India, JK Exports epitomizes a legacy of delivering unparalleled quality in the realm
                  of spice exports. With a commitment to excellence, our journey unfolds against the backdrop of Indias rich culinary heritage. We take pride in
                  being a beacon of quality, seamlessly blending the diverse flavors of  <b>India</b> into every spice we export. At JK Exports, Indias essence is intricately
                  woven into our products, ensuring an authentic, aromatic experience that transcends borders. As purveyors of premium quality, we invite you to embark
                  on a sensory exploration, where JK Exports stands as the epitome of Indias finest spices, meticulously curated for global kitchens.
                </p>
                {/* <Button variant="warning" className='mt-3'>Read More ...</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
