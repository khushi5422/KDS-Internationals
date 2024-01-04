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
            <div className="about_content">
              <h2 className="about_title">ABOUT JK Exports</h2>
              <h3>Introducing Parrijat Export- Your Trusted Source for Quality Products</h3>
              <p className='mid'>Parrijat Export is manufacture & exporter from origin point of Fresh, Dehydrated Onion, Garlic, Maize, Moringa leaves, where these products are being grown and cultivated. The company is having good associations with some worldwide companies.</p>
              <p className="mid">
              Our operational hub is situated in Mahuva, Gujarat, India, while our administrative base is in Ahmedabad, Gujarat, India. This strategic placement ensures efficient production and distribution to meet global demand. Parrijat Export is a leading company in producing & exporting best quality of Fresh, Dehydrated Onion, Garlic, maize, moringa leaves and other product in different form from Mahuva, INDIA.
              </p>
              <Button variant="primary">Read More ...</Button>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="about_image  2px border">
              <img
                src="/fullspice.png" // Update the path to your image
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default AboutUs;
