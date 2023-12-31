import React, { ReactNode } from "react";
import Navigationbar from "./navbar";
import Footer from "./footer";
import Navug from "./navig";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <style jsx>{`
        .maiin {
          display: grid;
          grid-template-areas:
            "head head head"
            "content content content"
            "foot foot foot";
          grid-template-rows: 86px auto 20px;
          min-height: 90vh;
        }
        .headeer {
          grid-area: head;
        }
        .articlee {
          grid-area: content;
        }
        .footeer {
          grid-area: foot;
        }
      `}</style>
      <div className="maiin">
        <div className="headeer">
         <Navigationbar/>
        </div>

        <div className="articlee">
          <main>{children}</main>{" "}
        </div>
        <div className="footeer"> <Footer /></div>
      </div>
    </>
  );
}
