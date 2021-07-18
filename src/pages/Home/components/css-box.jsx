import React from 'react';
import { Stack,Text } from '@chakra-ui/react';
import {Layout,Spacing,Size,Typography,Backgrounds,Border,Effect} from './index'
import MultiAccordion from 'components/Accordion/multi-accordion'

export default function Demo({applyStyles}) {
  const tools = ["Layout","Spacing","Size","Typography","Backgrounds","Border","Effect"]
  const cssInputComponentButton = tools.map((tool,index)=><Text key={index}>{tool}</Text>)
  const cssInputComponents = [<Layout key="layout"/>,<Spacing key="spacing"/>,<Size key="size"/>,<Typography key="typography"/>,<Backgrounds key="backgrounds"/>,<Border key="border"/>,<Effect key="effect"/>]
  let accordionItems = []
  for(let i=0;i<cssInputComponentButton.length;i++){
    let accordionItem = {}
    accordionItem.AccordionButtonComponent = cssInputComponentButton[i]
    accordionItem.AccordionPanelComponent = cssInputComponents[i]
    accordionItems[i] = accordionItem 
  }
  return (
    <Stack as="form" onSubmit={applyStyles} width="full">
      {/* <FormControl id="color">
        <FormLabel>Color</FormLabel>
        <Input placeholder="Color" name="color" />
      </FormControl>
      <FormControl id="background">
        <FormLabel>Background</FormLabel>
        <Input placeholder="Background" name="background" />
      </FormControl> */}
      <MultiAccordion accordionItems={accordionItems} />
    </Stack>
  );
}