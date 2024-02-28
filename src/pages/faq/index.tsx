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
  
  return <>
  {/* https://www.wix.com/website-template/view/html/3347 */}

    <Head>
      <title>FREQUENTLY ASKED QUESTIONS</title>
      <meta name="description" content="Frequently Asked Questions" />
    </Head>
    <h2 className="p-2">FREQUENTLY ASKED QUESTIONS</h2>
    <Container>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button${activeAccordion === 'collapseOne' ? ' active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseOne')}
            aria-expanded={activeAccordion === 'collapseOne' ? 'true' : 'false'}
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse${activeAccordion === 'collapseOne' ? ' show' : ''}`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classNamees that we use to style each element. These classNamees control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS
            or overriding our default variables. Its also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button${activeAccordion === 'collapseTwo' ? ' active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
            aria-expanded={activeAccordion === 'collapseTwo' ? 'true' : 'false'}
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`accordion-collapse collapse${activeAccordion === 'collapseTwo' ? ' show' : ''}`}
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classNamees that we use to style each element. These classNamees control the
            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
            custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button${activeAccordion === 'collapseThree' ? ' active' : ''}`}
            type="button"
            onClick={() => toggleAccordion('collapseThree')}
            aria-expanded={activeAccordion === 'collapseThree' ? 'true' : 'false'}
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`accordion-collapse collapse${activeAccordion === 'collapseThree' ? ' show' : ''}`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classNamees that we use to style each element. These classNamees control the
            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
            custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within
            the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    </Container>
  </>
}
