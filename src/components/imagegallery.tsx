import Image from 'next/image';
import React from 'react';

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
          filter: grayscale(0) brightness(1);
        }
      }
      
    `}</style>
            <div className="row mt-5">
                <div className="column">
                    <img src="blackcardemon.png" alt=""  />

                    <img src="blackpepper.png" alt="" />

                    <img src="chilly.png" alt="" />

                    <img src="coriander.png" alt="" />
                </div>
                <div className="column">
                    <img src="cumin.png" alt="" />

                    <img src="Fennelseeds.png" alt="" />

                    <img src="garlic.png" alt="" />
                </div>
                <div className="column">
                    <img src="ginger.png" alt="" />

                    <img src="greenchilly.png" alt="" />

                    <img src="poppyseeds.png" alt="" />
                </div>
            </div>
        </>
    );
};

