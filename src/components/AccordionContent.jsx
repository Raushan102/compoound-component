import React from "react";
import { useAccordionContext } from "./Accordion";


function AccordionContent({id ,children,className}) {

  const {openId}=useAccordionContext()
  return (
    <div
      className={ ` ${className}
        ${openId === id ? "accordion-item-content open " : "accordion-item-content "}`
      }
     
    >
      {children}
    </div>
  );
}

export default AccordionContent;
