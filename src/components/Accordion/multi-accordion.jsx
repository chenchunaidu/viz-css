import React from 'react'
import {Accordion} from '@chakra-ui/react'
import MultiAccordionItems from './multi-accordion-item'

export default function MultiAccordion({accordionItems}) {
    return (
        <>
            <Accordion defaultIndex={[0]} width="full" allowToggle>
                <MultiAccordionItems accordionItems={accordionItems}/>
            </Accordion>
        </>
    )
}
