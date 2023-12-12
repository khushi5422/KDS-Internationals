import React from "react";
import styles from "../styles/Home.module.css";

export default function Parallax() {
  return (
    <>
      <div className={`${styles.parallaxContainer}`}>
        <div className={`${styles.parallax} mt-3`}></div>
        <h2 className={`${styles.parallaxText}`}>Get 10% off On all Spicy & Herbs</h2>
      </div>

    </>
  );
}