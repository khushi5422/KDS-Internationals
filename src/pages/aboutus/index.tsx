import React, { useState } from "react";
import about from "@/styles/About.module.css";
import { Container } from "react-bootstrap";
import Head from "next/head";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Spices Exporter & Food Supplier Department',
//   description: 'Experience the global allure of J K Exports. From the vibrant markets of Ahmedabad to kitchens worldwide, our spices transcend borders.',
//   // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>Spices Exporter & Food Supplier Department</title>
        <meta name="description" content="Experience the global allure of J K Exports." />
      </Head>
      <Container className={`${about.desktop_content}`}>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f1.webp')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Spices Exporter & Food Supplier Department</h1>
            <div className={`${about.grey}`}>
              Welcome to KDS Internationals , your gateway to a world of exquisite flavors and premium quality spices. As pioneers in the spices export industry, we take pride in sourcing and delivering the finest ingredients to kitchens worldwide, ensuring a culinary experience like no other.
            </div>
          </div>
        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.widd} p-2 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Exploring Culinary Horizons</h1>
            <p className={`${about.grey}`}>
              Immerse yourself in the rich tapestry of taste with KDS Internationals, where each spice blend is a testament to our dedication to quality and authenticity. As leaders in the industry, we cater to the discerning palate of chefs and home cooks alike, offering a diverse range of spices sourced from the worlds leading producers.
            </p>
          </div>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f2.webp')` }}></div>
        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f3.webp')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Unveiling the Essence</h1>
            <div className={`${about.grey}`}>
              At KDS Internationals, we believe in forging meaningful connections through food. As the largest exporters of food, we understand the importance of trust and reliability in every transaction. From top exporters of rice to major food exporters, our extensive network ensures that the essence of Indian cuisine reaches every corner of the globe.
            </div>
          </div>
        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.widd} p-2 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Nurturing Global Gastronomy</h1>
            <p className={`${about.grey}`}>
              Join us on a journey of culinary exploration, where every dish tells a story of tradition and innovation. With our commitment to sustainability and quality, we stand as a beacon of excellence in the world of food exports. Experience the taste of distinction with J K Exports - your partner in culinary excellence.
            </p>
          </div>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f4.webp')` }}></div>
        </div>
        <div className={`${about.around} row mt-5 mb-4 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f5.webp')` }}></div>
          <div
            className={`${about.widd} p-2 col-6  `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Empowering Food Innovations</h1>
            <p className={`${about.grey}`}>
              Discover a world of possibilities with J K Exports, where we empower food innovations through our premium spices and ingredients. From traditional blends to exotic flavors, we provide the essential ingredients for chefs and food enthusiasts to create memorable culinary experiences.
            </p>
          </div>
        </div>
      </Container>
      <Container className={`${about.mobile_content}`}>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f1.webp')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Spices Exporter & Food Supplier Department</h1>
            <div className={`${about.grey}`}>
              Welcome to J K Exports, your gateway to a world of exquisite flavors and premium quality spices. As pioneers in the spices export industry, we take pride in sourcing and delivering the finest ingredients to kitchens worldwide, ensuring a culinary experience like no other.
            </div>

          </div>
        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f2.webp')` }}></div>
          <div
            className={`${about.widd} p-2 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Exploring Culinary Horizons</h1>
            <p className={`${about.grey}`}>
              Immerse yourself in the rich tapestry of taste with J K Exports, where each spice blend is a testament to our dedication to quality and authenticity. As leaders in the industry, we cater to the discerning palate of chefs and home cooks alike, offering a diverse range of spices sourced from the worlds leading producers.
            </p>
          </div>

        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f3.webp')` }}></div>
          <div
            className={`${about.widd} p-1 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Unveiling the Essence</h1>
            <div className={`${about.grey}`}>
              At J K Exports, we believe in forging meaningful connections through food. As the largest exporters of food, we understand the importance of trust and reliability in every transaction. From top exporters of rice to major food exporters, our extensive network ensures that the essence of Indian cuisine reaches every corner of the globe.
            </div>
          </div>
        </div>
        <div className={`${about.around} row mt-5 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('c4.webp')` }}></div>
          <div
            className={`${about.widd} p-2 col-6 `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Nurturing Global Gastronomy</h1>
            <p className={`${about.grey}`}>
              Join us on a journey of culinary exploration, where every dish tells a story of tradition and innovation. With our commitment to sustainability and quality, we stand as a beacon of excellence in the world of food exports. Experience the taste of distinction with J K Exports - your partner in culinary excellence.
            </p>
          </div>
        </div>
        <div className={`${about.around} row mt-5 mb-4 `}>
          <div
            className={`${about.box} col-6 `}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ backgroundImage: `url('f5.webp')` }}></div>
          <div
            className={`${about.widd} p-2 col-6  `}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos-once="true">
            <h1>Empowering Food Innovations</h1>
            <p className={`${about.grey}`}>
              Discover a world of possibilities with J K Exports, where we empower food innovations through our premium spices and ingredients. From traditional blends to exotic flavors, we provide the essential ingredients for chefs and food enthusiasts to create memorable culinary experiences.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
