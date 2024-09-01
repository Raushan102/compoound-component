import React from "react";

function AccordionItem({ className, id,children }) {
  return <li className={className} key={id}>{children}</li>;
}

export default AccordionItem;
