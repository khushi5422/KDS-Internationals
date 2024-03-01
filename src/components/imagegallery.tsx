import React from 'react';
import Home from '@/styles/Home.module.css'

export default function ImageGallery() {
  return (
      <div className={`${Home.gallery_row} mt-5`}>
        <div className={`${Home.gallery_column}`}>
          <img src="blackcardemon.webp" alt="blackcardemon"  loading="lazy"/>
          <img src="blackpepper.webp" alt="blackpepper" loading="lazy" />
          <img src="chilly.webp" alt="chilly"  loading="lazy"/>
        </div>
        <div className={`${Home.gallery_column}`}>
          <img src="cumin.webp" alt="cumin" loading="lazy" />
          <img src="Fennelseeds.webp" alt="Fennelseeds" loading="lazy" />
          <img src="garlic.webp" alt="garlic"  loading="lazy"/>
        </div>
        <div className={`${Home.gallery_column}`}>
          <img src="ginger.webp" alt="ginger"  loading="lazy"/>
          <img src="greenchilly.webp" alt="greenchilly"  loading="lazy"/>
          <img src="poppyseeds.webp" alt="poppyseeds" loading="lazy" />
        </div>
      </div>
  );
};

