import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Home from '@/styles/Home.module.css'

const AboutUs = () => {
  return (
      <section id="about-us" className="mt-5 mb-5">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <h2 className={`${Home.about_title}`}>ABOUT J K Exports</h2>
              <h3>Introducing J K Export- Your Trusted Source for Quality Products</h3>
              <div className={`${Home.about_image}`}>
                <img
                  src="/fullspice.webp" // Update the path to your image
                  alt="About Us"
                  className={`${Home.img_fluid}`}
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="text-left">
                <p className={`${Home.aboutmid}`}>Nestled in <b>Ahmedabad</b>, the heart of India, J K Exports epitomizes a legacy of delivering unparalleled quality in the realm
                  of spice exports. With a commitment to excellence, our journey unfolds against the backdrop of Indias rich culinary heritage. We take pride in
                  being a beacon of quality, seamlessly blending the diverse flavors of  <b>India</b> into every spice we export. At J K Exports, Indias essence is intricately
                  woven into our products, ensuring an authentic, aromatic experience that transcends borders. As purveyors of premium quality, we invite you to embark
                  on a sensory exploration, where J K Exports stands as the epitome of Indias finest spices, meticulously curated for global kitchens.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
export default AboutUs;
