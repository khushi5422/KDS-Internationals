import React from "react";

export default function index() {
  return <>
    <style jsx>{`
        .box {
          width: 100%;
          height: 100%;
        }
        .center {
          width: 50%;
          margin: auto;
        }
      `}</style>
    <h2>FREQUENTLY ASKED QUESTIONS</h2>
    <div className="center">
      <img
        src="comingsoon.svg"
        alt="error message"
        className=" box align-center"
      />
    </div>
  </>
}
