import React, { ReactNode } from "react";
import Navigationbar from "./navbar";

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
          grid-template-rows: 55px auto 20px;
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
          <Navigationbar />
        </div>

        <div className="articlee">
          <main>{children}</main>{" "}
        </div>
        <div className="footeer">{/* <Footer /> */}</div>
      </div>
    </>
  );
}
