import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, Container } from "react-bootstrap";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (targetId: string) => {
    setActiveAccordion((prev) => (prev === targetId ? null : targetId));
  };

  const accordionItems = [
    {
      title: "Ordering Process",
      description:
        "This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Shipping and Delivery",
      description:
        "This is the second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Product Information",
      description:
        "This is the third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      title: "Payment Methods.",
      description:
        "This is the third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
  ];

  return (
    <>
      <Head>
        <title>FREQUENTLY ASKED QUESTIONS</title>
        <meta name="description" content="Frequently Asked Questions" />
      </Head>
      <h2 className="p-2 text-center mt-1">FREQUENTLY ASKED QUESTIONS</h2>
      <Container>
        <div className="accordion" id="accordionExample">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button${activeAccordion === `collapse${index + 1}` ? " active" : ""
                    }`}
                  type="button"
                  onClick={() => toggleAccordion(`collapse${index + 1}`)}
                  aria-expanded={
                    activeAccordion === `collapse${index + 1}` ? "true" : "false"
                  }
                  aria-controls={`collapse${index + 1}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${index + 1}`}
                className={`accordion-collapse collapse${activeAccordion === `collapse${index + 1}` ? " show" : ""
                  }`}
                aria-labelledby={`heading${index + 1}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{item.description}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Container />
      </Container>
    </>
  );
};