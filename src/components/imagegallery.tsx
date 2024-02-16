import Image from 'next/image';
import React from 'react';
import NewComponent from './new';

export default function ImageGallery() {

  return (
    <>
      <style>{`
    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
      }
      
      .column {
        flex: 25%;
        max-width: 33.3%;
        padding: 0 4px;
      }
      
      .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
        filter: grayscale(1) brightness(0.5);
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s linear;
      }
      
      .column img:hover {
        filter: grayscale(0);
      }
      
      @media screen and (max-width: 700px) {
        .column {
          flex: 100%;
          max-width: 100%;
        }
        .column img {
          filter: grayscale(1) brightness(0.5);
        }
      }
      
      
    // `}</style>
      <div className="row mt-5">
        <div className="column">
          <img src="blackcardemon.webp" alt="blackcardemon" />
          <img src="blackpepper.webp" alt="blackpepper" />

          <img src="chilly.webp" alt="chilly" />
        </div>
        <div className="column">
          <img src="cumin.webp" alt="cumin" />

          <img src="Fennelseeds.webp" alt="Fennelseeds" />

          <img src="garlic.webp" alt="garlic" />
        </div>
        <div className="column">
          <img src="ginger.webp" alt="ginger" />

          <img src="greenchilly.webp" alt="greenchilly" />

          <img src="poppyseeds.webp" alt="poppyseeds" />
        </div>
      </div>
    </>
  );
};

