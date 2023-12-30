import React from "react";

export default function Custom404() {
  return (
    <>
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
      <div className="center mt-3">
        <img
          src="error.png"
          alt="error message"
          className=" box align-center"
        />
      </div>
    </>
  );
}
