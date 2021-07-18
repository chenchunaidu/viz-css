import React from 'react'
import { Box } from '@chakra-ui/react'


export default function CssBoxContainer({children}) {
    return (
        <Box padding="md" boxShadow="lg" style={{height:"100%"}}>
            {children}
            </Box>
    )
}
