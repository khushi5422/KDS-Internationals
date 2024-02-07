import React, { useState } from "react";
import about from "@/styles/About.module.css";
import { Container } from "react-bootstrap";
import Head from "next/head";
// import { Metadata } from 'next';
 
// export const metadata: Metadata = {
//   title: 'Spices Beyond Borders',
//   description: 'Experience the global allure of J K Exports. From the vibrant markets of Ahmedabad to kitchens worldwide, our spices transcend borders.',
//   // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function Aboutus() {
  const [mobile, setmobile] = useState(false);
  return (
    <>
    <Head>
        <title>Spices Beyond Borders</title>
        <meta name="description" content="Experience the global allure of J K Exports." />
      </Head>
    <style>{`
    .mobile-content {
      display: none;
    }
    @media (max-width: 767px) {
      .desktop-content {
        display: none;
      }
    
      .mobile-content {
        display: block;
      }
    }
    `}</style>
    <Container className="desktop-content">
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f1.png')` }}
        ></div>
        <div
          className={`${about.widd} p-1 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Spices Beyond Borders</h3>
          <div className={`${about.grey}`}>
          Experience the global allure of J K Exports. From the vibrant markets of Ahmedabad to kitchens worldwide, our spices transcend borders. 
          Join us in spreading the rich tapestry of Indian flavors to every corner of the globe.
          </div>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
         
        </div>
      </div>
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.widd} p-2 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Heritage in Every Spice</h3>
          <p className={`${about.grey}`}>
          Embark on a journey through Indias culinary legacy with J K Exports. Our spices are a testament to centuries-old traditions, 
          capturing the essence of Indias diverse culinary heritage. Each blend tells a story, making your dishes a culinary odyssey.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f2.png')` }}
        ></div>
      </div>
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f3.png')` }}
        ></div>
        <div
          className={`${about.widd} p-1 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Green Commitment</h3>
          <div className={`${about.grey}`}>
          At J K Exports, we embrace sustainability. Our spices are sourced responsibly, fostering eco-friendly practices. Join us in the journey towards a 
          greener tomorrow, where every flavor is infused with a commitment to the planet.
          </div>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
         
        </div>
      </div>
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.widd} p-2 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Culinary Mastery</h3>
          <p className={`${about.grey}`}>
          Unlock the secrets of culinary excellence with J K Exports. Our spices are the choice of seasoned chefs and home cooks alike, transforming ordinary 
          dishes into extraordinary experiences. Elevate your culinary journey with the touch of J K Exports expertise.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f4.png')` }}
        ></div>
      </div>
      <div className={`${about.around} row mt-5 mb-4 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f5.png')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6  `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Unrivaled Quality</h3>
          <p className={`${about.grey}`}>
          Immerse yourself in a symphony of flavors meticulously crafted by J K Exports. We stand out with a commitment to sourcing only the finest spices, 
          ensuring an unrivaled quality that elevates your culinary creations.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
      </div>
      </Container>

    <Container className="mobile-content">
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f1.png')` }}
        ></div>
        <div
          className={`${about.widd} p-1 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Spices Beyond Borders</h3>
          <div className={`${about.grey}`}>
          Experience the global allure of J K Exports. From the vibrant markets of Ahmedabad to kitchens worldwide, our spices transcend borders. 
          Join us in spreading the rich tapestry of Indian flavors to every corner of the globe.
          </div>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
         
        </div>
      </div>
      <div className={`${about.around} row mt-5 `}>
      <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f2.png')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Heritage in Every Spice</h3>
          <p className={`${about.grey}`}>
          Embark on a journey through Indias culinary legacy with J K Exports. Our spices are a testament to centuries-old traditions, 
          capturing the essence of Indias diverse culinary heritage. Each blend tells a story, making your dishes a culinary odyssey.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
        
      </div>
      <div className={`${about.around} row mt-5 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f3.png')` }}
        ></div>
        <div
          className={`${about.widd} p-1 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Green Commitment</h3>
          <div className={`${about.grey}`}>
          At J K Exports, we embrace sustainability. Our spices are sourced responsibly, fostering eco-friendly practices. Join us in the journey towards a 
          greener tomorrow, where every flavor is infused with a commitment to the planet.
          </div>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
         
        </div>
      </div>
      <div className={`${about.around} row mt-5 `}>
      <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('c4.png')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6 `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Culinary Mastery</h3>
          <p className={`${about.grey}`}>
          Unlock the secrets of culinary excellence with J K Exports. Our spices are the choice of seasoned chefs and home cooks alike, transforming ordinary 
          dishes into extraordinary experiences. Elevate your culinary journey with the touch of J K Exports expertise.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
      </div>
      <div className={`${about.around} row mt-5 mb-4 `}>
        <div
          className={`${about.box} col-6 `}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
          style={{ backgroundImage: `url('f5.png')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6  `}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>Unrivaled Quality</h3>
          <p className={`${about.grey}`}>
          Immerse yourself in a symphony of flavors meticulously crafted by J K Exports. We stand out with a commitment to sourcing only the finest spices, 
          ensuring an unrivaled quality that elevates your culinary creations.
          </p>
          {/* <b>#rings #necklaces #silverrings #earrings #goldsmith</b> */}
        </div>
      </div>
      </Container>
    </>
  );
}
