import React from 'react'
import { Paper } from '@mantine/core';


export default function CssBoxContainer({children}) {
    return (
        <Paper padding="md" shadow="xs" style={{height:"100%"}}>
            {children}
            </Paper>
    )
}
