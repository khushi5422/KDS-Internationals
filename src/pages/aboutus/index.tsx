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
          <button
            className={`${about.fit} btn btn-outline-dark mt-2 d-flex align-items-center`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="m-0 me-1">Visit Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
            >
              <path
                d="M0.933594 8.2081V1.1719C0.933594 0.684685 1.52266 0.440697 1.86716 0.785201L5.38527 4.3033C5.59882 4.51686 5.59882 4.86314 5.38527 5.07669L1.86716 8.59479C1.52266 8.93933 0.933594 8.69531 0.933594 8.2081Z"
                fill="#060606"
              />
            </svg>
          </button>
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
          <button
            className={`${about.fit} btn btn-outline-dark mt-2 d-flex align-items-center`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="m-0 me-1">Visit Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
            >
              <path
                d="M0.933594 8.2081V1.1719C0.933594 0.684685 1.52266 0.440697 1.86716 0.785201L5.38527 4.3033C5.59882 4.51686 5.59882 4.86314 5.38527 5.07669L1.86716 8.59479C1.52266 8.93933 0.933594 8.69531 0.933594 8.2081Z"
                fill="#060606"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${about.box} col-6`}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
        ></div>
      </div>

      <div className={`${about.around} row mt-5`}>
        <div
          className={`${about.box} col-6`}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
        ></div>
        <div
          className={`${about.widd} p-2 col-6`}
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
          <button
            className={`${about.fit} btn btn-outline-dark mt-2 d-flex align-items-center`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <p className="m-0 me-1">Visit Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
            >
              <path
                d="M0.933594 8.2081V1.1719C0.933594 0.684685 1.52266 0.440697 1.86716 0.785201L5.38527 4.3033C5.59882 4.51686 5.59882 4.86314 5.38527 5.07669L1.86716 8.59479C1.52266 8.93933 0.933594 8.69531 0.933594 8.2081Z"
                fill="#060606"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
