import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function index() {
  return <>
   <Head>
        <title>FREQUENTLY ASKED QUESTIONS</title>
        <meta name="description" content="J K Exports" />
      </Head>
    <style jsx>{`

        .center {
          width: 50%;
          margin: auto;
        }
        @media only screen and (max-width: 769px) {
          .center {
            width: 70%;
            
          }
        }
      `}</style>
    <h2 className="p-2">FREQUENTLY ASKED QUESTIONS</h2>
    <div className="center">
      <Image src={"comingsoon.svg"} alt=" Error Message" width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  </>
}
