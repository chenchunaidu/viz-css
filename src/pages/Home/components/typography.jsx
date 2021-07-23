import React from 'react'
import {FormControl, FormLabel,Input} from "@chakra-ui/react"
import { useRecoilState } from 'recoil'
import {cssBoxState} from 'atoms/cssBox'
export default function Typography() {
    const [cssBox,setCssBox] = useRecoilState(cssBoxState)
    
    return (
        <>
        <FormControl>
            <FormLabel>
                Font size
            </FormLabel>
            <Input value={cssBox["font-size"]} onChange={(e)=>{setCssBox({...cssBox,"font-size":e.target.value})}}/>
        </FormControl>
        <FormControl>
            <FormLabel>
                Color
            </FormLabel>
            <Input value={cssBox["color"]} onChange={(e)=>{setCssBox({...cssBox,"color":e.target.value})}}/>
        </FormControl>
        <FormControl>
            <FormLabel>
                Line height
            </FormLabel>
            <Input/>
        </FormControl>
        <FormControl>
            <FormLabel>
                Letter spacing
            </FormLabel>
            <Input/>
        </FormControl>
        </>
    )
}
