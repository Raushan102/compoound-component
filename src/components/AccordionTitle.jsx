import React from "react";
import { useAccordionContext } from "./Accordion";

function AccordionTitle({children, id ,className }) {
  const { toggleAccordion } = useAccordionContext();
  function handleAccordion(id) {
    toggleAccordion(id);
  }

  return <h3 onClick={() => handleAccordion(id)} className={className} >{children}</h3>;
}

export default AccordionTitle;
