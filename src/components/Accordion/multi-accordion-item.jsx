import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

export default function MultiAccordionItems({ accordionItems = [] }) {
  return (
    <>
      {accordionItems.map(
        ({ AccordionButtonComponent, AccordionPanelComponent }, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionButton bg="gray.100">
                <Flex width="full" justifyContent="space-between">
                  {AccordionButtonComponent}
                  <AccordionIcon />
                </Flex>
              </AccordionButton>
              <AccordionPanel>{AccordionPanelComponent}</AccordionPanel>
            </AccordionItem>
          );
        }
      )}
    </>
  );
}
