import React from 'react';
import { Stack,Text,Button } from '@chakra-ui/react';
import {Layout,Spacing,Size,Typography,Backgrounds,Border,Effect} from './index'
import MultiAccordion from 'components/Accordion/multi-accordion'

export default function Demo({ applyStyles }) {
  const tools = [
    "Layout",
    "Spacing",
    "Size",
    "Typography",
    "Backgrounds",
    "Border",
    "Effect",
  ];
  const cssInputComponentButton = tools.map((tool, index) => (
    <Text key={index}>{tool}</Text>
  ));
  const cssInputComponents = [
    <Layout key="layout" />,
    <Spacing key="spacing" />,
    <Size key="size" />,
    <Typography key="typography" />,
    <Backgrounds key="backgrounds" />,
    <Border key="border" />,
    <Effect key="effect" />,
  ];
  let accordionItems = [];
  for (let i = 0; i < cssInputComponentButton.length; i++) {
    let accordionItem = {};
    accordionItem.AccordionButtonComponent = cssInputComponentButton[i];
    accordionItem.AccordionPanelComponent = cssInputComponents[i];
    accordionItems[i] = accordionItem;
  }
  return (
    <Stack  width="full">
      <MultiAccordion accordionItems={accordionItems} />
      <Button type="submit" onClick={applyStyles}>Apply</Button>
    </Stack>
  );
}
