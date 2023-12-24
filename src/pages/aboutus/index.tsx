import React from "react";
import about from "@/styles/About.module.css";

export default function index() {
  return (
    <>
      <div className={`${about.around} row mt-5`}>
        <div
          className={`${about.box} col-6`}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          style={{ backgroundImage: `url('slider2.jpg')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6`}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>The Richest Masala In The World</h3>
          <p className={`${about.grey}`}>
            Inspired by the rebellious spirit of America and the intrigue of
            unwavering authenticity, R13 launched in Fall 2009. At the forefront
            of design, R13 cuts avant-garde silhouettes such as the skinny
            legging and harem pant from Italian and Turkish denim produced in
            Castelfranco, Italy. Pure indigo casting, quality stretch and
            machine hand mending give the jeans their superior shape
          </p>
          <b>#rings #necklaces #silverrings #earrings #goldsmith</b>
         
        </div>
      </div>
      <div className={`${about.around} row mt-5`}>
        <div
          className={`${about.widd} p-2 col-6`}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>The finest spice</h3>
          <p className={`${about.grey}`}>
            Inspired by the rebellious spirit of America and the intrigue of
            unwavering authenticity, R13 launched in Fall 2009. At the forefront
            of design, R13 cuts avant-garde silhouettes such as the skinny
            legging and harem pant from Italian and Turkish denim produced in
            Castelfranco, Italy. Pure indigo casting, quality stretch and
            machine hand mending give the jeans their superior shape
          </p>
          <b>#rings #necklaces #silverrings #earrings #goldsmith</b>
        </div>
        <div
          className={`${about.box} col-6`}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          style={{ backgroundImage: `url('slider2.jpg')` }}
        ></div>
      </div>

      <div className={`${about.around} row mt-5 mb-4`}>
        <div
          className={`${about.box} col-6`}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          style={{ backgroundImage: `url('slider2.jpg')` }}
        ></div>
        <div
          className={`${about.widd} p-2 col-6 `}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          {/* <div className={`${about.containeer}`}>rings</div> */}
          <h3>The premium flavor</h3>
          <p className={`${about.grey}`}>
            Inspired by the rebellious spirit of America and the intrigue of
            unwavering authenticity, R13 launched in Fall 2009. At the forefront
            of design, R13 cuts avant-garde silhouettes such as the skinny
            legging and harem pant from Italian and Turkish denim produced in
            Castelfranco, Italy. Pure indigo casting, quality stretch and
            machine hand mending give the jeans their superior shape
          </p>
          <b>#rings #necklaces #silverrings #earrings #goldsmith</b>
        </div>
      </div>
    </>
  );
}
