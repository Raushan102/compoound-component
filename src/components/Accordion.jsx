import { createContext, useContext, useState } from "react";

import React from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("failed to get the accordion content");
  }
  return ctx;
}

function Accordion({ className, children }) {
  const [openId, setOpenId] = useState(null);

  function toggleAccordion(id) {
    setOpenId((previousID) => {
      if (previousID === id) {
        return null;
      } else {
        return id;
      }
    });
  }

  const value = {
    openId,
    toggleAccordion,
  };
  return (
    <AccordionContext.Provider value={value}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
