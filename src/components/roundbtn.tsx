import React from "react";

export default function Roundbtn() {
  return (
    <>
      <style>
        {`
      .mycard {
        display: flex;
width: 9.6375rem;
height: 3.41188rem;
padding: 1rem 1.85338rem 1.09938rem 1.875rem;
justify-content: center;
align-items: center;
flex-shrink: 0;
        border-radius: 3.125rem;
        border: 2px solid #F4B323;
        background: white;
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.20);
    }
    .mycard:hover{
      background-color: #F4B323 !important;
    }
    .upper{
      width: 28.96rem;
height: 24.375rem;
flex-shrink: 0;
background: blue;
    }
    .inner{
      display: inline-flex;
padding: 1rem 3.04688rem 1.25rem 1.25rem;
flex-direction: column;
align-items: flex-start;
gap: 0.71188rem;
    }
    .name{
      display: flex;
width: 7.72006rem;
height: 2.125rem;
flex-direction: column;
justify-content: center;
color: #FFF;
font-family: Spicy Rice;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: 1.65rem; /* 110% */
letter-spacing: 0.075rem;
    }
      
      `}
      </style>

      <div className="upper">
        <div className="inner">
          <div className="name">Cardamom</div>
          <button className="mycard p-2">Shop Now</button>
        </div>
      </div>
    </>
  );
}
